import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import About from "./About/About";
import User,{Orders,Profile} from "./User/User";

const NestedRoutingApp = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<User />}>
            <Route path="orders" element={<Orders/>} />
            <Route path="profile" element={<Profile/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default NestedRoutingApp;
