import express from "express";
import bodyParser from "body-parser";

import Students from "../models/students.js";

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.post("/", function(req, res){
    console.log("reachd here");
    // console.log(req.body);
    var data = req.body;

    var student = new Students({
        name : data.name,
        email: data.email,
        password: data.password,
        semester: parseInt(data.semester),
        section : data.section,
        branch: data.branch,
    })

    try{
        // console.log("reached here")
        student.save()
    }
    catch(err){
        console.log("there wasa error saving usr");
        console.log(err);

    }




})

export default app;