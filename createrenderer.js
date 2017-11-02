"use strict";

import history from 'history'
import createViews from './createviews.js'

let views = createViews()

export default function createRenderer(store) {
  store.subscribe(render)

  function render() {
    // put switch statement to act as simple router

    views.home(store.getState(), store.dispatch)
  }

  function init() {
    views.home(store.getState(), store.dispatch)
  }

  return {
    render,
    init
  }
}
