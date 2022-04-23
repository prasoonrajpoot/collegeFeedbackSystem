import express from "express";
import bodyParser from "body-parser";

import Teachers from "../models/teachers.js";
import Subjects from "../models/subjects.js";


var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.post("/", function(req,res){
    console.log(req.body);
    var data = req.body
    
    Teachers.findOne({name: data.subjectTeacherName}, (err, result)=>{
        if(err){
            throw err;
        }
        else{
            if(result == null){
                res.send("No Teacher In Record");

            }
            else{
               
                var subject = new Subjects({
                    name : data.subjectName,
                    teacher : result.id
                })

                subject.save();

                Teachers.updateOne({name:data.subjectTeacherName},
                     {$addToSet: {subjects: data.subjectName}});

                res.send("done");
                
            }
        }
    })




})

export default app;