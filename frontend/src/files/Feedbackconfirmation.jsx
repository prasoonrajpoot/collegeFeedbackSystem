import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import {useSelector} from "react-redux";

import {useLocation} from 'react-router-dom';


function Subjects(props){

    return (
        <div class="blue-box" style={{width:700}}>
            <h2>Feedback Forms</h2>
            <div>
                <span class="heading3">{props.name} </span>
                <span class="heading3">{props.teacher}</span>
                <div>
                    <Link to="/feedbackForm"  state = {{allSubjects : props.allSubjects,
                         allTeachers : props.allTeachers, allQues: props.ques}}>
                        <button class="form_button_blue">Fill Feedback Form</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

function Feedbackconfirmation(){

    var [nullVar, setNullVar] = React.useState("");

    var [subject, setSubjects] = React.useState([""])

    const location = useLocation();

    const formid = location.state.id;

    const questions = location.state.ques;

    React.useEffect(()=> {

        getSubjects();
    }, [nullVar]);

    var semester = useSelector((state) => state.Semester)
    var Section = useSelector((state) => state.Section)
    var email = useSelector((state) => state.Email);
    var branch = email.slice(4,7);

    const getSubjects = async() => {
        var data = {semester, Section, branch};
        // console.log(data);  
        var response = await axios.post("/getsubjects",data );
        // console.log(response);
        setSubjects(response.data)
    }

    var allSubjects = subject.map(single => single.name);
    var allTeachers = subject.map(single => single.teacher);


    return (
        <div>
            {subject.map(single => <Subjects 
            name = {single.name} teacher = {single.teacher} ques = {questions}
             formId = {formid} allSubjects = {allSubjects} allTeachers = {allTeachers} />)}
        </div>
    )
}

export default Feedbackconfirmation;