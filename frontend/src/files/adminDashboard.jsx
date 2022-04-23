import React from "react";
import axios from "axios";




function AdminDashboard(){

    var [TeacherName, setTeacherName] = React.useState("")

    var [SubjectName, setSubjectName] = React.useState("");
    var [SubjectTeacherName, setSubjectTeacherName] = React.useState("");

    var [formSemester, setFormSemester] = React.useState(0);
    var [formSection, setFormSection] = React.useState("");
    var [formBranch, setFormBranch] = React.useState("");




        
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
        event.preventDefault();
        sendTeacherData();
    }

    const sendSubjectData = async() => {
        var obj = {
            subjectName : SubjectName,
            subjectTeacherName : SubjectTeacherName
        }

        var reply = await axios.post("/addsubject", obj);
        console.log(reply);
    }

    const subjectSavePressed = (event) => {
        event.preventDefault();
        sendSubjectData();

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
                onChange = {(e) => setTeacherName(e.target.value) } />
                <button type = "submit" onClick = {AddTeacherPressed}>Add Teacher</button>   
            </form>
            Add Subjects
            <form action="">
                <input type="text" placeholder = "Enter Subject Name" value = {SubjectName}
                onChange = {(e) => setSubjectName(e.target.value)}/>
                <input type="text"  placeholder = "Enter Teacher For Subject" value = {SubjectTeacherName}
                onChange = {(e) => setSubjectTeacherName(e.target.value)}/>
                <button onClick = {subjectSavePressed}>Save Subject</button>
            </form>
            Float FeedBack Forms 
            <form action="">
                
            </form>
        </div>
    )
}

export default AdminDashboard;


