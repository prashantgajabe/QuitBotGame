var express = require('express');
var app = express.Router();

// app => {
    const quiz = require("../controllers/quiz.controller.js");
    // Create a new Quiz
    app.post("/", quiz.create);

    // Retrieve all Quiz
    app.get("/", quiz.findAll);

    // Retrieve a single Quiz with Quiz ID
    app.get("/:IdQuiz", quiz.findOne);

    // Update a Quiz with Quiz ID
    app.put("/:IdQuiz", quiz.update);

    // Delete a Quiz with Quiz ID
    app.delete("/:IdQuiz", quiz.delete);

    // Create a new Quiz
    app.delete("/", quiz.deleteAll); 
// }

module.exports = app;