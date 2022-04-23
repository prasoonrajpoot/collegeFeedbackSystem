import express from "express";
import bodyParser from "body-parser";

import Forms from "../models/form.js";

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.post("/", (req,res)=>{
    var data = req.body
    console.log(data);
})


export default app;