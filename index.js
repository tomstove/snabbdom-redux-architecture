"use strict";

import createStore from './createStore.js'
import createRenderer from './createRenderer.js'
import reducer from './reducer.js'

let store,
    renderer,
    el


store = createStore(reducer)
renderer = createRenderer(store)


el = document.getElementById('placeholder')

renderer.init(el)
