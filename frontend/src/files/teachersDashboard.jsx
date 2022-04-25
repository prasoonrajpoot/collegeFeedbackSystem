import React from "react";
import axios from "axios";
import Navbar from "./navbar.jsx";
import { Link } from "react-router-dom";

function TeachersDashboard() {
  var [nullvar, setNull] = React.useState("");

  // const saveTeacherData = (data) => {
  //     setTeacherResponse(data);
  //     console.log(TeacherResponse);
  // }
  return (
    <div>
      <Navbar />
      <div class="blue-box" style={{ width: 864 }}>
        <div>
          <span className="heading3">Deep Panchani </span>
          <span className="heading3">
            <u>deeppanchani@iiitn.ac.in</u>
          </span>
        </div>
        <div>
          <h1 style={{ margin: 30 }}>Feedback Responses</h1>
          <div
            className="blue-box grid_container"
            style={{
              width: 671,
              height: 148,
              marginTop: "auto",
              marginBottom: 20,
              padding: 0,
            }}
          >
            <div style={{ margin: "auto", padding: "auto" }}>
              <h3>4th Sem CSE Feedback Form</h3>
              <h4>CP Section B</h4>
              <span>Results On: 18th mfay 2022</span>
            </div>
            <div style={{ margin: "auto", padding: "auto" }}>
              <Link to="/feedbackresults">
                <button class="form_button_blue">View Responses</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeachersDashboard;
