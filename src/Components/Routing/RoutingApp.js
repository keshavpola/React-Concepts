import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Contact from './Contact'
import About from './About'


const RoutingApp = () => {
  return (
    <>
     <BrowserRouter>
     <Header/>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element={<About/>}></Route>
    </Routes>
    </BrowserRouter></>
   
  
  )
}

export default RoutingApp
