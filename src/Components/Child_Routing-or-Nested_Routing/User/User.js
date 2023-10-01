import React from 'react'
import { Outlet} from 'react-router-dom'
import UserHeader from './UserHeader'


const User = () => {
  return (
    <div>
        <UserHeader/>    
     <h1>this is User Component</h1>
    
    <Outlet/>
    
    </div>
  )
}

export function Orders(){
    return (
        <>
        <h1>Orders Component</h1>
        </>
    )
}

export function Profile(){
    return (
        <>
        <h1>Profile Component</h1>
        </>
    )
}

export default User
