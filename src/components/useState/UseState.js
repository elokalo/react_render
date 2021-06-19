import React, { useState } from 'react'

function UseState() {

  const [count, setCount] = useState(0)
  console.log('UseState Render')
  /**
   * All the hooks we have render or re-render behavior
   * divided in two phases
   * The useState hook re-render behavior in the first phase
   * "Render phase" when we click on the button in the
   * UseState component the state hooks setter function called
   * which flash of UseState component as needing an update
   * during the "render phase" react go through to the
   * component tree and identify the flag components in this
   * example UseState is the only component that needs an 
   * update.
   * React then uses the createElement() method to convert
   * the components JSX into React Element (Javascript objects)
   * It will then diff the element produced from the previous
   * render to the new render it will identify the changes
   * compare de React Elements and update the UseState component.
   * Finally hand them over to the "Commit Phase" were the 
   * changes are applied to the DOM
   * The component does not re-render if the changes of the
   * component have the same value, so after the initial
   * render if you call a setter function (setCount) but set
   * the state to the same value the component will not 
   * re-render.
   * In resume the setter function from a useState hook
   * will cause the component to re-render.
   * The exception is when you update a state hook to the same
   * value as the current value.
   * If have the same value after the initial render the 
   * component will not re-render.
   * IF have the same value after re-renders this values only
   * apply if they are primivite (int, string, boolean), 
   * react will render that specific component one more time
   * and then bails out from any subsequent renders.
   */
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
      <button onClick={() => setCount(0)}>Count to 0</button>
      <button onClick={() => setCount(5)}>Count to 5</button>
    </div>
  )
}

export default UseState
