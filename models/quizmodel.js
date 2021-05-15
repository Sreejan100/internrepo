const mongoose = require('mongoose');

const quizschema = {
     question: String,
     option1: String,
     option2: String,
     option3: String,
     option4: String
}

const questionanswer = mongoose.model("Question",quizschema);

module.exports = questionanswer;