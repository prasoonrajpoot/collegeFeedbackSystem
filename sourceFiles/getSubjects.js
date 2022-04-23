import express from "express";
import bodyParser from "body-parser";

import Subjects from "../models/subjects.js";

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.post("/", (req,res)=>{
    var data = req.body;
    console.log(data);
    Subjects.find({Branch : data.branch, Section : data.Section, Semester : data.semester},
        (err, result)=>{
            if(err){
                throw err;
            }
            else{
                console.log(result);
                res.send(result);
            }
        })
})


export default app;