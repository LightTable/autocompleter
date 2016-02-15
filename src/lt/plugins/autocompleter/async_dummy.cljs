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


;; We should probably provide an api for channel storage (and cleanup) management
;; Put it here for now to illustrate a (simple) possible solution

;; TODO: not exactly uid quality...
(defn- chan-id [ch]
  (+ (ac/curr-time) (hash ch)))

(defn- store-ch [ed ch]
  (let [chs (or (:async-dummy-channels @ed) {})
        ch-id (chan-id ch)]
    (object/assoc-in! ed
                      [:async-dummy-channels]
                      (assoc chs ch-id ch))
    ch-id))

(defn- get-ch [ed ch-id]
  (get-in @ed [:async-dummy-channels ch-id]))

(defn- remove-ch [ed ch-id]
  (let [chs (or (:async-dummy-channels @ed) {})]
    (object/assoc-in! ed
                      [:async-dummy-channels]
                      (dissoc chs ch-id ))))

;; (let [ed (pool/last-active)]
;;   ;(object/assoc-in! ed [:async-dummy-channels] nil)
;;   (println (:async-dummy-channels @ed)))



;; (let [ed (atom {})
;;       ch (chan)]
;;   (let [ch-id (store-ch ed ch)]
;;     (.log js/console (get-ch ed ch-id))))



(def background-worker
  (background
    (fn [obj-id token ch-id]
      (js/setTimeout
        (fn []
          (let [all-hints ["map" "map-indexed" "map-reduce" "max" "min"]
                starts-with #(= 0 (.indexOf %1 %2))
                sym (:string token)]
            (js/_send obj-id
                      :async-hint-results
                      (clj->js {:sym sym
                                :chid ch-id
                                :list (filter #(starts-with % sym) all-hints)
                                :from {:ch (:start token) :line (:line token)}
                                :to {:ch (:end token) :line (:line token)}}))))
        (+ 200 (rand-int 1)) ;; This provokes an interesting edge case where results may come out of order (try larger rand to see)!
        ))))





(defn- ->hints [ed res-obj]
  (let [{:keys [sym from to] :as res} (js->clj res-obj :keywordize-keys true)
        token (ac/get-token ed)]

    (if (< (- (:end token) (:ch to)) 2)
      (map #(hash-map :text %
                     :displayText %
                     :render (fn [el self data]
                               (dom/html el (js/wrapMatch (.-displayText data) #js {:matched sym})))
                     :from from
                     :to to)
          (:list res))
      [])))


(behavior ::async-hint-results
          :triggers #{:async-hint-results}
          :desc "Async dummy: Hint results"
          :reaction (fn [ed res]
                      (when-let [ch (get-ch ed (.-chid res))]
                        (put! ch (->hints ed res))
                        (remove-ch ed (.-chid res)) ;; TODO: if there are no results, no cleanup happens !
                        )))


(behavior ::async-hints
          :triggers #{:init-hints}
          :desc "Autocompleter: Async dummy hints"
          :reaction (fn [ed channels]
                      (let [pos (editor/->cursor ed)
                            token (assoc (ac/get-token ed) :line (:line pos))
                            ch (chan)]
                        (if (ac/should-hint? ed)
                          (let [ch-id (store-ch ed ch)]
                            (background-worker ed token ch-id (ac/curr-time))
                            (conj channels ch))
                          channels))))
