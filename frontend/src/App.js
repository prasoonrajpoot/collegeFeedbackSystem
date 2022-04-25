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
        <Route path = "/teachers-dashboard" element = {<Teachersdashboard />} />
        <Route path = "/admin-dashboard" element = {<Admindashboard />} />
        <Route path = "/feedback-confirmation" element = {<Feedbackconfirmation />} />
        <Route path = "/feedback-form" element = {<FeedbackForm />} />
        <Route exact path = "/feedback-results" element = {<FeedbackResults/>} />
      </Routes> 
    </Router>
  )
}

export default App;
