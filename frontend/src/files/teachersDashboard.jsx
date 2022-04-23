import React from "react";
import axios from "axios";


function teachersDashboard(){
    return (
        <div class="blue-box">
            <div>
                <span class="heading3">Deep Panchani </span>
                <span class="heading3"><u>deeppanchani@iiitn.ac.in</u></span>
            </div>
            <div class="blue-box">
                <h1>Feedback Responses</h1>
                <div>
                    <div>
                        <h3>4th Sem CSE Feedback Form</h3>
                        <h4>DAA Section B</h4>
                        <span>Results On: 18th may 2022</span>
                    </div>
                    <div >
                        <button class="form_button_blue">View Responses</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default teachersDashboard;


