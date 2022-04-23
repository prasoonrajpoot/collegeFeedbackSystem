import React from "react";
import axios from "axios";




function Dashboard(){
    return (
        <div>
            <div class="blue-box" style={{width:846, marginTop:40, marginBottom:20}}>
                <span class="heading3">Deep Panchani </span>
                <span class="heading3">BT20CSE105 </span>
                <span class="heading3">bt20cse105@iiitn.ac.in </span><br/>
                <span class="heading3">2nd Year </span>
                <span class="heading3">4th Semester </span>
                <span class="heading3">Section B </span>
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

export default Dashboard;


