import React from "react";

//ind for index of question no
//index for index of subjects

function Question(props){
    var response = props.response;
    var setResponse = props.setResponse;
    var ind = props.ind;
    var index = props.index;
    var teacher = props.teacher;
    var question = props.question;

    
    const handleChange = (event) => {
        // console.log(event.target.value);
        var arraytemp = response;
        arraytemp[ind] = event.target.value;
        setResponse(arraytemp);
        // console.log(response);
        // console.log(response[ind] === "5")
    }

    

    
    return(
        <div>
        <label class="heading3" htmlFor="q1">Q{ind + 1}. {question} </label><br />
        <span class="star-cb-group">
        <fieldset>
          <label ><input type="radio" name="rating1" value="5" required  
          onChange= {handleChange} checked = {response[ind] === "5"} /></label>
          <label ><input type="radio"  name="rating1" value="4" required 
          onChange= {handleChange} checked = {response[ind] === "4"} /></label>
          <label > <input type="radio"  name="rating1" value="3" required
          onChange= {handleChange} checked = {response[ind] === "3"}  /></label>
          <label ><input type="radio"  name="rating1" value="2" required 
          onChange= {handleChange} checked = {response[ind] === "2"} /></label>
          <label ><input type="radio"  name="rating1" value="1" required 
          onChange= {handleChange} checked = {response[ind] === "1"} /></label>
          <label ><input type="radio"  name="rating1" value="0" required class="star-cb-clear"
          onChange= {handleChange} checked = {response[ind] === "0"}   /></label>
        </fieldset>
        </span>
        <br />
    </div>
    )
}

function QuestionSet(props){

    var index = props.index;
    var questions = props.questions;
    var allSubjects = props.allSubjects;
    var allTeachers = props.allTeachers;

    var currentSubject = allSubjects[index];
    var currentTeacher = allTeachers[index];


    var responses = props.responses;
    var setResponses = props.setResponses;



    var [response, setResponse] = React.useState([]);


    React.useEffect(()=> {
        var obj = {"subject" : currentSubject,
                    "data" : response}

        var temp_responses = responses;
        temp_responses[index] = obj;
        setResponses(temp_responses);
        
    }, [response]);




    return (
        <div style={{width:864, margin:"auto", marginTop:10, marginBottom:20}}>
        <form action="">
            <h1>{currentSubject } {currentTeacher}</h1>
            {questions.map((question, ind) => <Question question = {question} ind = {ind} index = {index}
                                    teacher = {currentTeacher} response = {response} setResponse = {setResponse}/>)}
            <button class="form_button_blue">Submit Responces</button>
        </form>
    </div>
    )
}

export default QuestionSet;