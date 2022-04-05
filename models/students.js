import mongoose from "mongoose";

const studentScheema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    mobile : {
        type : Number,
        required : false
    },

})


var Students = mongoose.model("Student", studentScheema);

export default Students;