const express = require('express');
const router = express.Router();
const questionanswer = require('../models/quizmodel');



router.route("/create").post((req,res) =>{
     const question = req.body.question;
     const option1 = req.body.option1;
     const option2 = req.body.option2;
     const option3 = req.body.option3;
     const option4 = req.body.option4;
     const newQuestion = new questionanswer({
         question,
         option1,
         option2,
         option3,
         option4
     });

     newQuestion.save();
});

router.route("/questions").get((req,res)=>{
    questionanswer.find().then(foundQuestions => res.json(foundQuestions))
})

module.exports = router;