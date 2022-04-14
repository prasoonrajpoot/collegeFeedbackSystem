import React from "react";
import axios from "axios";


function Login(){

    var [userEmail, setUserEmail] = React.useState("");
    var [password, setPassword] = React.useState("");

    const sendLoginData = async() => {
        var object = {userEmail, password};

        await axios.post("/register", object);
    }

    sendLoginData();

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
                    <button>Login with Google</button>
                </form>
            </div>
        </div>
    )
}

export default Login;