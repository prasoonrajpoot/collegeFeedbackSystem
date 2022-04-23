import express from "express";
import bodyParser from "body-parser";
import Teachers from "../models/teachers.js";

var app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.post("/", (req,res) => {
    var data = req.body;
    console.log(data);

    var teacher = new Teachers({
        name : data.Name
    })

    try{
        teacher.save();
        res.send("succefully saved")
        
    }
    catch(err){
        console.log(err);
    }


    
} )


export default app;