import mongoose from "mongoose";
import findOrCreate from "mongoose-findorcreate";

const studentScheema = new mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password: {
        type : String,
        required : false
    },
    mobile : {
        type : Number,
        required : false
    },
    semester: {
        type: Number,
        required: true
    },
    section: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    }
})

studentScheema.plugin(findOrCreate);

var Students = mongoose.model("Student", studentScheema);

export default Students;