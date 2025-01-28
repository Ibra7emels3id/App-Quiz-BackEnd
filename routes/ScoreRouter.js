const express = require('express');
const { AddQuestionScoreFirst, GetQuestionScoreFirst, AddQuestionScoreSecond, GetQuestionScoreSecond, GetQuestionScoreThird, GetQuestionScoreFourth, AddQuestionScoreThird, AddQuestionScoreFourth, getAllScoreFirstQuiz, getAllScoreSecondQuiz, getAllScoreThirdQuiz, getAllScoreFourthQuiz, deleteAllScoreFirstQuiz, deleteAllScoreSecondQuiz, deleteAllScoreFourthQuiz, deleteAllScoreThirdQuiz, deleteAllSelectScoreFirstQuiz, deleteFirstScoreToId, deleteAllSelectScoreSecondQuiz, deleteSecondScoreToId, deleteAllSelectScoreFourthQuiz, deleteAllSelectScoreThirdQuiz, deleteThirdScoreToId, deleteFourthScoreToId } = require('../controllers/ScoreControlls');
const ScoreRouterCLient = express.Router()

// Add Router Fires 
ScoreRouterCLient.post('/first-grade', AddQuestionScoreFirst)
ScoreRouterCLient.get('/first-grade/:id' , GetQuestionScoreFirst)
ScoreRouterCLient.get('/first-quiz', getAllScoreFirstQuiz)
ScoreRouterCLient.delete('/first-quiz', deleteAllScoreFirstQuiz)
ScoreRouterCLient.delete('/first-quiz/selected', deleteAllSelectScoreFirstQuiz)
ScoreRouterCLient.delete('/first-quiz/:id', deleteFirstScoreToId)





ScoreRouterCLient.post('/second-grade', AddQuestionScoreSecond)
ScoreRouterCLient.get('/second-grade/:id' , GetQuestionScoreSecond)
ScoreRouterCLient.get('/second-quiz', getAllScoreSecondQuiz)
ScoreRouterCLient.delete('/second-quiz/selected', deleteAllSelectScoreSecondQuiz)
ScoreRouterCLient.delete('/second-quiz', deleteAllScoreSecondQuiz)
ScoreRouterCLient.delete('/second-quiz/:id', deleteSecondScoreToId)




ScoreRouterCLient.post('/third-grade', AddQuestionScoreThird)
ScoreRouterCLient.get('/third-grade/:id' , GetQuestionScoreThird)
ScoreRouterCLient.get('/third-quiz', getAllScoreThirdQuiz)
ScoreRouterCLient.delete('/third-quiz', deleteAllScoreThirdQuiz)
ScoreRouterCLient.delete('/third-quiz/selected', deleteAllSelectScoreThirdQuiz)
ScoreRouterCLient.delete('/third-quiz/:id', deleteThirdScoreToId)


ScoreRouterCLient.post('/fourth-grade', AddQuestionScoreFourth)
ScoreRouterCLient.get('/fourth-grade/:id' , GetQuestionScoreFourth)
ScoreRouterCLient.get('/fourth-quiz', getAllScoreFourthQuiz)
ScoreRouterCLient.delete('/fourth-quiz', deleteAllScoreFourthQuiz)
ScoreRouterCLient.delete('/fourth-quiz/selected', deleteAllSelectScoreFourthQuiz)
ScoreRouterCLient.delete('/fourth-quiz/:id', deleteFourthScoreToId)



module.exports = ScoreRouterCLient;
