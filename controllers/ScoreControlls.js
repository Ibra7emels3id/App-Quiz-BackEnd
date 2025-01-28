const FirstScore = require("../models/FirstScore");
const FourthScore = require("../models/FourthScore");
const SecondScore = require("../models/SecondScore");
const ThirdScore = require("../models/ThirdScore");

// Add First Score 
// Add Score
const AddQuestionScoreFirst = async (req, res, next) => {
    const id = req.body.userId
    try {
        const scoreQuiz = await FirstScore.findOne({ userId: id });
        if (scoreQuiz) return res.status(404).json({ message: "Score In Server" });
        // Save Data 
        const score = new FirstScore(req.body)
        await score.save();
        res.status(201).json(score);
    } catch (error) {
        next(error);
    }
}
// Get Data First Score
const GetQuestionScoreFirst = async (req, res, next) => {
    try {
        const scoreQuiz = await FirstScore.findOne({ userId: req.params.id });
        if (!scoreQuiz) return res.status(404).json({ message: "No Score Found" });
        res.json(scoreQuiz);
    } catch (error) {
        next(error);
    }
}
// Get All Score Quiz First
const getAllScoreFirstQuiz = async (req, res) => {
    try {
        const scoreQuiz = await FirstScore.find({});
        res.json(scoreQuiz);
    } catch (error) {
        next(error);
    }
};
// Delete All First Score Quiz
const deleteAllScoreFirstQuiz = async (req, res, next) => {
    try {
        await FirstScore.deleteMany({});
        res.status(200).json({ message: "All First Score Quiz deleted successfully" });
    } catch (error) {
        next(error);
    }
}
// Delete All First Select Score Quiz
const deleteAllSelectScoreFirstQuiz = async (req, res, next) => {
    const { ids } = req.body;
    try {
        await FirstScore.deleteMany({ _id: { $in: ids } });
        res.status(200).json({ message: "Selected scores deleted successfully." });
    } catch (error) {
        next(error);
    }
}
// delete first Score To Id
const deleteFirstScoreToId = async (req, res, next) => {
    try {
        await FirstScore.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Score deleted successfully." });
    } catch (error) {
        next(error);
    }
};



// Add Second Score 
// Add Score
const AddQuestionScoreSecond = async (req, res, next) => {
    const id = req.body.userId
    try {
        const scoreQuiz = await SecondScore.findOne({ userId: id })
        if (scoreQuiz) return res.status(404).json({ message: "Score In Server" });
        // Save Data
        const score = new SecondScore(req.body)
        await score.save();
        res.status(201).json(score);
    } catch (error) {
        next(error);
    }
}
// Get Data Second Score
const GetQuestionScoreSecond = async (req, res, next) => {
    try {
        const scoreQuiz = await SecondScore.findOne({ userId: req.params.id });
        if (!scoreQuiz) return res.status(404).json({ message: "No Score Found" });
        res.json(scoreQuiz);
    } catch (error) {
        next(error);
    }
}
// Get All Score Quiz First
const getAllScoreSecondQuiz = async (req, res) => {
    try {
        const scoreQuiz = await SecondScore.find({});
        res.json(scoreQuiz);
    } catch (error) {
        next(error);
    }
};
// Delete All Second Score Quiz
const deleteAllScoreSecondQuiz = async (req, res, next) => {
    try {
        await SecondScore.deleteMany({});
        res.status(200).json({ message: "All Second Score Quiz deleted successfully" });
    } catch (error) {
        next(error);
    }
}
// Delete All Second Select Score Quiz
const deleteAllSelectScoreSecondQuiz = async (req, res, next) => {
    const { ids } = req.body;
    try {
        await SecondScore.deleteMany({ _id: { $in: ids } });
        res.status(200).json({ message: "Selected scores deleted successfully." });
    } catch (error) {
        next(error);
    }
}
// delete Score To Id
const deleteSecondScoreToId = async (req, res, next) => {
    try {
        await SecondScore.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Score deleted successfully." });
    } catch (error) {
        next(error);
    }
};



