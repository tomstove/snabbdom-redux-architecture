"use strict";

// Actions
const INC = 'INC',
      DEC = 'DEC',
      ASYNC_START = 'ASYNC_START',
      ASYNC_END = 'ASYNC_END'


export default function createViews() {
  let me = 'me'
  function home(state, dispatch, el) {
    const markup = `
    <div>
      <button id="incbtn">+</button>
      <button id="decbtn">-</button>
      <h2>Count: ${ state.count }</h2>
    </div>`

    document.getElementById('placeholder').innerHTML = markup

    document.getElementById('incbtn').addEventListener('click', function(e) {
      dispatch({ type: ASYNC_START })
      setTimeout(function() {
        dispatch({ type: INC })
        dispatch({ type: ASYNC_END })
      }, Math.floor(Math.random() * 3000))
    })

    document.getElementById('decbtn').addEventListener('click', function(e) {
      dispatch({ type: DEC })
    })
  }

  return {
    home
  }
}
