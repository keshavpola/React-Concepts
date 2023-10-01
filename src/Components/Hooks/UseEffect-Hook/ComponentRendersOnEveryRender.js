import React, { useEffect, useState } from 'react'

const ComponentRendersOnEveryRender = () => {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        setTimeout(() => {
            setCount((count)=>(count+1))
        }, 1000);
    })
  return (
    <div>
      <h1>when component renders on every render</h1>
      <h3>I have renderes:{count} times</h3>
    </div>
  )
}

export default ComponentRendersOnEveryRender
