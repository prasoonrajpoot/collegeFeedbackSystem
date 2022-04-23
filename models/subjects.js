import mongoose from "mongoose";

import Teachers from "./teachers.js";


const subjectScheema = mongoose.Schema({
    name: {
        type : String,
        required : true
    },

    teacher : {
        required : true,
        type: mongoose.Schema.Types.ObjectId
    },

    

})

const Subjects = mongoose.model("Subject", subjectScheema);

export default Subjects;