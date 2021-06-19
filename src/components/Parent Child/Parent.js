import React, { useState } from 'react'
import Child from './Child'

function Parent() {

  const [count, setCount] = useState(0)
  console.log('Parent Component Render')

  /**
   * The default behavior is the simply render of the parent
   * and the subsequent childs.
   * First case: New state is different from the old state
   * If the Parent component set a function causes the
   * re-render behavior and if the parent component re-renders
   * the child component will also re-render.
   * 
   * Second case: New state is same as the old state
   * 
   * a. Right after the initial render => If the parent
   * did not re-render there is no need for the child component
   * to re-render
   * 
   * b. After re-renders one or more times => If the parent
   * component set the state of a new value so react will
   * re-render parent component and if the parent component
   * re-renders the child component also re-renders
   * But in the second time if set the state again with the 
   * same value so the new state are the same as the old state
   * the result thats the parent componen will be re-render
   * but the child component will not re-render, this is an
   * exception case because is an unncessary render.
   * This is happens because React only checks the components
   * flagged that needs an update in the component tree,
   * in this case Parent component is only the component that
   * needs and update.
   * 
   * In resume, when parent component renders, React will
   * recursively render all of its child components.
   * If the new state same as old state after initial render
   * both parent and child do not re-render.
   * If the new state same as old state after re-renders the
   * parent re-renders one more time but childe never re-renders
   */
  
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
      <button onClick={() => setCount(0)}>Count to 0</button>
      <button onClick={() => setCount(5)}>Count to 5</button>
      <Child/>
    </div>
  )
}

export default Parent
