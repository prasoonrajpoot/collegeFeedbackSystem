import express from "express";
import 'dotenv/config';
import bodyParser from "body-parser";




import connectDB from "./sourceFiles/connectdb.js";
import RegisterFile from "./sourceFiles/register.js";
import LoginFile from "./sourceFiles/login.js";
import AuthGoogleFile from "./sourceFiles/googleauth.js";

var app = express();
app.use(bodyParser.urlencoded({extended: true}));


connectDB();

app.use("/register", RegisterFile);

app.use("/auth/google", AuthGoogleFile );



var PORT = 8000;

app.listen(PORT, (err)=> 
{
    if(err) throw err;
    else console.log("backend running at PORT " + PORT);
})