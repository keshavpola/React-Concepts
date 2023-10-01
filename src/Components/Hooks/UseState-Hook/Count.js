import React, { useState } from 'react'

const Count = () => {
    const [count,setCount]= useState(0);
  return (
    <div>
    <h1>Normal Number system</h1>
    <>Number Count:{count} <br/>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <button onClick={()=>setCount(0)}>Reset</button>
    <button onClick={()=>setCount(count-1)}>Decrement</button></>

    <h1>Number system using previous count </h1>
    <>previous method number count:{count}<br/>
    <button onClick={()=>setCount((prevCount)=>prevCount+1)}>Increment</button>
    <button onClick={()=>setCount(0)}>Reset</button>
    <button onClick={()=>setCount((prevCount)=>prevCount-1)}>Decrement</button></>
    </div>
  )
}

export default Count
