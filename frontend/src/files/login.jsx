import React from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import GoogleLogin from 'react-google-login';

function Login(){

    var [userEmail, setUserEmail] = React.useState("");
    var [password, setPassword] = React.useState("");
    var [authCode, setAuthCode] = React.useState("");

    const sendLoginData = async() => {
        var object = {userEmail, password, authCode};

        console.log(object)

        var reply = await axios.post("/login", object);


    }


    const responseSuccessGoogle = (response) => {
        console.log(response);
        setAuthCode(response.accessToken);
        sendLoginData();
    }

    const responseFailGoogle = (response) => {
        console.log(response)
    }

    return (
        <div>
            <div>
                <h1>Login</h1>
                <form action="">
                    <label htmlFor="">Email</label><br />
                    <input type="email" onChange={(e) => setUserEmail(e.target.value)} /><br />
                    <label htmlFor="">Password</label><br />
                    <input type="password" onChange={(e) => setPassword(e.target.value)} /><br />
                    <input type="submit" />
                    <input type="reset" /><br />
                    <GoogleLogin
                        clientId="396893215612-v514renemo3tgeb85egqv0ltej6o7uip.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={responseSuccessGoogle}
                        onFailure={responseFailGoogle}
                        cookiePolicy={'single_host_origin'}
                    /><br />
                    <span>Don't have an account.<Link to="/register">Register Here</Link></span>
                </form>
            </div>
        </div>
    )
}

export default Login;