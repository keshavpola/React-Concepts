import React, { useContext } from 'react'
import { FirstName, LastName } from "./OverComeApp"
const CompC = () => {
    const fname=useContext(FirstName)
    const lname=useContext(LastName)
  return (
    <div>
      <h1>My Name is {fname} {lname}</h1>
    </div>
  )
}

export default CompC
