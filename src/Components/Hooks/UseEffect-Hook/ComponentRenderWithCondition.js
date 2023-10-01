import React, { useEffect, useState } from 'react'

const ComponentRenderWithCondition = () => {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log(`clicked ${count} times`)
        // document.title=`clicked ${count} times`
        // console.log(document.title)
    },[count])
  return (
    <div>
      <h1>when every component render with a condition</h1>
      <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
    </div>
  )
}

export default ComponentRenderWithCondition
