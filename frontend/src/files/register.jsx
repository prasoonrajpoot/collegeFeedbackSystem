import axios from "axios";
import React from "react";

function Register(){

    var [name , setName ] = React.useState("");
    var [email, setEmail] = React.useState("");
    var [password, setPassword] = React.useState("");
    var [mobile, setMobile] = React.useState("");
    var [semester, setSemester] = React.useState("");
    var [branch, setBranch] = React.useState("");

    const sendRegisterData = async() => {
        var object = {name, email, password, mobile, semester, branch};

        await axios.post("/register", object);
    }

    sendRegisterData();


    return (
        <div>
            this is registeration route
            <input type="text"  value = {name } onChange = {setName()}/>
            
        </div>
    )
};

export default Register;

