const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');


app.use(cors());
app.use(express.json());


mongoose.connect("mongodb+srv://admin:abir1000@cluster0.agmkp.mongodb.net/quiz")

app.use("/",require("./routes/questionRoute"));


if(process.env.NODE_ENV === 'production'){
     app.use(express.static('quizapp/build'));
     app.get("*",(req,res) => {
         res.sendFile(path.resolve(__dirname,'quizapp','build','index.html'));
     })
}

app.listen(3001,function() {
    console.log("express server is running on port 3001");
})
