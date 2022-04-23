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
        // console.log(reply);
    }

    const sendFloatFeedbackFormsData = async() => {
        var object = {
            semester : formSemester,
            branch : formBranch,
            section: formSection
        }

        var response = await axios.post("/floatforms", object)

        // console.log(response);

        if(response.data == "Form Saved"){
            alert("Form Sent SuccesFully");
            setFormBranch("");
            setFormSection("");
            setFormSemester(0);
        }
    }
    const subjectSavePressed = (event) => {
        event.preventDefault();
        sendSubjectData();

    }

    const FloatFeedbackClicked = (event) => {
        event.preventDefault();
        sendFloatFeedbackFormsData()
    }

    return (
        <div style={{width:864, margin:"auto", padding:"auto"}}>
            
            <div class="blue-box">
                <h1>Feedback Forms</h1>
                <div class="blue-box grid_container" style={{width:671, height:148, margin:"auto", padding:0,  marginTop:15,marginBottom:15}}>
                    <div style={{margin:"auto", padding:"auto"}}>
                        <h3>4th Sem Feedback Form</h3>
                        <h4>Deadline: 18th May 2022</h4>
                    </div>
                    <div style={{margin:"auto", padding:"auto"}}>
                        <button class="form_button_blue">View Responses</button>
                    </div>
                </div>
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
                <br />
                subjectName-semester-branch-setion
                <button onClick = {subjectSavePressed}>Save Subject</button>
            </form>
            Float FeedBack Forms  For
            <form action="">
                <input type="text" placeholder = "Enter Branch" value = {formBranch} 
                onChange = {(e) => setFormBranch(e.target.value)}/>
                <input type="text" placeholder = "Enter Semester" value = {formSemester}
                onChange = {(e) => setFormSemester(e.target.value)}/>
                <input type="text" placeholder = "Enter Section" value = {formSection}
                onChange = {(e) => setFormSection(e.target.value)}/>
                <button onClick = {FloatFeedbackClicked}>Send Feedback Form</button>

            </form>
        </div>
    )
}

export default AdminDashboard;


