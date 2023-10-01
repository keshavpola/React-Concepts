import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div >
      <ul className='xyz' >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <l1><Link to="/user">User</Link></l1>
        </ul>
    </div>
  )
}

export default Header