// Add Second Score 
// Add Score
const AddQuestionScoreThird = async (req, res, next) => {
    try {
        const scoreQuiz = await ThirdScore.findOne({ userId: req.body.userId })
        if (scoreQuiz) return res.status(404).json({ message: "Score In Server" });
        // Save Data
        const score = new ThirdScore(req.body)
        await score.save();
        res.status(201).json(score);
    } catch (error) {
        next(error);
    }
}
// Get Data Third Score
const GetQuestionScoreThird = async (req, res, next) => {
    try {
        const scoreQuiz = await ThirdScore.findOne({ userId: req.params.id });
        if (!scoreQuiz) return res.status(404).json({ message: "No Score Found" });
        res.json(scoreQuiz);
    } catch (error) {
        next(error);
    }
}
// Get All Score Quiz Third
const getAllScoreThirdQuiz = async (req, res) => {
    try {
        const scoreQuiz = await ThirdScore.find({});
        res.json(scoreQuiz);
    } catch (error) {
        next(error);
    }
};
// Delete All Third Score Quiz
const deleteAllScoreThirdQuiz = async (req, res, next) => {
    try {
        await ThirdScore.deleteMany({});
        res.status(200).json({ message: "All Third Score Quiz deleted successfully" });
    } catch (error) {
        next(error);
    }
}
// Delete All Third Select Score Quiz
const deleteAllSelectScoreThirdQuiz = async (req, res, next) => {
    const { ids } = req.body;
    try {
        await ThirdScore.deleteMany({ _id: { $in: ids } });
        res.status(200).json({ message: "Selected scores deleted successfully." });
    } catch (error) {
        next(error);
    }
}
// delete Score To Id
const deleteThirdScoreToId = async (req, res, next) => {
    try {
        await ThirdScore.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Score deleted successfully." });
    } catch (error) {
        next(error);
    }
};

// Add Fourth Score 
// Add Score
const AddQuestionScoreFourth = async (req, res, next) => {
    try {
        const scoreQuiz = await FourthScore.findOne({ userId: req.body.userId })
        if (scoreQuiz) return res.status(404).json({ message: "Score In Server" });
        // Save Data
        const score = new FourthScore(req.body)
        await score.save();
        res.status(201).json(score);
    } catch (error) {
        next(error);
    }
}
// Get Data Fourth Score
const GetQuestionScoreFourth = async (req, res, next) => {
    try {
        const scoreQuiz = await FourthScore.findOne({ userId: req.params.id });
        if (!scoreQuiz) return res.status(404).json({ message: "No Score Found" });
        res.json(scoreQuiz);
    } catch (error) {
        next(error);
    }
}
// Get All Score Quiz Fourth
const getAllScoreFourthQuiz = async (req, res) => {
    try {
        const scoreQuiz = await FourthScore.find({});
        res.json(scoreQuiz);
    } catch (error) {
        next(error);
    }
};
// Delete All Fourth Score Quiz
const deleteAllScoreFourthQuiz = async (req, res, next) => {
    try {
        await FourthScore.deleteMany({});
        res.status(200).json({ message: "All Fourth Score Quiz deleted successfully" });
    } catch (error) {
        next(error);
    }
}
// Delete All Fourth Select Score Quiz
const deleteAllSelectScoreFourthQuiz = async (req, res, next) => {
    const { ids } = req.body;
    try {
        await FourthScore.deleteMany({ _id: { $in: ids } });
        res.status(200).json({ message: "Selected scores deleted successfully." });
    } catch (error) {
        next(error);
    }
}
// delete Score To Id
const deleteFourthScoreToId = async (req, res, next) => {
    try {
        await FourthScore.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Score deleted successfully." });
    } catch (error) {
        next(error);
    }
};



module.exports = {
    AddQuestionScoreFirst,
    AddQuestionScoreSecond,
    AddQuestionScoreThird,
    AddQuestionScoreFourth,

    // Get Question Score
    GetQuestionScoreFirst,
    GetQuestionScoreSecond,
    GetQuestionScoreThird,
    GetQuestionScoreFourth,


    // Get All Question Score
    getAllScoreFirstQuiz,
    getAllScoreSecondQuiz,
    getAllScoreThirdQuiz,
    getAllScoreFourthQuiz,

    // Delete All Question Score  Quiz
    deleteAllScoreFirstQuiz,
    deleteAllScoreSecondQuiz,
    deleteAllScoreFourthQuiz,
    deleteAllScoreThirdQuiz,

    // 
    deleteAllSelectScoreFirstQuiz,
    deleteAllSelectScoreSecondQuiz,
    deleteAllSelectScoreThirdQuiz,
    deleteAllSelectScoreFourthQuiz,

    // 
    deleteFirstScoreToId,
    deleteSecondScoreToId,
    deleteThirdScoreToId,
    deleteFourthScoreToId,


};
