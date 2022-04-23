import React from "react";
import axios from "axios";




function adminDashboard(){

    var [TeacherName, setTeacherName] = React.useState("")
    


    AddTeacherPressed = async (event) => {
        event.preventDefault();
        var obj = {Name : TeacherName};
        axios.post("/addteacher", obj);
    }

    return (
        <div class="blue-box">
            Add teacher
            <form action="">
                <input type="text" placeholder = "Teacher's Name" value = {TeacherName} 
                onChange = {(e) => setTeacherName(e.target.value)}/>
                <button >Add Teacher</button>
            </form>
        </div>
    )
}

export default adminDashboard;


