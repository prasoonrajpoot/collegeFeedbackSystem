import React from 'react'
import {useLocation} from 'react-router-dom';

import QuestionSet from './componenets/questionSet';
import axios from "axios";


const FeedbackForm = () => {

  const location = useLocation();
  var allTeachers = location.state.allTeachers;
  var allSubjects = location.state.allSubjects;
  var allQuestions = location.state.allQues;

  // console.log("all subjects are " + allSubjects);
  // console.log("all teachers are " + allTeachers);
  // console.log("all ques are " + allQuestions);

  var [responses , setResponses] = React.useState([{}]);


  React.useEffect(()=> {
    console.log("there's a change again");
    // console.log(responses);
  }, [responses]);


  const sendFormData = async () => {
    var data = {data: responses};
    var reply = axios.post("/saveformdata", data);
    if(reply.data == "recieved"){
      alert("Response Saved");
    }
  }

  const submitButtonPressed = (event) => {
      console.log("we are here");
      event.preventDefault();
      sendFormData()
  }
  return (
   <div style={{width:1000, margin:"auto",padding:"auto"}}>
     {allSubjects.map((suject, index) => <QuestionSet questions = {allQuestions} allSubjects = {allSubjects} allTeachers = {allTeachers}
          index = {index}     responses = {responses} setResponses = {setResponses}   />)}
      <button type="submit" onClick = {submitButtonPressed} class="form_button_blue">Submit Form</button>
   </div>
  )
}

export default FeedbackForm