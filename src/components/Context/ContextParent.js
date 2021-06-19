import React, { useState } from 'react'
import { MemoizedChildA } from './ContextChildren'

export const CountContext = React.createContext()
const CountProvider = CountContext.Provider

function ContextParent({ children }) {

  const [count, setCount] = useState(0)

  console.log('ContextParent Render')

  /**
   * This is an example explain of the useContext hook
   * the behavior of render and re-render.
   * In this case the render behavior is the same of the
   * other scenarios of initial render, this is the render
   * of the component tree of React.
   * The re-render behavior is the default of React, if
   * the parent needs a re-render all the recursively children
   * will be re-render, but in this case only de ContextParent
   * and the ChildC use the state, therefore the ChildA and
   * ChildB will not be re-render for resolve this problem
   * is using React.memo.
   * Only the components that the Context will consume we have
   * the memoized component because the component tree have the
   * logic to detect what component is the Consumer and update
   * the state of the component tree.
   * The other way to optimize the re-render behavior is 
   * using the same element reference pass as prop the children
   * components and the children are rendering like props
   * we only re-render the children that is set the state,
   * because the props don't change
   */

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count {count}</button>
      <CountProvider value={count}>
        {/*<MemoizedChildA/>*/}
        {children}
      </CountProvider>
    </div>
  )
}

export default ContextParent
