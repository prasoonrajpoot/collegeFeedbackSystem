import mongoose from "mongoose";

import Teachers from "./teachers.js";


const subjectScheema = mongoose.Schema({
    name: {
        type : String,
        required : true
    },

    Branch : {
        type : String,
        required : true
    },
    Section : {
        type : String,
        required : true
    },
    Semester : {
        type : Number,
        required : true
    },

    teacher : {
        required : true,
        type: String
    },

    

})

const Subjects = mongoose.model("Subject", subjectScheema);

export default Subjects;