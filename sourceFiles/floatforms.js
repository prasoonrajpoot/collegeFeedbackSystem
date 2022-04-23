import express from "express";
import bodyParser from "body-parser";
import Forms from "../models/form.js";


var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.post("/", (req,res)=>{
    console.log(req.body);

    var data = req.body;

    const Form = new Forms({
        Branch: data.branch,
        Section : data.section,
        Semester : data.semester
    });

    try{
        Form.save();
        res.send("Form Saved");
    }
    catch(err){
        throw err;
    }
})


export default app;