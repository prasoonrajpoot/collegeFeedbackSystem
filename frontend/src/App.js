import React from "react";
import {BrowserRouter as Router, Routes,  Route} from "react-router-dom";


import Navbar from "./files/navbar.jsx";
import Login from "./files/login.jsx";
import Register from "./files/register.jsx";


function App() {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route  path = "/login"  element = {<Login />}/>
        <Route path = "/register" element = {<Register />}/>
      </Routes>
    </Router>
  )
}

export default App;
