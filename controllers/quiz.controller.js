const Quiz = require("../model/quiz.model.js");

// Create and Save a new Quiz
exports.create = (req, res) => {
   // Validate request
   if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Quiz
  const quiz = new Quiz({
    QuizQuestion: req.body.QuizQuestion,
    QuizQuestionDetail: req.body.QuizQuestionDetail,
    QuizOp1: req.body.QuizOp1,
    QuizOp2: req.body.QuizOp2,
    QuizOp3: req.body.QuizOp3,
    QuizOp4: req.body.QuizOp4,
    QuizC_Op: req.body.QuizC_Op,
    QuizLevel: req.body.QuizLevel
  });

  // Save Quiz in the database
  Quiz.create(quiz, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Quiz."
      });
    else res.send(data);
  });
};

// Retrieve all Quizzes from the database.
exports.findAll = (req, res) => {
    Quiz.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving quizzes."
          });
        else res.send(data);
      });
};

// Find a single Quiz with a quizId
exports.findOne = (req, res) => {
    Quiz.findById(req.params.IdQuiz, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Quiz with id ${req.params.IdQuiz}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Quiz with id " + req.params.IdQuiz
            });
          }
        } else res.send(data);
      });
};

// Update a Quiz identified by the quizId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
    Quiz.updateById(
    req.params.IdQuiz,
    new Quiz(req.body),
    (err, data) => {
        if (err) {
        if (err.kind === "not_found") {
            res.status(404).send({
            message: `Not found Quiz with id ${req.params.IdQuiz}.`
            });
        } else {
            res.status(500).send({
            message: "Error updating Quiz with id " + req.params.IdQuiz
            });
        }
        } else res.send(data);
    });
};

// Delete a Quiz with the specified quizId in the request
exports.delete = (req, res) => {
    Quiz.remove(req.params.IdQuiz, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Quiz with id ${req.params.IdQuiz}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Quiz with id " + req.params.IdQuiz
            });
          }
        } else res.send({ message: `Quiz was deleted successfully!` });
      });
};

// Delete all Quizzes from the database.
exports.deleteAll = (req, res) => {
    Quiz.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all quizzes."
          });
        else res.send({ message: `All Quizzes were deleted successfully!` });
      });
};