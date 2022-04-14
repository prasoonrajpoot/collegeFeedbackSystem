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
import AuthGoogleFile from "./sourceFiles/googleauth.js";

var app = express();
app.use(bodyParser.urlencoded({extended: true}));

dotenv.config();
connectDB();

app.use("/register", RegisterFile);

app.use("/auth/google", AuthGoogleFile );

app.use("/login", LoginFile);


if(process.env.NODE_ENV === 'production'){
    app.use(express.static("frontend/build"));  
    app.get("*", (req,res) =>{
        res.sendFile(path.resolve(__dirname,'frontend','build',         
                      'index.html'));
    })  
}


console.log(process.env.PORT);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>{ 
    console.log(`Server is listening on port ${PORT}...`)
});


