var express = require('express');
var app = express.Router();

// app => {
    const picworddb = require("../controllers/picworddb.controller.js");
    // Create a new picworddb
    app.post("/", picworddb.create);

    // Retrieve all picworddb
    app.get("/", picworddb.findAll);

    // Retrieve a single picworddb with PicWordID
    app.get("/:PicWordID", picworddb.findById);

    // Retrieve a single picworddb with PicWordID
    app.get("/next/:PicWordID", picworddb.findNext);

    // Retrieve a single picworddb with PicWordID
    app.get("/pre/:PicWordID", picworddb.findPrevious);

    // Update a picworddb with PicWordID
    app.put("/:PicWordID", picworddb.update);

    // Delete a picworddb with PicWordID
    app.delete("/:PicWordID", picworddb.delete);

// }

module.exports = app;