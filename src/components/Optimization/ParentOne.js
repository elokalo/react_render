import React, { useState } from 'react'

function ParentOne({ children }) {

  const [count, setCount] = useState(0)
  console.log('ParentOne Render')

  /**
   * Causes for re-render:
   * 1. A component can re-render if it calls a setter
   * function or a dispatch function
   * 
   * 2. A component can render if its parent component
   * rendered
   * 
   * If we moved the child component from beign invoked in
   * the parent component JSX to being passed as a prop it
   * could be any propo but we choose to use 'children'
   * 
   * Same element reference:
   * In our component tree on the ParentOne Component have 
   * the children components as props, fundamentals in React
   * a component can chage its state but it can never change
   * its props, with in mind this React automatically
   * provides the optimization.
   * React looks at OptParentOne component, convert button
   * and children prop to react element, now re-render is
   * caused by a state change in OptParentOne but the component
   * has no means of directly changing the props, the children
   * props couldn't have changed.
   * In the render phase make us of the React element that was
   * previously created, children props has to be referencing
   * the same elemento from previous render (same props), will
   * skip the render phase for the ChildOne component.
   * 
   * In resume, in React when a parent component renders, React
   * will recursively render all of its child components.
   * The unncessary renders where child component goes through
   * the render phase but not the commit phase.
   * You can extract the expensive child component and instead
   * pass it down as props to the parent component.
   * Whenever there is a re-render caused by a change in the
   * state of the parent component, React will optimize the
   * re-render for you by knowing that the props has to be 
   * referencing the same element after the render.
   */
  
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
      {children}
    </div>
  )
}

export default ParentOne
