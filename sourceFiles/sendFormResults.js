import express from "express";
import bodyParser from "body-parser";

import Responses from "../models/responses.js";
import Teachers from "../models/teachers.js";

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post("/", (req,res)=>{

    // var result = [{teacher : "Teacher name",
    //                 data: [{index  : q1
    //                 1ra}, {}, {}]}, {}, {}]

    var result;

    // Teachers.find({}, (err, result)=>{
    //     if(err){
    //         console.log("there was an error fetching teachers");
    //         throw err;
    //     }
    //     else{
    //         // console.log(result);
    //         var len = result.length;
    //         for(var i = 0; i < len; i++)
    //         {
    //             var teacherResponse = {Teacher : result[i].name,
    //                                     data : []};

    //             // teacherResponse = {Teacher : teacherName,
    //             //                     data : []}

        

    //             Responses.find({teacher: result[i].name}, (err, resResult)=> {
    //                 if(err){
    //                     console.log("there was a error getting respones");
    //                     throw err;
    //                 }
    //                 else{
    //                     // console.log(resResult);

    //                     var resLen = resResult.length;
    //                     var FeedbackResult;

    //                     // FeedbackResult = {number: index,
    //                     // 1:, }

    //                     for(var j = 0; j < resLen; j++){

                        
    //                         console.log(resResult[j].teacher);
    //                         console.log(resResult[j].answer);
                    

    //                         var answerArray = resResult[j].answer;
    //                         for(var k = 0; k < answerArray.length; k++){
                                
    //                         }

    //                     teacherResponse.data.push(FeedbackResult);
    //                     }
    //                 }
    //             })
    //         result.push(teacherResponse);

    //         }
    //     }
    // })

    

    Responses.find({teacher: "Gaurav Malode"}, (err, resResult)=> {
                        if(err){
                            console.log("there was a error getting respones");
                            throw err;
                        }
                        else{
                            var arrayResults=new Array(12);

                            for(var k = 0;k<12;k++){
                                arrayResults[k]= new Array(resLen);
                            }

                            // console.log(resResult);
    
                            var resLen = resResult.length;
                            var FeedbackResult;
    
                            // FeedbackResult = {number: index,
                            // 1:, }
    
                            for(var j = 0; j < resLen; j++){
    
                            
                                // console.log(resResult[j].teacher);
                                console.log(resResult[j].answer);

                                for(var i = 0;i<12;i++){
                                    // console.log()
                                    arrayResults[i][j]=resResult[j].answer[i];
                                }
    
                            // teacherResponse.data.push(FeedbackResult);
                            }
                            // console.log(arrayResults);
                            res.send({data: arrayResults});
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