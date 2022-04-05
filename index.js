import express from "express";
import 'dotenv/config';

import connectDB from "./sourceFiles/connectdb.js";


var app = express();

connectDB();


var PORT = 8000;

app.listen(PORT, (err)=> 
{
    if(err) throw err;
    else console.log("backend running at PORT " + PORT);
})