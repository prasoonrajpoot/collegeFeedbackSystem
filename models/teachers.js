import mongoose from "mongoose";

import Subjects from "./subjects.js";

const teachersScheema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    
    subjects : {
        type : [String],
        required : false
    },
    

})

var Teachers = mongoose.model("Teacher", teachersScheema);

export default Teachers;