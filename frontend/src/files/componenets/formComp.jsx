import React from "react";

import { Link } from "react-router-dom";

function FormComp(){
    return (
        <div class="blue-box" style={{width:410}}>
                        <div>
                            <h3>4th Sem Feedback Form </h3> 
                            <h4>Deadline: 18th May 2022</h4>
                        </div>
                        <div>
                            <Link to="/Feedbackconfirmation">
                                <button class="form_button_blue">Submit Feedback</button>
                            </Link>    
                        </div>
                    </div>
    )
}

export default FormComp;