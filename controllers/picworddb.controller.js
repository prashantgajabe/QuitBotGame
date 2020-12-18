const Picworddb = require("../model/picworddb.model.js");

// Create and Save a new PicQuiz
exports.create = (req, res) => {
   // Validate request
   if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a PicQuiz
  const picworddb = new Picworddb({
    PicOneID: req.body.PicOneID,
    PicThreeID: req.body.PicThreeID,
    PicTwoID: req.body.PicTwoID,
    PicFourID: req.body.PicFourID,
    PicOneCopyright: req.body.PicOneCopyright,
    PicTwoCopyright: req.body.PicTwoCopyright,
    PicThreeCopyright: req.body.PicThreeCopyright,
    PicFourCopyright: req.body.PicFourCopyright,
    PicAnswer: req.body.PicAnswer
  });

  // Save Picworddb in the database
  Picworddb.create(picworddb, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the PicQuiz."
      });
    else res.send(data);
  });
};

// Retrieve all PicQuizzes from the database.
exports.findAll = (req, res) => {
    Picworddb.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving pictures."
          });
        else res.send(data);
      });
};

// Find a single Picword with a PicWordID
exports.findById = (req, res) => {
    Picworddb.findById(req.params.PicWordID, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Picword with id ${req.params.PicWordID}.`
            });
Picworddb} else {
            res.status(500).send({
              message: "Error retrieving Picword with id " + req.params.PicWordID
            });
          }
        } else res.send(data);
      });
};

// Find a single Picword with a PicWordID
exports.findNext = (req, res) => {
    Picworddb.findNext(req.params.PicWordID, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Picword with id ${req.params.PicWordID}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Picword with id " + req.params.PicWordID
            });
          }
        } else res.send(data);
      });
};

// Find a single Picword with a PicWordID
exports.findPrevious = (req, res) => {
    Picworddb.findPrevious(req.params.PicWordID, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Picword with id ${req.params.PicWordID}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Picword with id " + req.params.PicWordID
            });
          }
        } else res.send(data);
      });
};

// Update a Picword identified by the PicWordID in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
    Picworddb.updateById(
    req.params.PicWordID,
    new Picworddb(req.body),
    (err, data) => {
        if (err) {
        if (err.kind === "not_found") {
            res.status(404).send({
            message: `Not found Picworddb with id ${req.params.PicWordID}.`
            });
        } else {
            res.status(500).send({
            message: "Error updating Picworddb with id " + req.params.PicWordID
            });
        }
        } else res.send(data);
    });
};

// Delete a Picworddb with the specified PicWordID in the request
exports.delete = (req, res) => {
    Picworddb.remove(req.params.PicWordID, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found PicWord with PicwordID ${req.params.PicWordID}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete PicQuiz with PicWordID " + req.params.PicWordID
            });
          }
        } else res.send({ message: `Picquiz was deleted successfully!` });
      });
};