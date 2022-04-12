import mongoose from "mongoose";

import Teachers from "./teachers.js";

const subjectScheema = mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    
})