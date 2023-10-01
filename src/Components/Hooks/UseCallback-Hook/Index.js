import React, {useState} from 'react'

const Index = () => {
    const [add,setAdd]=useState(0)
  return (
    <div>
      <h1>useCallback hook in react js</h1>
      <h3>it returns the memorized function as output and it is also used to 
        enhance the performance of react application
        <h1>{add}</h1>
      <button onClick={()=>setAdd(add+1)}>addition</button> 
      </h3>
    </div>
  )
}

export default Index
