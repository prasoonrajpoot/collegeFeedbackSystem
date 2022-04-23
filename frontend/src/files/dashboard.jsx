import React from "react";
import axios from "axios";

import { useSelector, useDispatch } from 'react-redux';



import FormComp from "./componenets/formComp.jsx";


function DashboardLoggedIn(){
    var name = useSelector((state)=> state.Name );
    var Email = useSelector((state)=> state.Email);
    var section = useSelector((store)=> store.Section);
    var semester = useSelector((store) => store.Semester);
    var year = parseInt(semester, 10);
    var branch = Email.slice(4,7);

    const getFormData = async () => {
        console.log("we at form data");
        var obj = {
            section : section,
            semester : semester,
            branch : branch
        }
        var response = await axios.post("/getformdata", obj );
        console.log(response);
    }

    React.useEffect(()=>{
        getFormData()
    })
    // console.log("semester " , semester);
    
    // console.log("reached");


    

    return (
        <div>
            <div class="blue-box" style={{width:846, marginTop:40, marginBottom:20}}>
                <span class="heading3">{name} </span>
                <span class="heading3">{ Email.slice(0, 10).toUpperCase() } </span>
                <span class="heading3">{Email} </span><br/>
                <span class="heading3">Semester {semester} </span>
                <span class="heading3">Year { year%2 === 0 ? year/2 : year/2 + 0.5 } </span>
                <span class="heading3">Section {section.toUpperCase()}</span>
            </div>

            <div style={{width:846, marginTop:40, marginBottom:20, marginLeft:"auto", marginRight:"auto"}}>
                <h2>Feedback Forms</h2>
                <div class="grid_container" style={{marginTop:25}}>
                    <FormComp />
                    <FormComp />
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


