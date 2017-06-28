"use strict";

import createStore from './createStore.js'
import createRenderer from './createRenderer.js'
import reducer from './reducer.js'
import {homeView, aboutView} from './views.js'

let store,
    renderer,
    el


store = createStore(reducer)
renderer = createRenderer(store.dispatch, homeView)

function render() {
  renderer.render(store.getState())
}

store.subscribe(render)

el = document.getElementById('placeholder')

renderer.init(store.getState(), el)
