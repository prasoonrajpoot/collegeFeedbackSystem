import mongoose from "mongoose";



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