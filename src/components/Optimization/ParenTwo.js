import React, { useState } from 'react'
import ChildTwo, { MemoizedChildTwo } from './ChildTwo'

function ParentTwo() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('Alfredo')

  console.log('ParentTwo Render')

  /**
   * Example of Optimization using React.memo
   * You can use React.memo to wrap components if they render
   * the same result given the same props doing so will give
   * you a performance boost in some cases by minimizing the
   * render output.
   * So if your component porps don't change between renders
   * react will skip rendering component and reuse the last
   * rendered result.
   * 
   * In resume, in React when a parent component renders, a
   * child component might un-necessarily render.
   * To optimize this behavior, you can use React.memo and
   * pass in the child component.
   * React.memo will perfomr a shallow comparision of the
   * previous and new props and re-render the child component
   * only if the props have changed.
   */
  
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
      <button onClick={() => setName('Abyzou')}>Change name</button>
      <MemoizedChildTwo name={name}/>
    </div>
  )
}

export default ParentTwo
