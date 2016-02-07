(ns lt.plugins.autocompleter.async-dummy
  "Dummy provider to illustrate async hinting"
  (:require [lt.plugins.autocompleter.core :as ac]
            [lt.objs.editor :as editor]
            [lt.objs.editor.pool :as pool]
            [lt.objs.command :as cmd]
            [lt.object :as object]
            [lt.util.js :as jsutil]
            [lt.util.dom :as dom]
            [cljs.core.async :as async :refer [put! chan]])
  (:require-macros [lt.macros :refer [behavior background ]]))




(def background-worker
  (background
    (fn [obj-id token]
      (js/setTimeout
        (fn []
          (let [all-hints ["map" "map-indexed" "map-reduce" "max" "min"]
                starts-with #(= 0 (.indexOf %1 %2))
                sym (:string token)]
            (js/_send obj-id
                      :async-hint-results
                      (clj->js {:sym sym
                                :list (filter #(starts-with % sym) all-hints)
                                :from {:ch (:start token) :line (:line token)}
                                :to {:ch (:end token) :line (:line token)}}))))
        (+ 100 (rand-int 500)) ;; This provokes an interesting edge case where results may come out of order !
        ))))



(defn- ->hints [res-obj]
  (let [{:keys [sym from to] :as res} (js->clj res-obj :keywordize-keys true)]
    (map #(hash-map :text %
                    :displayText %
                    :render (fn [el self data]
                              (dom/html el (js/wrapMatch (.-displayText data) #js {:matched sym})))
                    :from from
                    :to to)
            (:list res))))


(behavior ::async-hint-results
          :triggers #{:async-hint-results}
          :desc "Async dummy: Hint results"
          :reaction (fn [ed res]
                      (when-let [ch (:async-dummy-channel @ed)]
                        (put! ch (->hints res)))))


(behavior ::async-hints
          :triggers #{:init-hints}
          :desc "Autocompleter: Async dummy hints"
          :reaction (fn [ed channels]
                      (let [pos (editor/->cursor ed)
                            token (assoc (ac/get-token ed) :line (:line pos))
                            ch (chan)]
                        (if (ac/should-hint? ed)
                          (do
                            (object/assoc-in! ed [:async-dummy-channel] ch)
                            (background-worker ed token)
                            (conj channels ch))
                          channels))))

