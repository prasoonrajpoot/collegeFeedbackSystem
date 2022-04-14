import axios from "axios";
import React from "react";

function Register(){

    var [name , setName ] = React.useState("");
    var [email, setEmail] = React.useState("");
    var [password, setPassword] = React.useState("");
    var [mobile, setMobile] = React.useState("");
    var [semester, setSemester] = React.useState("");
    var [branch, setBranch] = React.useState("");
    var [section, setSection] = React.useState("");

    const sendRegisterData = async() => {
        var object = {name, email, password, mobile, semester, branch};

        await axios.post("/register", object);
    }

    sendRegisterData();

    //this is a new repo test line


    return (
        <div>
            <h1>Register</h1>
            <form action="">
                <input type="text" placeholder = "Name"  onChange = {(e) =>  setName(e.target.value)} value={name} />
                <label htmlFor="">Name</label><br />
                <input type="text" placeholder="Name" onChange = {(e) =>  setName(e.target.value)}
                value = {name}/>
                <br />
                <label htmlFor="">Password</label><br />
                <input type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} value = {password} /><br />
                <label htmlFor="">Enter Email</label> <br />
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value = {email} /><br />
                <label htmlFor="">Enter Mobile Number</label> <br />
                <input type="text" placeholder="Mobile Number" onChange={(e) => setMobile(e.target.value)} value = {mobile}/><br />
                <label htmlFor="">Select Semester</label><br />
                <input type="number" placeholder="Semester" min="1" max="8" onChange={(e) => setSemester(e.target.value)} value = {semester}/><br />
                <label htmlFor="">Enter Your Section</label><br />
                <input type="text" placeholder="A/B/C" onChange={(e) => setSection(e.target.value)} value = {section} /> <br />
                <label htmlFor="">Select Branch</label><br />
                <input type="radio" name="Branch" onChange={(e) => setBranch(e.target.value)} value = {branch}/> CSE<br />
                <input type="radio" name="Branch" onChange={(e) => setBranch(e.target.value)} value = {branch}/> ECE<br />
            </form>
            
        </div>
    )
};

export default Register;

