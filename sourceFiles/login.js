import express from "express";
import bodyParser from "body-parser";

import Students from "../models/students.js"

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.post("/", function(req, res){
    var data = req.body;
    // console.log(data);

    Students.findOne({email : data.userEmail}, function(err, result){
        if(err){
            console.log(err);
            console.log("there was a error retriving data");
        }
        else{
            if(result == null){
                res.send("NO USER");
            }
            else{
                if(data.password == null){
                    if(result.googleId == data.authCode){
                        console.log(result);
                        var jsonObject = {
                            name : result.name,
                            email: result.email,
                            semester: result.semester,
                            section: result.section,
                            branch: result.branch,
                            code: "Login Successful"
                        }
                        res.json(jsonObject);
                    }
                    else{
                        // console.log(result.googleId);
                        // console.log(data.)
                        // console.log("we here")
                        res.send("invalid login");
                    }
                }
                else{
                    if(result.password == data.password){
                        res.send("Login Successful");
                    }
                    else{
                        res.send("invalid login")
                    }
                }
            }
        }
    })

})

export default app;