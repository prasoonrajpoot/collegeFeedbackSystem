import express from "express";
import bodyParser from "body-parser";


var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get("/", function(req,res){
    console.log(req.body);


})

export default app;