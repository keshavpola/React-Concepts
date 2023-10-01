import React from 'react'
import { Link } from 'react-router-dom'
const UserHeader = () => {
  return (
    <div className='User-Header'>
       <button><Link to="orders">Orders</Link></button>
       <button><Link to="profile">Profile</Link></button>
    </div>
  )
}

export default UserHeader
