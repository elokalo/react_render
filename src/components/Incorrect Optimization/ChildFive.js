import React from 'react'

function ChildFive({ name, handleClick }) {

  console.log('ChildFive Render')
  return (
    <div>
      Hello {name}
    </div>
  )
}

export default ChildFive
export const MemoizedChildFive = React.memo(ChildFive)
