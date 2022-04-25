import express from "express";
import bodyParser from "body-parser";

import Responses from "../models/responses.js";
import Teachers from "../models/teachers.js";

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post("/", (req,res)=>{

    Teachers.find({}, (err, result)=>{
        if(err){
            console.log("there was an error fetching teachers");
            throw err;
        }
        else{
            // console.log(result);
            var len = result.length;
            for(var i = 0; i < len; i++){
                Responses.find({teacher: result[i].name}, (err, resResult)=> {
                    if(err){
                        console.log("there was a error getting respones");
                        throw err;
                    }
                    else{
                        // console.log(resResult);
                        var resLen = resResult.length
                        for(var j = 0; j < resLen; j++){
                            console.log(resResult[j].answer);
                        }
                    }
                })
            }
        }
    })

    // Responses.find({teacher: data.teacher}, (err,result)=>{
    //     if(err){
    //         console.log('there was an error getting data on responses');
    //         throw err;
    //     }
    //     else{
    //         console.log(result);

    //     }
    // })

})


export default app;