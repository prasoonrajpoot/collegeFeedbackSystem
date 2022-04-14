import axios from "axios";
import React from "react";

import GoogleLogin from 'react-google-login';


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

    const OauthbuttonClicked = async(event) => {
    event.preventDefault();
    
    await axios.get("/auth/google");
    console.log("we are here");
    }

    const responseSuccessGoogle = (response) => {
        console.log(response);
    }

    const responseFailGoogle = (response) => {
        console.log(response)
    }

    // sendRegisterData();

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
                    <GoogleLogin
                            clientId="396893215612-v514renemo3tgeb85egqv0ltej6o7uip.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={responseSuccessGoogle}
                            onFailure={responseFailGoogle}
                            cookiePolicy={'single_host_origin'}
  />
                </form>
            </div>            
        </div>
    )
};

export default Register;