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
        console.log(response);
        // console.log(response[ind] === "5")
    }
    var names = ind.toString().concat(index.toString());
    var id1 = ind.toString().concat(index.toString()).concat("1");
    var id2 = ind.toString().concat(index.toString()).concat("2");
    var id3 = ind.toString().concat(index.toString()).concat("3");
    var id4 = ind.toString().concat(index.toString()).concat("4");
    var id5 = ind.toString().concat(index.toString()).concat("5");
    var id6 = ind.toString().concat(index.toString()).concat("6");
    return(
        <div>
        <label class="heading3" htmlFor="q1">Q{ind + 1}. {question} </label><br />
        <span class="star-cb-group">
          <input type="radio" id={id1} name={names} value="5" required onChange= {handleChange}  /><label for={id1}>5</label>
          <input type="radio" id={id2}  name={names} value="4" required onChange= {handleChange}  /><label for={id2}>4</label>
          <input type="radio" id={id3}  name={names} value="3" required onChange= {handleChange}   /><label for={id3}>3</label>
          <input type="radio" id={id4}  name={names} value="2" required onChange= {handleChange}  /><label for={id4}>2</label>
          <input type="radio" id={id5}  name={names} value="1" required onChange= {handleChange}  /> <label for={id5}>1</label>
          <input type="radio" id={id6}  name={names} value="0" required class="star-cb-clear" onChange= {handleChange}/><label for={id6}>0</label>
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
            {/* <button class="form_button_blue">Submit Responces</button> */}
        </form>
    </div>
    )
}

export default QuestionSet;