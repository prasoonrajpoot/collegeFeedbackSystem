import React from "react";
import axios from "axios";


function adminDashboard(){
    return (
        <div>
            <h1>Feedback Forms</h1>
            <div>
                <h3>4th Sem Feedback Form</h3>
                <h4>Deadline: 18th May 2022</h4>
                <button><span>View Responses</span></button>
            </div>
            <div>
                <h3>5th Sem Feedback Form</h3>
                <h4>Deadline: 18th May 2022</h4>
                <button><span>View Responses</span></button>
            </div>
            <div>
                <h3>6th Sem Feedback Form</h3>
                <h4>Deadline: 18th May 2022</h4>
                <button><span>View Responses</span></button>
            </div>
        </div>
    )
}

export default adminDashboard;


