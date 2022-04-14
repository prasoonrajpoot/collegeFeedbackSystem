import mongoose from "mongoose";


const FormsScheema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    for : {
        type : String,
        required : true
    },
    Ques : {
        type : [String],
        required: true
    }
})