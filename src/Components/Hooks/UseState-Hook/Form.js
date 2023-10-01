import React, { useState } from 'react'

const Form = () => {
    const [name,setName]=useState({firstName:"",lastName:""})
    const [desc,setDesc]=useState("")
  return (
    <div>
        <h1>form information</h1>
      <form>
        <input 
        type="text"
        name={name.firstName}
        placeholder='please enter first name'
        onChange={(e)=>setName({...name,firstName:e.target.value})}/>

<input 
        type="text"
        name={name.lastName}
        placeholder='please enter last name'
        onChange={(e)=>setName({...name,lastName:e.target.value})}/>

<input 
        type="text"
        name={desc}
        placeholder='please enter some info'
        onChange={(e)=>setDesc(e.target.value)}/>
      </form>
      <h1>First Name:{name.firstName}</h1>
      <h1>Last Name:{name.lastName}</h1>
      <h1>Info:{desc}</h1>

      
    </div>
  )
}

export default Form
