import mongoose from "mongoose"


const responseScheema = mongoose.Schema({
    _id : mongoose.Types.ObjectId,
    answer : {
        type : [Object]
    }
    
})

var Responses = mongoose.model("Response", responseScheema);

export default Responses;