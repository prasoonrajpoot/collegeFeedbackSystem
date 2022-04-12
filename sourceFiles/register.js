import express from "express";
import bodyParser from "body-parser";


var app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.post("/", function(req, res){
    console.log("reachd here");

})

export default app;