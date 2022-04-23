import mongoose from "mongoose"


const responseScheema = mongoose.Schema({
    answer : {
        type : [Object]
    }
    
})

var Responses = mongoose.model("Response", responseScheema);

export default Responses;