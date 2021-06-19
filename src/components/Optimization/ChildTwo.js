import React from 'react'

function ChildTwo() {
  console.log('ChildTwo Render')
  return (
    <div>
      ChildTwo component
    </div>
  )
}

export default ChildTwo
export const MemoizedChildTwo = React.memo(ChildTwo)

