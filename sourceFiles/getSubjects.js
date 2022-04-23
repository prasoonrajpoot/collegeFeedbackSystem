import express from "express";
import bodyParser from "body-parser";

import Subjects from "../models/subjects.js";

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.post("/", (req,res)=>{
    var data = req.body;
    console.log(data);
    // Subjects.find({})
})


export default app;