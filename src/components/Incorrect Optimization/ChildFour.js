import React from 'react'

export const ChildFour = ({ name })  => {
  const date = new Date()
  console.log('ChildFour Render')
  /**
   * This is an incorrect use of React.memo because are use
   * a impure component make sure you're aware of the
   * consequences when using React.memo, by impure components
   * I'm sort of referring to components where the JSX can
   * change even though the props and state remain the same,
   * when I use dates or calculations are a examples to the
   * incorrect use of React.memo for optimization
   */
  return (
    <div>
      Hello {name}. It is currently {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
    </div>
  )
}

export const MemoizedChildFour = React.memo(ChildFour)
