import React from "react";
import {BrowserRouter as Router, Routes,  Route} from "react-router-dom";


import Navbar from "./files/navbar.jsx";
import Login from "./files/login.jsx";
import Register from "./files/register.jsx";
import Dashboard from "./files/dashboard.jsx";
import Teachersdashboard from "./files/teachersDashboard.jsx";

function App() {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route  path = "/login"  element = {<Login />}/>
        <Route path = "/register" element = {<Register />}/>
        <Route path = "/dashboard" element = {<Dashboard />}/>
        < Route  path = "/teachersDashboard" element = {<Teachersdashboard />} />
      </Routes> 
    </Router>
  )
}

export default App;
