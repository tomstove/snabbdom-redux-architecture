"use strict";

import actions from './actions.js'

export default function createViews() {

  function home(state, dispatch, el) {
    const markup = `
    <div>
      <button id="incbtn">+</button>
      <button id="decbtn">-</button>
      <h2>Count: ${ state.count }</h2>
    </div>`

    document.getElementById('placeholder').innerHTML = markup

    document.getElementById('incbtn').addEventListener('click', function(e) {
      dispatch({ type: actions.ASYNC_START })
      setTimeout(function() {
        dispatch({ type: actions.INC })
        dispatch({ type: actions.ASYNC_END })
      }, Math.floor(Math.random() * 3000))
    })

    document.getElementById('decbtn').addEventListener('click', function(e) {
      dispatch({ type: actions.DEC })
    })
  }

  function about(state, dispatch) {
    const markup = `
    <div>
      <h2>about</h2>
      <p>Hello, this is the about page</p>
    </div>`

    document.getElementById('placeholder').innerHTML = markup
  }

  return {
    home,
    about
  }
}
