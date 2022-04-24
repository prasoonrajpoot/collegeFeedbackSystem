import mongoose from "mongoose"


const responseScheema = mongoose.Schema({
    teacher : {
        type : String,
        required : true,
    },
    subject : {
        type : String,
        required: true
    },

    answer : {
        type : [String],
        requierd : true
    }
    
})

var Responses = mongoose.model("Response", responseScheema);

export default Responses;