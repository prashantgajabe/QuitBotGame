const Picwordlist = require("../model/picwordlist.model.js");

// Create and Save a new Pic
exports.create = (req, res) => {
   // Validate request
   if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Pic
  const picwordlist = new Picwordlist({
    PicID: req.body.PicID,
    PicLink: req.body.PicLink
  });

  // Save Picwordlist in the database
  Picwordlist.create(picwordlist, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Pic."
      });
    else res.send(data);
  });
};

// Retrieve all Pics from the database.
exports.findAll = (req, res) => {
    Picwordlist.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving pictures."
          });
        else res.send(data);
      });
};

// Find a single Picword with a PicID
exports.findById = (req, res) => {
    Picwordlist.findById(req.params.PicID, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Picword with id ${req.params.PicID}.`
            });
Picwordlist} else {
            res.status(500).send({
              message: "Error retrieving Picword with id " + req.params.PicID
            });
          }
        } else res.send(data);
      });
};

// Update a Picword identified by the PicID in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
    Picwordlist.updateById(
    req.params.PicID,
    new Picwordlist(req.body),
    (err, data) => {
        if (err) {
        if (err.kind === "not_found") {
            res.status(404).send({
            message: `Not found Picwordlist with id ${req.params.PicID}.`
            });
        } else {
            res.status(500).send({
            message: "Error updating Picwordlist with id " + req.params.PicID
            });
        }
        } else res.send(data);
    });
};

// Delete a Picwordlist with the specified PicID in the request
exports.delete = (req, res) => {
    Picwordlist.remove(req.params.PicID, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found PicWord with PicwordID ${req.params.PicID}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Pic with PicID " + req.params.PicID
            });
          }
        } else res.send({ message: `Picquiz was deleted successfully!` });
      });
};