import React from "react";
import axios from "axios";




function AdminDashboard(){

    var [TeacherName, setTeacherName] = React.useState("")
    var [SubjectName, setSubjectName] = React.useState("");
    
    
    const sendTeacherData = async() =>{
        var object = {Name : TeacherName};
        const response = await axios.post("/addteacher", object);
        console.log("obje");
        if(response.data == "succefully saved"){
            alert("Teacher added");
            setTeacherName("");
        }
    }

    const AddTeacherPressed =(event) => {
        console.log("we are here")
        event.preventDefault();
        sendTeacherData();
    }

    return (
        <div class="blue-box">
            Add teacher
            <form action="">
                <input type="text" placeholder = "Teacher's Name" value = {TeacherName} 
                onChange = {(e) => setTeacherName(e.target.value) } />
                <button type = "submit" onClick = {AddTeacherPressed}>Add Teacher</button>   
            </form>
            <form action="">
                
            </form>
        </div>
    )
}

export default AdminDashboard;


