"use strict";

import createStore from './createStore.js'
import createRenderer from './createRenderer.js'
import reducer from './reducer.js'

let store,
    renderer


store = createStore(reducer)
renderer = createRenderer(store)

renderer.init()
