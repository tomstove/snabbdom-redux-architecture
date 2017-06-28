"use strict";

import snabbdom from 'snabbdom'
import { init } from 'snabbdom'

const patch = init([
  require('snabbdom/modules/class').default,          // makes it easy to toggle classes
  require('snabbdom/modules/props').default,          // for setting properties on DOM elements
  require('snabbdom/modules/style').default,          // handles styling on elements with support for animations
  require('snabbdom/modules/eventlisteners').default  // attaches event listeners
]);

let dispatch,
    currentVnode

export default function createRenderer(dispatch, view) {
  dispatch = dispatch

  function render(state) {
    let oldVnode = currentVnode
    let newVnode = view(state, dispatch)
    currentVnode = newVnode

    patch(oldVnode, newVnode)
  }

  function init(state, el) {
    let initVnode = el
    let newVnode = view(state, dispatch)
    currentVnode = newVnode

    patch(initVnode, newVnode)
  }

  return {
    render,
    init
  }
}
