import React from "react";
import axios from "axios";


// var [Name, setName] = React.useState("");
// var [email, setEmail] = React.useState("")

import { useSelector, useDispatch } from 'react-redux'



function DashboardLoggedIn(){
    var name = useSelector((state)=> state.Name );
    var Email = useSelector((state)=> state.Email);
    console.log("reached");

    return (
        <div class="blue-box">
            <div>
                <h3>{name}</h3>
                <h3>BT20CSE105</h3>
                <h3>{Email}</h3>
                <h3>2nd Year</h3>
                <h3>4th Semester</h3>
                <h3>Section B</h3>
            </div>
            <h1>Feedback Forms</h1>
            <div class="blue-box">
                <h3>4th Sem Feedback Form</h3>
                <h4>Deadline: 18th May 2022</h4>
                <button><span>Submit Feedback</span></button>
            </div>
        </div>
    )
}

function Dashboard(){
    const isLoggedIn = useSelector((state) => state.LoggedIn);
    console.log(isLoggedIn);
    if(isLoggedIn){
        console.log("here");
        return DashboardLoggedIn();
    }
    else{
        return (
            <div>Please Login to be here</div>
        )
    }
}

export default Dashboard;


