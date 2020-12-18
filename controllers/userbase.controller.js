const Userbase = require("../model/userbase.model.js");

// Create and Save a new Userbase
exports.create = (req, res) => {
   // Validate request
   if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Userbase
  const userbase = new Userbase({
    Username: req.body.Username,
    UserPassword: req.body.UserPassword,
    UserEmail: req.body.UserEmail,
    UserPhoneNumber: req.body.UserPhoneNumber,
    UserAge: req.body.UserAge
  });

  // Save Userbase in the database
  Userbase.create(userbase, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Userbase."
      });
    else res.send(data);
  });
};

// Retrieve all Userbases from the database.
exports.findAll = (req, res) => {
    Userbase.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving users."
          });
        else res.send(data);
      });
};

// Find a single Userbase with a userbaseId
exports.findOneUsername = (req, res) => {
    Userbase.findByUsername(req.params.Username, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Userbase with Username ${req.params.Username}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Userbase with Username " + req.params.Username
            });
          }
        } else res.send(data);
      });
};

// Find a single Userbase with a Username
exports.findOne = (req, res) => {
    Userbase.findById(req.params.Username, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Userbase with id ${req.params.IdUser}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Userbase with id " + req.params.IdUser
            });
          }
        } else res.send(data);
      });
};

// Update a Userbase identified by the userbaseId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
    
    Userbase.updateById(
    req.params.IdUser,
    new Userbase(req.body),
    (err, data) => {
        if (err) {
        if (err.kind === "not_found") {
            res.status(404).send({
            message: `Not found Userbase with id ${req.params.IdUser}.`
            });
        } else {
            res.status(500).send({
            message: "Error updating Userbase with id " + req.params.IdUser
            });
        }
        } else res.send(data);
    });
};

// Delete a Userbase with the specified userbaseId in the request
exports.delete = (req, res) => {
    Userbase.remove(req.params.IdUser, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Userbase with id ${req.params.IdUser}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Userbase with id " + req.params.IdUser
            });
          }
        } else res.send({ message: `Userbase was deleted successfully!` });
      });
};

// Delete all Userbases from the database.
exports.deleteAll = (req, res) => {
    Userbase.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all userbases."
          });
        else res.send({ message: `All Userbases were deleted successfully!` });
      });
};