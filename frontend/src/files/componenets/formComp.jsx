import React from "react";

import { Link } from "react-router-dom";

function FormComp(props) {
  var branch = props.branch;
  var section = props.section;
  var semester = props.sem;
  var questions = props.ques;
  var id = props.id;

  var obj = {
    branch,
    section,
    semester,
    questions,
  };

  // console.log(obj);

  // console.log(id);

  return (
    <div class="blue-box" style={{ width: 410 }}>
      <div>
        <h3>{props.sem}th Sem Feedback Form </h3>
        <h4>Deadline: 18th May 2022</h4>
      </div>
      <div>
        <Link to="/Feedbackconfirmation" state={{ id: id, ques: questions }}>
          <button className="form_button_blue">Submit Feedback</button>
        </Link>
      </div>
    </div>
  );
}

export default FormComp;
