const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');


app.use(cors());
app.use(express.json());


mongoose.connect("mongodb+srv://admin:abir1000@cluster0.agmkp.mongodb.net/quiz")

app.use("/",require("./routes/questionRoute"));

app.listen(3001,function() {
    console.log("express server is running on port 3001");
})
