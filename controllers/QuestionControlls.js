const Question = require("../models/Question");
const QuestionFourth = require("../models/QuestionFourth");
const QuestionSecond = require("../models/QuestionSecond");
const QuestionThird = require("../models/QuestionThird");

// Add a new Question First Question
// Add Question
const AddQuestionFirst = async (req, res, next) => {
    console.log(req.body);
    try {
        const question = await Question.findOne({ Question: req.body.Question });
        if (question) {
            return res.status(400).json({ message: "Question already exists" });
        }

        const newQuestion = new Question(req.body);
        await newQuestion.save();
        res.status(201).json({ message: "Question added successfully", question: newQuestion });
        next();
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }

};
// delete a Question
const DeleteQuestion = async (req, res) => {
    try {
        const question = await Question.findByIdAndDelete(req.params.id);

        if (!question) {
            return res.status(404).json({ message: "Question not found" });
        }

        res.json({ message: "Question deleted successfully", question });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
// Get All Question
const GetAllQuestions = async (req, res) => {
    try {
        const questions = await Question.find();
        res.json(questions);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Add a New Question Second Question
// Add Question 
const AddQuestionSecond = async (req, res, next) => {
    console.log(req.body);
    try {
        const question = await QuestionSecond.findOne({ Question: req.body.Question });
        if (question) {
            return res.status(400).json({ message: "Question already exists" });
        }

        const newQuestion = new QuestionSecond(req.body);
        await newQuestion.save();
        res.status(201).json({ message: "Question added successfully", question: newQuestion });
        next();
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
// delete Question 
    const DeleteQuestionSecond = async (req, res) => {
    try {
        const question = await QuestionSecond.findByIdAndDelete(req.params.id);

        if (!question) {
            return res.status(404).json({ message: "Question not found" });
        }

        res.json({ message: "Question deleted successfully", question });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
// Get All Question
    const GetAllQuestionsSecond = async (req, res) => {
    try {
        const questions = await QuestionSecond.find();
        res.json(questions);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Add a new Question third Question
// Add Question
const AddQuestionThird = async (req, res, next) => {
    console.log(req.body);
    try {
        const question = await QuestionThird.findOne({ Question: req.body.Question });
        if (question) {
            return res.status(400).json({ message: "Question already exists" });
        }

        const newQuestion = new QuestionThird(req.body);
        await newQuestion.save();
        res.status(201).json({ message: "Question added successfully", question: newQuestion });
        next();
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
// delete Question 
    const DeleteQuestionThird = async (req, res) => {
    try {
        const question = await QuestionThird.findByIdAndDelete(req.params.id);

        if (!question) {
            return res.status(404).json({ message: "Question not found" });
        }

        res.json({ message: "Question deleted successfully", question });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
// Get All Question
    const GetAllQuestionsThird= async (req, res) => {
    try {
        const questions = await QuestionThird.find();
        res.json(questions);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Add a new Question third Question
// Add Question
const AddQuestionFourth = async (req, res, next) => {
    console.log(req.body);
    try {
        const question = await QuestionFourth.findOne({ Question: req.body.Question });
        if (question) {
            return res.status(400).json({ message: "Question already exists" });
        }

        const newQuestion = new QuestionFourth(req.body);
        await newQuestion.save();
        res.status(201).json({ message: "Question added successfully", question: newQuestion });
        next();
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
// delete Question 
    const DeleteQuestionFourth = async (req, res) => {
    try {
        const question = await QuestionFourth.findByIdAndDelete(req.params.id);

        if (!question) {
            return res.status(404).json({ message: "Question not found" });
        }

        res.json({ message: "Question deleted successfully", question });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
// Get All Question
    const GetAllQuestionsFourth = async (req, res) => {
    try {
        const questions = await QuestionFourth.find();
        res.json(questions);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

module.exports = {
    AddQuestionFirst,
    DeleteQuestion,
    GetAllQuestions,

    AddQuestionSecond,
    GetAllQuestionsSecond,
    DeleteQuestionSecond,

    AddQuestionThird,
    GetAllQuestionsThird,
    DeleteQuestionThird,

    AddQuestionFourth,
    GetAllQuestionsFourth,
    DeleteQuestionFourth,

};