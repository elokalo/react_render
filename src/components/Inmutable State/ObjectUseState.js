import React, { useState } from 'react'

const initialState = {
  fname: 'Bruce',
  lname: 'Wayne'
}

function ObjectUseState() {

  const [person, setPerson] = useState(initialState)

  const changeName = () => {
    /*
    person.fname = 'Clark'
    person.lname = 'Kent'
    setPerson(person)
    */
    const newPerson = {...person}
    newPerson.fname = 'Clark'
    newPerson.lname = 'Kent'
    setPerson(newPerson)
  }

  console.log('ObjectUseState Render')
  /**
   * Mutating an object or an array as state will not cause
   * a re-render when used with the useState or useReducer
   * hook.
   * To re-render, make a copy of the existing state, modify
   * as necessary and then pass the new state to the setter
   * function or while returning from a reducer function.
   * Directly mutating the state is an easy way to create 
   * bugs in your application. Make sure you don't do that.
   */
  return (
    <div>
      <button onClick={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}

export default ObjectUseState
