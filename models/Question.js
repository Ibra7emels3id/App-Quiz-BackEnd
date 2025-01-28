const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    Question: {
        type: String,
        required: true
    },
    answers: {
        type: [String],
        required: true
    },
    ans: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})

const Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;