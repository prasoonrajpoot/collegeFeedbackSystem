import React from "react";
import axios from "axios";


// var [Name, setName] = React.useState("");
// var [email, setEmail] = React.useState("")

import { useSelector, useDispatch } from 'react-redux'
import store from "../store";



function DashboardLoggedIn(){
    var name = useSelector((state)=> state.Name );
    var Email = useSelector((state)=> state.Email);
    var section = useSelector((store)=> store.Section);
    var semester = useSelector((store) => store.Semester);
    var year = parseInt(semester, 10);
    console.log("semester " , semester);
    console.log("reached");
    

    return (
        <div class="blue-box">
            <div>
                <h3>{name}</h3>
                <h3>{ Email.slice(0, 10).toUpperCase() }</h3>
                <h3>{Email}</h3>
                <h3> Semester : {semester}</h3>
                <h3> Year : { year%2 === 0 ? year/2 : year/2 + 0.5 }  </h3>
            
                <h3>Section {section.toUpperCase()}</h3>
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


