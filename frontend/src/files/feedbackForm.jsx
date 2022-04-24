import React from 'react'
import {useLocation} from 'react-router-dom';

import QuestionSet from './componenets/questionSet';

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
    console.log(responses);
  }, [responses]);


  // const sendFormData = async () => {
  //   var data = 
  // }

  const submitButtonPressed = (event) => {
      event.preventDefault();

  }
  return (
   <div>
     {allSubjects.map((suject, index) => <QuestionSet questions = {allQuestions} allSubjects = {allSubjects} allTeachers = {allTeachers}
          index = {index}     responses = {responses} setResponses = {setResponses}   />)}
      <button type="submit">Submit Form</button>
   </div>
  )
}

export default FeedbackForm