import mongoose from "mongoose";

import Teachers from "./teachers.js";


const subjectScheema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name: {
        type : String,
        required : true
    },

    teacher : {
        required : true,
        type: mongoose.Schema.Types.ObjectId, ref: Teachers
    },

    

})

const Subjects = mongoose.model("Subject", subjectScheema);