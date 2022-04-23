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
    
    console.log("reached");

    return (
        <div>
            <div class="blue-box" style={{width:846, marginTop:40, marginBottom:20}}>
                <span class="heading3">{name} </span>
                <span class="heading3">BT20CSE105 </span>
                <span class="heading3">{Email} </span><br/>
                <span class="heading3">2nd Year </span>
                <span class="heading3">{semester} Semester </span>
                <span class="heading3">Section {section} </span>
            </div>
            <div style={{width:846, marginTop:40, marginBottom:20, marginLeft:"auto", marginRight:"auto"}}>
                <h2>Feedback Forms</h2>
                <div class="grid_container" style={{marginTop:25}}>
                    <div class="blue-box" style={{width:410}}>
                        <div>
                            <h3>4th Sem Feedback Form </h3> 
                            <h4>Deadline: 18th May 2022</h4>
                        </div>
                        <div>
                            <button class="form_button_blue">Submit Feedback</button>
                        </div>
                    </div>
                </div>          
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


