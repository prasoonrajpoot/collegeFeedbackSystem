import axios from "axios";
import React from "react";

function Register(){

    var [name , setName ] = React.useState("");
    var [email, setEmail] = React.useState("");
    var [password, setPassword] = React.useState("");
    var [semester, setSemester] = React.useState("");
    var [section, setSection] = React.useState("");

    const sendRegisterData = async() => {
        var object = {name, email, password, semester};

        await axios.post("/register", object);
    }

    sendRegisterData();

    return (
        <div>
            <div>
                <h1>Register</h1>
                <form action="">
                    <input type="text" placeholder = "Name"  onChange = {(e) =>  setName(e.target.value)} value={name} /><br />
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value = {email} /><br />
                    <input type="number" placeholder="Semester" min="1" max="8" onChange={(e) => setSemester(e.target.value)} value = {semester}/>
                    <input type="text" placeholder="Section" onChange={(e) => setSection(e.target.value)} value = {section} /><br />
                    <input type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} value = {password} /><br />
                    <input type="submit" />
                    <input type="reset" /><br />
                    <button>Register with Google</button>
                </form>
            </div>            
        </div>
    )
};

export default Register;