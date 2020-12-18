const Mathriddles = require("../model/mathriddles.model.js");

// Create and Save a new Riddle
exports.create = (req, res) => {
   // Validate request
   if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Riddle
  const mathriddles = new Mathriddles({
    MathRiddle : req.body.MathRiddle,
    MathRiddleAnswer : req.body.MathRiddleAnswer,
    MathRiddlesLevel : req.body.MathRiddlesLevel
  });

  // Save Mathriddles in the database
  Mathriddles.create(mathriddles, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Riddle."
      });
    else res.send(data);
  });
};

// Retrieve all Riddles from the database.
exports.findAll = (req, res) => {
    Mathriddles.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving pictures."
          });
        else res.send(data);
      });
};

// Find a single Riddleword with a idMathRiddle
exports.findById = (req, res) => {
    Mathriddles.findById(req.params.idMathRiddle, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Riddle with id ${req.params.idMathRiddle}.`
            });
Mathriddles} else {
            res.status(500).send({
              message: "Error retrieving Riddle with id " + req.params.idMathRiddle
            });
          }
        } else res.send(data);
      });
};

// Find a single Riddle with a idMathRiddle
exports.findNext = (req, res) => {
    Mathriddles.findNext(req.params.idMathRiddle, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Riddle with id ${req.params.idMathRiddle}.`
            });
            } else {
            res.status(500).send({
              message: "Error retrieving Riddle with id " + req.params.idMathRiddle
            });
          }
        } else res.send(data);
      });
};

// Find a single Riddle with a idMathRiddle
exports.findPrevious = (req, res) => {
    Mathriddles.findPrevious(req.params.idMathRiddle, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Riddle with id ${req.params.idMathRiddle}.`
            });
            } else {
            res.status(500).send({
              message: "Error retrieving Riddle with id " + req.params.idMathRiddle
            });
          }
        } else res.send(data);
      });
};

// Update a Riddle identified by the idMathRiddle in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
    Mathriddles.updateById(
    req.params.idMathRiddle,
    new Mathriddles(req.body),
    (err, data) => {
        if (err) {
        if (err.kind === "not_found") {
            res.status(404).send({
            message: `Not found Mathriddles with id ${req.params.idMathRiddle}.`
            });
        } else {
            res.status(500).send({
            message: "Error updating Mathriddles with id " + req.params.idMathRiddle
            });
        }
        } else res.send(data);
    });
};

// Delete a Mathriddles with the specified idMathRiddle in the request
exports.delete = (req, res) => {
    Mathriddles.remove(req.params.idMathRiddle, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Riddle with RiddleID ${req.params.idMathRiddle}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Riddle with idMathRiddle " + req.params.idMathRiddle
            });
          }
        } else res.send({ message: `Riddle was deleted successfully!` });
      });
};