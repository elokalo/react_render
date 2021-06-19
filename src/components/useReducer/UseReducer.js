import React, { useReducer } from 'react'

const initialState = 0

const reducer = (state, action) =>{
  switch(action) {
    case 'increment': return state + 1
    case 'decrement': return state - 1
    case 'reset': return initialState
    default: return state
  }
}

function UseReducer() {

  const [count, dispatch]  = useReducer(reducer, initialState)
  console.log('useReducer render')
  /**
   * The useReducer render behaves similar to the useState
   * the first difference is the re-render of the component
   * in useReducer will pass in the dispatch function, any
   * time you dispatch an action the component re-render.
   * In the other scenarios of the re-render of useReducer
   * have the same behavior of the useState hook
   */
  return (
    <div>
      <h4>{count}</h4>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default UseReducer
