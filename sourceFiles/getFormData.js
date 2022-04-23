import express from "express";
import bodyParser from "body-parser";

import Forms from "../models/form.js";

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.post("/", (req,res)=>{
    // console.log("we are here");
    var data = req.body
    console.log(req.body);

    Forms.find({Branch : data.branch.toLowerCase(), Semester : parseInt(data.semester), Section: data.section},
        (err, result)=>{
            if(err){
                throw err;
            }
            else{
                console.log(result);
                if(result == null){
                    res.send({code : "NO FORMS"});
                }
                else{
                    res.send({
                        code : "Got Forms",
                        forms : result
                    })
                }
            }
        })
})


export default app;