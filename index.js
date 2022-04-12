import express from "express";
import 'dotenv/config';
import bodyParser from "body-parser";




import connectDB from "./sourceFiles/connectdb.js";
import RegisterFile from "./sourceFiles/register.js";
import LoginFile from "./sourceFiles/login.js";


var app = express();
app.use(bodyParser.urlencoded({extended: true}));


connectDB();

app.use("/register", RegisterFile);



var PORT = 8000;

app.listen(PORT, (err)=> 
{
    if(err) throw err;
    else console.log("backend running at PORT " + PORT);
})