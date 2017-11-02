"use strict";

export default function createStore(reducer) {
  let currentReducer = reducer,
      state = { count: 0, isFetching: false, currentUrl: '/' },
      listeners = []

  function subscribe(listener) {
    listeners.push(listener)
  }

  function getState() {
    return state
  }

  function dispatch(action) {
    state = currentReducer(state, action)
    for(let i = 0; i < listeners.length; i++) {
      let listener = listeners[i]
      listener()
    }
  }

  return {
    subscribe,
    getState,
    dispatch
  }

}
