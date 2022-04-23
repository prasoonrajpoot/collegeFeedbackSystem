import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import GoogleLogin from 'react-google-login';
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate} from "react-router-dom";

import { LogInAction, LogOutActon, SetEmailAction, SetNameAction, SetSectionAction, SetSemesterAction} from "../actions";


function Login(){

    var [userEmail, setUserEmail] = React.useState("");
    var [password, setPassword] = React.useState("");
    var [authCode, setAuthCode] = React.useState("");

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const sendLoginData = async() => {
        var object = {userEmail, password, authCode};

        console.log(object)

        var reply = await axios.post("/login", object);

        console.log(reply);

        if(reply.data.code == "Login Successful"){
            alert("Login Successfull");
            dispatch(LogInAction());
            dispatch(SetEmailAction(reply.data.email));
            dispatch(SetNameAction(reply.data.name));
            dispatch(SetSectionAction(reply.data.section));
            dispatch((SetSemesterAction(reply.data.semester)));


            navigate("/dashboard");


        }

    }


    const responseSuccessGoogle = (response) => {
        var data = response.profileObj;
        setAuthCode(data.googleId);
        setUserEmail(data.email);
        setPassword(null);
        sendLoginData();
    }

    const responseFailGoogle = (response) => {
        console.log(response)
    }

    const LoginButton = (event) => {
        event.preventDefault();
        sendLoginData()
    }

    const resetLoginField = () => {
        setPassword("");
        setUserEmail("");
    };

    return (
        <div>
            <div class="blue-box" style={{width:460}}>
                <h2>Login</h2>
                <form action="">
                    <input type="email" placeholder="Email" class="form__field" onChange={(e) => setUserEmail(e.target.value)} /><br />
                    <input type="password" placeholder="Password" class="form__field" onChange={(e) => setPassword(e.target.value)} /><br />
                    <button class="form_button_blue" type="submit" onClick = {LoginButton}>Submit</button>
                    <button class="form_button_white" type="reset" onClick={resetLoginField}>Cancel</button><br />
                    <GoogleLogin
                        clientId="396893215612-v514renemo3tgeb85egqv0ltej6o7uip.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseSuccessGoogle}
                        onFailure={responseFailGoogle}
                        cookiePolicy={'single_host_origin'}
                        render={(renderProps) => (
                        <button class="form_button_blue" onClick={renderProps.onClick} style={{backgroundColor:"blue"}}>
                            Login With Google
                        </button>
                        )}
                    /><br />
                    <span>Don't have an account.<Link to="/register">Register Here</Link></span>
                </form>
            </div>
        </div>
    )
}

export default Login;