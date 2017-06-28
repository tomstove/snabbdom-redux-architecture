"use strict";

import h from 'snabbdom/h'

// Actions
const INC = 'INC',
      DEC = 'DEC',
      ASYNC_START = 'ASYNC_START',
      ASYNC_END = 'ASYNC_END'


export function homeView(state, dispatch) {
  return h('div', [
    h('button', {
      on   : { click: function(e) {
        dispatch({ type: ASYNC_START })
        setTimeout(function() {
          dispatch({ type: INC })
          dispatch({ type: ASYNC_END })
        }, Math.floor(Math.random() * 3000))
      }}
    }, '+'),
    h('button', {
      on   : { click: function(e) {
        dispatch({ type: DEC })
      }}
    }, '-'),
    h('div', `Count : ${ state.count.toString() }`),
  ]);
}

export function aboutView(state, dispatch) {
  return h('div', [
    h('button', {
      on   : { click: function(e) {
        dispatch({ type: ASYNC_START })
        setTimeout(function() {
          dispatch({ type: INC })
          dispatch({ type: ASYNC_END })
        }, Math.floor(Math.random() * 3000))
      }}
    }, '++'),
    h('button', {
      on   : { click: function(e) {
        dispatch({ type: DEC })
      }}
    }, '--'),
    h('div', `Count : ${ state.count.toString() }`),
  ]);
}
