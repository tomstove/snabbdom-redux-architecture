"use strict";

import NProgress from 'nprogress'

function counter(state, action) {
  switch (action.type) {
    case 'INC':
      return { ...state, count: state.count + 1 }
    case 'DEC':
      return { ...state, count: state.count - 1 }
    case 'ASYNC_START':
      console.log('async started')
      NProgress.start()
      return { ...state, isFetching: true }
    case 'ASYNC_END':
      console.log('async finished')
      NProgress.done()
      return { ...state, isFetching: false }
    default:
      return state
  }
}

export default counter
