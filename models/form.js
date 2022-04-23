import mongoose from "mongoose";


const FormsScheema = mongoose.Schema({
    for : {
        type : String,
        required : true
    },
    Ques : {
        type : [String],
        required: true
    }
})