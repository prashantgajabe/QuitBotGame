var express = require('express');
var app = express.Router();

// app => {
    const userbase = require("../controllers/userbase.controller.js");
    // Create a new Userbase
    app.post("/", userbase.create);

    // Retrieve all Userbase
    app.get("/", userbase.findAll);

    // Retrieve a single Userbase with IdUser
    app.get("/:IdUser", userbase.findOne);

    // Retrieve a single Userbase with Username
    app.get("/user/:Username", userbase.findOneUsername);

    // Update a Userbase with IdUser
    app.put("/:IdUser", userbase.update);

    // Delete a Userbase with IdUser
    app.delete("/:IdUser", userbase.delete);

    // Create a new Userbase
    app.delete("/", userbase.deleteAll); 
// }

module.exports = app;