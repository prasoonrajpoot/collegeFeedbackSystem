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
            "Rate the Punctuality of <Proff Name> in their class? ",
            "How well is the course organised by <Proff Name>?",
            "Is the syllabus complete on time?",
            "Rate the ability of <Proff Name> to make you understand new concepts?",
            "Rate the ability of <Proff Name> to connect theory/concepts with real-world examples and applications?",
            "Does <Proff Name> encourage critical thinking in their classes?",
            "Rate the interaction level in the class taken by <Proff Name>?",
            "Rate the quality of resources provided by <Proff Name> for the course?",
            "Dose <Proff Name> encourage you to engage in various academic interests and co-curricular activities?",
            "Rate the ability of <Proff Name> to clarify your doubts?",
            "Does <Proff Name> tries to introduce new teaching methods to make the class more engaging?",
            "Do <Proff Name> cover professional importance and course outcomes?" ]
    }
})

const Forms = mongoose.model("Form", FormsScheema);

export default Forms;