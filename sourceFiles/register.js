import express from "express";
import bodyParser from "body-parser";
import {OAuth2Client} from "google-auth-library"
import Students from "../models/students.js";

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



// const getData = async (token) => {
//     const client = new OAuth2Client(process.env.CLIENT_ID);
//     var ticket = await client.verifyIdToken({idToken : token, audience : process.env.CLIENT_ID})
//     const payload = ticket.getPayload();
//     console.log(payload)
//     return payload;
// }


app.post("/", function(req, res){
    console.log("reachd here");
    // console.log(req.body);
    var data = req.body;
    // var token = data.auth_token;

    // console.log(token);


    

    // var payload = getData(token);

    // console.log(payload);



    var student = new Students({
        name : data.name,
        email: data.email,
        password: data.password,
        semester: parseInt(data.semester),
        section : data.section,
        branch: data.branch,
        googleId: data.auth_token,
    })

    Students.findOne({email: data.email}, function(err, result){
        if(err){
            console.log(err);
        }
        else{
            if(result == null){

                try{
                    // console.log("reached here")
                    
                    student.save()
                    res.send("succesfull");
                }
                catch(err){
                    console.log("there wasa error saving usr");
                    console.log(err);
                    res.send('fucked');
            
                }
            }
            else{
                res.send("Duplicate Account");
            }
        }
    })
})

export default app;