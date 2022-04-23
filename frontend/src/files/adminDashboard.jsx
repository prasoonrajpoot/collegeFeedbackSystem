import React from "react";
import axios from "axios";




function AdminDashboard(){

    var [TeacherName, setTeacherName] = React.useState("")
    
    const AddTeacherPressed = async (event) => {
        event.preventDefault();
        var obj = {Name : TeacherName};
        axios.post("/addteacher", obj);
    }

    return (
        <div class="blue-box">
        <h1>Feedback Forms</h1>
            <div class="blue-box">
                <h3>4th Sem Feedback Form</h3>
                <h4>Deadline: 18th May 2022</h4>
                <button class="form_button_blue">View Responses</button>
            </div>

            Add teacher
            <form action="">
                <input type="text" placeholder = "Teacher's Name" value = {TeacherName} 
                onChange = {(e) => setTeacherName(e.target.value) } onClick = {AddTeacherPressed}/>
                <button >Add Teacher</button>   
            </form>
        </div>
    )
}

export default AdminDashboard;


