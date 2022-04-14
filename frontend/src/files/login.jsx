import React from "react";
import axios from "axios";


function Login(){


    var [userName, setUserName] = React.useState("");
    var [password, setPassword] = React.useState("");

    const sendData = async() => {
        
    }
    
    console.log("we are here")
    return (
        <div>
            <h1>Login</h1>
            <form action="">
                <label htmlFor="">Username</label><br />
                <input type="text" onChange={(e) => setUserName(e.target.value)} /><br />
                <label htmlFor="">Password</label><br />
                <input type="text" onChange={(e) => setPassword(e.target.value)} /><br />
                <input type="submit" />
            </form>
        </div>
    )
}


export default Login;


