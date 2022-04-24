import React from "react";
import {BrowserRouter as Router, Routes,  Route} from "react-router-dom";


import Navbar from "./files/navbar.jsx";
import Login from "./files/login.jsx";
import Register from "./files/register.jsx";
import Dashboard from "./files/dashboard.jsx";
import Teachersdashboard from "./files/teachersDashboard.jsx";
import Admindashboard from "./files/adminDashboard.jsx";
import Feedbackconfirmation from "./files/Feedbackconfirmation.jsx";
import FeedbackForm from "./files/feedbackForm.jsx"
import Feedbackresults from "./files/Feedbackresults.jsx";

function App() {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route  path = "/login"  element = {<Login />}/>
        <Route path = "/register" element = {<Register />}/>
        <Route path = "/dashboard" element = {<Dashboard />}/>
        <Route path = "/teachersDashboard" element = {<Teachersdashboard />} />
        <Route path = "/adminDashboard" element = {<Admindashboard />} />
        <Route path = "/feedbackconfirmation" element = {<Feedbackconfirmation />} />
        <Route path = "/feedbackForm" element = {<FeedbackForm />} />
        <Route path = "/feedbackresults" element = {<Feedbackresults/>} />
      </Routes> 
    </Router>
  )
}

export default App;
