import express from "express";
import bodyParser from "body-parser";

import Teachers from "../models/teachers.js";
import Subjects from "../models/subjects.js";


var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.post("/", function(req,res){
    // console.log(req.body);
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
                var subject_info=data.subjectName;
                var i=0,j=0;
                j=subject_info.indexOf("-",i);
                var subject_name=subject_info.slice(i,j);
                i=j+1;
                j=data.subjectName.indexOf("-",i);
                var subject_semester=parseInt(data.subjectName.slice(i,j));
                i=j+1;
                j=data.subjectName.indexOf("-",i);
                var subject_branch=data.subjectName.slice(i,j);
                i=j+1;
                j=data.subjectName.indexOf("-",i);
                subject_name = subject_name.toLowerCase();
                var subject_section=data.subjectName.slice(i);
                subject_branch = subject_branch.toLowerCase();
            
                // console.log(subject_name,subject_branch,subject_section,subject_semester);
                
                var subject = new Subjects({
                    name : subject_name,
                    teacher : data.subjectTeacherName,
                    Branch : subject_branch,
                    Section : subject_section,
                    Semester : subject_semester
                })

                subject.save();

                Teachers.findOneAndUpdate({name : data.subjectTeacherName},
                     {"$push": {"subjects": data.subjectName}},
                     {"new": true, "upsert": true}, (err, result)=>{
                         if(err){
                             throw err;
                         }else{
                             console.log(result);
                         }
                     });

                res.send("done");
                
            }
        }
    })




})

export default app;