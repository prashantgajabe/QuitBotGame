const Userprogress = require("../model/userprogress.model.js");

// Create and Save a new Userprogress
exports.create = (req, res) => {
   // Validate request
   if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Userprogress
  const userprogress = new Userprogress({
    Userbase_IdUser: req.body.Userbase_IdUser,
    PicWordDB_PicWordID: req.body.PicWordDB_PicWordID,
    PicWordDB_PicDone: req.body.PicWordDB_PicDone,
    MathRiddles_idMathRiddle: req.body.MathRiddles_idMathRiddle,
    MathRiddle_Done: req.body.MathRiddle_Done,
    Quiz_idQuiz: req.body.Quiz_idQuiz,
    Quiz_QuizDone: req.body.Quiz_QuizDone,
    UserCoins: req.body.UserCoins,
    UserLevel: req.body.UserLevel
  });

  // Save Userprogress in the database
  Userprogress.create(userprogress, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Userprogress."
      });
    else res.send(data);
  });
};

// Find a single Userprogress with a Userbase_IdUser
exports.findOne = (req, res) => {
    Userprogress.findById(req.params.Userbase_IdUser, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Userprogress with id ${req.params.Userbase_IdUser}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Userprogress with id " + req.params.Userbase_IdUser
            });
          }
        } else res.send(data);
      });
};

// Update a Userprogress identified by the userbaseId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
    Userprogress.updateById(
    req.params.Userbase_IdUser,
    new Userprogress(req.body),
    (err, data) => {
        if (err) {
        if (err.kind === "not_found") {
            res.status(404).send({
            message: `Not found Userprogress with id ${req.params.Userbase_IdUser}.`
            });
        } else {
            res.status(500).send({
            message: "Error updating Userprogress with id " + req.params.Userbase_IdUser
            });
        }
        } else res.send(data);
    });
};

// Delete a Userprogress with the specified userbaseId in the request
exports.delete = (req, res) => {
    Userprogress.remove(req.params.Userbase_IdUser, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Userprogress with id ${req.params.Userbase_IdUser}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Userprogress with id " + req.params.Userbase_IdUser
            });
          }
        } else res.send({ message: `Userprogress was deleted successfully!` });
      });
};
