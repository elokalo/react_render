import React, { useState } from 'react'
import { MemoizedChildFour } from './ChildFour'
import { MemoizedChildThree } from './ChildThree'

function ParentThree() {

  const [count, setCount] = useState(0)
  const [name, setName] = useState('Alfredo')

  console.log('ParentThree Render')

  /**
   * Example of incorrect use of React.memo with children
   */
  
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
      <button onClick={() => setName('Abyzou')}>Change name</button>
      {/*
      <MemoizedChildThree name={name}>
        <strong>Hello</strong>
      </MemoizedChildThree>
      */}
      <MemoizedChildFour name={name}/>
    </div>
  )
}

export default ParentThree
