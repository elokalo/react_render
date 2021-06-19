import React from 'react'

function ChildThree({children, name}) {
  console.log('ChildThree Render')

  /**
   * The children props in React is always a new reference
   * which will cause the child to always render, there is
   * no need to wrap your child component with React.memo
   * if the child component itself has children elements
   */
  return (
    <div>
      {children} {name}
    </div>
  )
}

export default ChildThree
export const MemoizedChildThree = React.memo(ChildThree)

