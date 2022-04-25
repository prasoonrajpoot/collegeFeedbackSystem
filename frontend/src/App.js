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
import FeedbackResults from "./files/Feedbackresults.jsx";

function App() {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path = ""  element = {<Register />}/>
        <Route path = "/login"  element = {<Login />}/>
        <Route path = "/register" element = {<Register />}/>
        <Route path = "/dashboard" element = {<Dashboard />}/>
        <Route path = "/teachersdashboard" element = {<Teachersdashboard />} />
        <Route path = "/admindashboard" element = {<Admindashboard />} />
        <Route path = "/feedbackconfirmation" element = {<Feedbackconfirmation />} />
        <Route path = "/feedbackform" element = {<FeedbackForm />} />
        <Route exact path = "/feedbackresults" element = {<FeedbackResults/>} />
      </Routes> 
    </Router>
  )
}

export default App;
