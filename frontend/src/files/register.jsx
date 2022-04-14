import axios from "axios";
import React from "react";
import { Link } from 'react-router-dom'
import GoogleLogin from 'react-google-login';
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate} from "react-router-dom";


import { LogInAction, LogOutActon, SetEmailAction } from "../actions";
function Register(){

    var [name , setName ] = React.useState("");
    var [email, setEmail] = React.useState("");
    var [password, setPassword] = React.useState("");
    var [semester, setSemester] = React.useState(0);
    var [section, setSection] = React.useState("");
    var [auth_token, setAuthToken] = React.useState("");
    var [branch , setBranch ] = React.useState("");

    const dispatch = useDispatch();
    let navigate = useNavigate();


    function getBranchFromEmail(userEmail){
        return userEmail.slice(4,7);
    }

    const sendRegisterData = async(event) => {
        event.preventDefault();
        var object = {name, email, password, semester, auth_token, section, branch};
        console.log(object);

        var response = await axios.post("/register", object);
        if(response.data == "succesfull"){
            alert("registeration sucessfull");
            dispatch(LogInAction());
            dispatch(SetEmailAction(email));
            navigate("/");
        }
        if(response.data == "Duplicate Account"){
            alert("Duplicate Email address");
        }
    }

    // const OauthbuttonClicked = async(event) => {
    // event.preventDefault();
    
    // await axios.get("/auth/google");
    // console.log("we are here");
    // }

    const responseSuccessGoogle = (response) => {
        // console.log(response.profileObj);
        var data = response.profileObj;
        setName(data.name);
        setEmail(data.email);
        setAuthToken(data.googleId);
        setBranch(getBranchFromEmail(data.email))
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
                    <input type="text" placeholder="branch"  onChange={(e) => setBranch(e.target.value)} value = {branch} /><br />
                    <input type="password" placeholder="Password"  onChange={(e) => setPassword(e.target.value)} value = {password} /><br />
                    <button onClick = {sendRegisterData}>Submit</button>
                    <input type="reset" /><br />
                    <GoogleLogin
                        clientId="396893215612-v514renemo3tgeb85egqv0ltej6o7uip.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseSuccessGoogle}
                        onFailure={responseFailGoogle}
                        cookiePolicy={'single_host_origin'}
                        // uxMode = "redirect"
                    /><br />
                    <span>Already have an account.<Link to="/login">Login Here</Link></span>
                </form>
            </div>            
        </div>
    )
};

export default Register;