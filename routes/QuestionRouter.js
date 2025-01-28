const express = require('express');
const { AddQuestionFirst, DeleteQuestion, GetAllQuestions, AddQuestionSecond, DeleteQuestionSecond, GetAllQuestionsSecond, AddQuestionThird, DeleteQuestionThird, GetAllQuestionsThird, AddQuestionFourth, DeleteQuestionFourth, GetAllQuestionsFourth } = require('../controllers/QuestionControlls');
const QuestionRouter = express.Router()


// Handle routes First
QuestionRouter.post('/first-question' , AddQuestionFirst)
QuestionRouter.delete('/first-question/:id' , DeleteQuestion)
QuestionRouter.get('/first-grade' , GetAllQuestions)

// Handle routes Second
QuestionRouter.post('/second-question' , AddQuestionSecond);
QuestionRouter.delete('/second-question/:id' , DeleteQuestionSecond);
QuestionRouter.get('/second-grade' , GetAllQuestionsSecond);

// Handle routes third
QuestionRouter.post('/third-question' , AddQuestionThird);
QuestionRouter.delete('/third-question/:id' , DeleteQuestionThird);
QuestionRouter.get('/third-grade' , GetAllQuestionsThird);

// Handle routes Fourth
QuestionRouter.post('/fourth-question' , AddQuestionFourth);
QuestionRouter.delete('/fourth-question/:id' , DeleteQuestionFourth);
QuestionRouter.get('/fourth-grade' , GetAllQuestionsFourth);


module.exports = QuestionRouter;