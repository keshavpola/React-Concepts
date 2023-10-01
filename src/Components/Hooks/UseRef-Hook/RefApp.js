import React, { useRef } from 'react'

const RefApp = () => {
    let inputRef=useRef(null)

    function handleInput(){
        console.warn("function call")
        //inputRef.current.value="1000";
       // inputRef.current.focus();
        inputRef.current.style.color="orange";
        inputRef.current.style.display="none"

    }
  return (
    <div>
      <h1>UseRef in React</h1>
      <h3>it is used to directly manipulate the DOM /HTML without using state/props</h3>
      <input type="text" ref={inputRef}/>
      <button onClick={handleInput}>Handle Input</button>
    </div>
  )
}

export default RefApp
