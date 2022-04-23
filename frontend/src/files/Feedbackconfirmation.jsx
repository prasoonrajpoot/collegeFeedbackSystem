import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import {useSelector} from "react-redux";

function Feedbackconfirmation(){

    var semester = useSelector((state) => state.Semster)
    var Section = useSelector((state) => state.Section)
    var email = useSelector((state) => state.Email);

    

    return (
        <div class="blue-box" style={{width:700}}>
            <h2>Feedback Forms</h2>
            <div>
                <span class="heading3">DAA </span>
                <span class="heading3">Mr. Gaurav Malode</span>
                <div>
                    <Link to="/feedbackForm">
                        <button class="form_button_blue">Fill Feedback Form</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Feedbackconfirmation;