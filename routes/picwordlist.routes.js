var express = require('express');
var app = express.Router();

// app => {
    const picwordlist = require("../controllers/picwordlist.controller.js");
    // Create a new picwordlist
    app.post("/", picwordlist.create);

    // Retrieve all picwordlist
    app.get("/", picwordlist.findAll);

    // Retrieve a single picwordlist with PicWordID
    app.get("/:PicID", picwordlist.findById);

    // Update a picwordlist with PicWordID
    app.put("/:PicID", picwordlist.update);

    // Delete a picwordlist with PicWordID
    app.delete("/:PicID", picwordlist.delete);

// }

module.exports = app;