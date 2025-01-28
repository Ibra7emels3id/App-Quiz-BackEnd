const mongoose = require('mongoose');

const ScoreSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    quizId: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        min: 0,
        max: 100,
        required: true
    },
    answers:{
        type: [String],
        required: true
    },
    end:{
        type: String,
    },
    WaterResult:{
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: new Date().toDateString()
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    name:{
        type: String,
        required: true
    },
    AcademicYear:{
        type: String,
        required: true
    }
});

const FourthScore = mongoose.model('Fourth-score', ScoreSchema);
module.exports = FourthScore;