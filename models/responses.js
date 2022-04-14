import mongoose from "mongoose"


const responseScheema = mongoose.Schema({
    _id : mongoose.Types.ObjectId,
    answer : {
        type : [Object]
    }
    
})

