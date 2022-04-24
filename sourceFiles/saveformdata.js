import express from 'express';
import bodyParser from "body-parser";

import Responses from '../models/responses.js';

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post("/", (req,res)=>{
    var data = req.body;
    data = data.data;
    var len = data.length
    for(var i = 0; i < len ; i++){
        var object = data[i];
        var response = new Responses({
            teacher : data.teacher,
            subject: data.subject,
            answer: data.data
            
        })

        try{
            response.save();
        }
        catch(err){
            console.log("we are having problem saving form results");
            throw err;
        }
    }

})


export default app;