import react from "react";


function Question(props){
    var index = props.index;
    var teacher = props.teacher;
    var question = props.question;

    
    return(
        <div>
            <label class="heading3" htmlFor="q1">Q{index}. {question} </label><br />
            <span class="star-cb-group">
              <input type="radio" id="rating-15" name="rating1" value="5" required /><label for="rating-15">5</label>
              <input type="radio" id="rating-14" name="rating1" value="4" required /><label for="rating-14">4</label>
              <input type="radio" id="rating-13" name="rating1" value="3" required /><label for="rating-13">3</label>
              <input type="radio" id="rating-12" name="rating1" value="2" required /><label for="rating-12">2</label>
              <input type="radio" id="rating-11" name="rating1" value="1" required /><label for="rating-11">1</label>
              <input type="radio" id="rating-10" name="rating1" value="0" required class="star-cb-clear" /><label for="rating-10">0</label>
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


    return (
        <div style={{width:864, margin:"auto", marginTop:10, marginBottom:20}}>
        <form action="">
            <h1>{currentSubject } {currentTeacher}</h1>
            {questions.map((question, index) => <Question question = {question} index = {index} 
                                    teacher = {currentTeacher}/>)}
            <button class="form_button_blue">Submit Responces</button>
        </form>
    </div>
    )
}

export default QuestionSet;