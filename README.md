## Autocompleter for Light Table

**WARNING: This is work in progress and currently just a prototype. Eventually it
might replace the existing autocomplete functionality in Light Table**


### Design Goals
* Support as much as possible of the current features
* Start using the CodeMirror [showHints](http://codemirror.net/addon/hint/show-hint.js) addon. This allows us to use the existing hints feature for javascript, *anywords*, css, html and xml
* Make it much more approachable for plugin authors to plug into the autocompleter, especially for async hints
* Increase maintainability for the Core team
* Make it easier to contribute



### Current status
It's merely a proof of concept so far. A simple implementation for handling a combination of the javascript and anyword hinter addons from CodeMirror.

#### Sync vs Async
In an attempt to simplify handling the combination of sync and async hints, all hint providers must act as they are async. A hint provider should return a core-async channel. If the provider is able to provide hints very fast, just put them on the channel immediatly but take care not to block the main thread of LT ! For async handling it's up to the provider to keep track of their  channel, so they can put results to it as and when these are available.

The plugin will handle the coordination of multiple channels (from multiple providers).
There is a default timeout, which when reached will result in showing the hinter with whatever results were received in time. If all providers provide results on their channels in time, a merge of the results will be shown in the hinter.


### Trying it out
Clone the plugin to your `$LT_HOME/plugins` folder.
Please note that it disables pretty much any other existing autocompletion features from LT.
