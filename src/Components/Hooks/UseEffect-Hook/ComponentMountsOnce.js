import React, { useEffect, useState } from 'react'

const ComponentMountsOnce = () => {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        setTimeout(() => {
            setCount((count+1))
        }, 1000);
    },[])
  return (
    <div>
      <h1>when component mounts only once</h1>
      <h3>I have renderes:{count} times</h3>
    </div>
  )
}

export default ComponentMountsOnce
