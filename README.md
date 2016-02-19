## Autocompleter for Light Table

**WARNING: This is work in progress and currently just a prototype. Eventually it
might replace the existing autocomplete functionality in Light Table**


### Design Goals
* Support as much as possible of the current features
* Start using the CodeMirror [showHints](http://codemirror.net/addon/hint/show-hint.js) addon. This allows us to use the existing hints feature for javascript, *anywords*, css, html and xml
* Make it much more approachable for plugin authors to plug into the autocompleter, especially for async hints
* Improve maintainability for the Core team
* Make it easier to contribute



### Current status
It's merely a proof of concept so far. A simple implementation for handling a combination of the javascript and anyword hinter addons from CodeMirror. There is also a sample implementation for an async hint provider.


#### Pending issues
- **Flickering**: Using the async option for CM showHints cause flickering of the hint popup when typing (not using the async option causes timing conflicts when selecting items after typing moderately fast when using an async provider)
- **Keymap**: Custom keymap not implemented. Not 100% clear what would be the best implementation route
- **Multiple providers might differ on what constitutes a token**
    - **Popup placement**: the showHints plugin requires from-to attributes for the complete hint result. Used for postioning hints. Currently from/to for the result just uses the first item in the aggregate result. This causes unpredictable placement of the hint popup
    - **Surprising results**: The result list might become quite surprising to a user with different providers. This quickly becomes evident when using the anywords provider in combination with any other provider.
- **Sorting**: How to negotiate sorting when there are multiple providers ? Currently hardcoded to alphanumeric sort for the complete result.


#### Caching
It's tempting to add caching to the core of the autocompleter. However the drawback to this is that
this quickly makes it much harder for someone implementing an async provider to reason about the end result.
The current implementation in LT uses a fuzzy matcher to filter cached results. This is a cause for much confusion for plugin authors. Caching in core also forces a standardized token interpretation and token change detection behavior. This is problematic when using multiple providers. All things considered, it seems that it would be best to let each plugin provider worry about caching (and token change/cache invalidation). Core might expose some helper methods to make it easier for plugin providers to introduce caching though. Typically caching must be considered when results can't be provided within 50ms (ballpark figure) it seems.
However even with 50ms responses for hint results, the flickering issue mentioned above becomes quite bothersome.


#### Performance tuning
No attempts have been made to tune performance.

#### Default timeout
The default timeout for aggregated hint results should be a short as possible. The longer it is, the greater the chance that one "bad" provider might substantially mess up the autocompleter experience for a user.




#### Sync vs Async
In an attempt to simplify handling the combination of sync and async hints, all hint providers must act as they are async. A hint provider should return a core-async channel. If the provider is able to provide hints very fast, just put them on the channel immediatly but take care not to block the main thread of LT ! For async handling it's up to the provider to keep track of their  channel, so they can put results to it as and when these are available.

The plugin will handle the coordination of multiple channels (from multiple providers).
There is a default timeout, which when reached will result in showing the hinter with whatever results were received in time. If all providers provide results on their channels in time, a merge of the results will be shown in the hinter.


### Trying it out
Clone the plugin to your `$LT_HOME/plugins` folder.
Please note that it disables pretty much any other existing autocompletion features from LT.


## Usage


### Creating a sync hint provider
Well, it's still going to be async, but if you can provide the results immediatly (aka very fast) just put the results on the hint provider channel before you return the channel.

1. Create a hint provider behavior that returns a channel
2. Before returning the channel, just put the results from you hinting on the channel


```Clojure
(behavior ::my-fast-hints
          :triggers #{:init-hints}
          :desc "Autocompleter: My fast hints"
          :reaction (fn [ed channels]
                      (let [ch (chan) ;; create a core-async channel
                            ;; find applicable hints for your case
                            hints (my-hinter ed)]
                        ;; add the results to the channel
                        (put! ch hints)
                        (conj channels ch))))
```
The above logic is very simplistic, but it's important that if you do return a channel you
should also always put to it. Probably you wouldn't want to return a channel for you provider
if there are no results, in that case just return the input param channels.

*ALWAYS be nice and return the channels in the channels param unless you have a very good reason to discard any other previously registered provider. There is no deterministic order
that providers are registered, so you shouldn't rely upon what's present in the channels param.*



### Creating an async hint provider

1. Create a hint provider behavior that returns a channel.
1. Store the channel (perhaps in the editor object)
1. Implement the logic for finding applicable hints out of process (in some LT client probably)
1. Create a behavior that handles the async results
  * In this behavior write (put!) the results to the channel you stored off
  * If no results, do still write (empty vector/list) ! Otherwise the framework is forced to wait out the duration of the timeout, which is just wasteful


```Clojure
(:require [lt.plugins.autocompleter.core :as ac]
            [lt.objs.editor :as editor]
            [lt.object :as object]
            [cljs.core.async :as async :refer [put! chan]])
  (:require-macros [lt.macros :refer [behavior]]))



(behavior ::async-hints
          :triggers #{:init-hints}
          :desc "Autocompleter: Async dummy hints"
          :reaction (fn [ed channels]
                      (let [pos (editor/->cursor ed)
                            token (assoc (editor/->token ed pos) :line (:line pos))
                            ;; a core-async channel
                            ch (chan)]
                        (if (ac/should-hint? ed) ;; check that the token is worth hinting
                          (let [ch-id (store-channel ed ch)] ;; Store the channel
                            ;; send off the work to find applicable hints to some async worker
                            (background-worker ed token ch-id)
                            ;; add your channel so that it is listened too by the framework
                            (conj channels ch))
                          ;; if n/a for you,
                          ;; be nice and return input channels so that these are still handled
                          channels))))


(behavior ::async-hint-results
          :triggers #{:async-hint-results}
          :desc "Async dummy: Hint results"
          :reaction (fn [ed res]
                      (when-let [ch (get-channel ed (.-chId res)] ;; get the stored channel
                        ;; here we put the results on the channel we stored above
                        ;; Note: we put regardless of empty results
                        (put! ch (->hints res)))))


```


### Disabling a default provider or a provider from another plugin
You may find that for you plugin (maybe a language plugin or whatever), a default provider like the anyword provider is messing with your results. In such cases, you can always disable behaviors (or instruct users of your plugin to do so and explain why).


To disable the default anyword provider that ships with this plugin you can add the following
to you plugin's behaviors (or the user of your plugin can add to their user behaviors)

```Clojure
[:editor.yourlang :-lt.plugins.autocompleter.core/anyword-hints]

```

### Hint format
The hinter requires the following format for results

A list or vector with the following keys;

| Key  | Description |
| ------------- | ------------- |
| :text  | This is the completion text  |
| :displayText  | The text that is displayed in the hinter popup |
| :from   | {:ch x :line y} The start position of the user entered token the hint will replace if selected  |
| :to   | {:ch x :line y} The end position of the user entered token the hint will replace if selected  |
| :render  | Optional custom render function if you wish to customize how each item is rendered  |

#### Render function
The render function has 3 parameters
1. Element - The li element for the hint item
2. Self - The entire completion object (js object with keys; from, to and list)
3. data - The data for the item to be rendered


```Clojure
(map #(hash-map :text %
                    :displayText %
                    :render (fn [el self data]
                              (dom/html el (js/wrapMatch (.-displayText data) #js {:matched sym})))
                    :from from
                    :to to)
            (:list res))
```
In the example above we customize the display of an item to highlight matching characters from our input token (sym) with each item. We use a javascript helper function `wrapMatch` to achieve this effect.




