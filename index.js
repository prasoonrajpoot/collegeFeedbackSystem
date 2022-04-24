import express from "express";
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)




import connectDB from "./sourceFiles/connectdb.js";
import RegisterFile from "./sourceFiles/register.js";
import LoginFile from "./sourceFiles/login.js";
import AddTeacherFile from "./sourceFiles/addteacher.js"
import AddSubjectFile from "./sourceFiles/addSubject.js";
import AddFlotFormsFile from "./sourceFiles/floatforms.js";
import GetFormDataFile from "./sourceFiles/getFormData.js";
import GetSubjectsFile from "./sourceFiles/getSubjects.js";
import GetSaveFormDataFile from "./sourceFiles/saveformdata.js";




var app = express();
app.use(bodyParser.urlencoded({extended: true}));

dotenv.config();
connectDB();

app.use("/register", RegisterFile);
app.use("/login", LoginFile);
app.use("/addteacher", AddTeacherFile);
app.use("/addsubject", AddSubjectFile);
app.use("/floatforms", AddFlotFormsFile);
app.use("/getformdata", GetFormDataFile);
app.use("/getsubjects", GetSubjectsFile);
app.use("/saveformdata", GetSaveFormDataFile);




if(process.env.NODE_ENV === 'production'){
    app.use(express.static("frontend/build"));  
    app.get("*", (req,res) =>{
        res.sendFile(path.resolve(__dirname,'frontend','build',         
                      'index.html'));
    })  
}


console.log(process.env.PORT);

var PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{
    console.log("backend running at port " + PORT);
})
