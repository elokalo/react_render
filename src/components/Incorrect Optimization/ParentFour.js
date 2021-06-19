import React, { useState, useMemo, useCallback } from 'react'
import { MemoizedChildFive } from './ChildFive'

function ParentFour() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('Alfredo')

  const person = {
    fname: 'Bruce',
    lname: 'Wayne'
  }

  const memoizedPerson = useMemo(() => person, [])

  const handleClick = () => {}

  const memoizedHandleClick = useCallback(handleClick, [])

  console.log('ParentFour Render')

  /**
   * Example of incorrect use of React.memo with props reference
   * We can observe if you pass an object like prop in a
   * memoized component both the parent component and the 
   * child component will be re-rendered, this is happen
   * because every time that the parent component re-renders
   * a new 'person' object reference is created and then 
   * passed as prop to the child component, so the use
   * of React.memo cannot optimize and hence the child also
   * re-renders, this effect have the same result with
   * functions.
   * We can resolve this problem using the hooks useMemo
   * for object props and useCallback for functions.
   */
  
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
      <button onClick={() => setName('Abyzou')}>Change name</button>
      <MemoizedChildFive name={name} handleClick={memoizedHandleClick} />
      {/*<MemoizedChildFive name={name} person={memoizedPerson} />*/}
    </div>
  )
}

export default ParentFour
