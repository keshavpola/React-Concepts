import React from 'react'
import CountWithoutMemo from './CountWithoutMemo'
import CountWithMemo from './CountWithMemo'

const MemoApp = () => {
  return (
    <div>
      <h1>UseMemo Hook in React js</h1>
      <h3>it is used to enhance the performance of that required component</h3>
      <hr/>
      <h2>Without useMemo()</h2>
      <CountWithoutMemo/>
      <hr/>
      <h2>With useMemo()</h2>
      <h3> by using useMemo hook we can avoid unwanted value calls in the application</h3>
      <CountWithMemo/>
    </div>
  )
}

export default MemoApp
