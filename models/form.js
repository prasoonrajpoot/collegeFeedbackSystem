import mongoose from "mongoose";


const FormsScheema = mongoose.Schema({
    Branch : {
        type : String,
        required : true
    },
    Section : {
        type : String,
        required : true
    },
    Semester : {
        type : Number,
        required : true
    },
    Ques : {
        type : [String],
        required: false,
        default: [
            "Rate his/her punctuality in the class?",
            "How well does he/she organise the course?",
            "Is the syllabus complete on time?",
            "Rate his/her ability to make you understand new concepts?",
            "Rate his/her  ability to connect theory/concepts with real-world examples and applications?",
            "Does he/she  encourage critical thinking in their classes?",
            "Rate his/her interaction level in the class?",
            "Rate the quality of resources provided by him / her for the course?",
            "Does he/she encourage you to engage in various academic interests and co-curricular activities?",
            "Rate his/her ability to clarify your doubts?",
            "Does he/she try to introduce new teaching methods to make the class more engaging?",
            "Does he/she cover professional importance and course outcomes?" ]
    }
})

const Forms = mongoose.model("Form", FormsScheema);

export default Forms;