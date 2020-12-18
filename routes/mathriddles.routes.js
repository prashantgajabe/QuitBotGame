var express = require('express');
var app = express.Router();

// app => {
    const mathriddles = require("../controllers/mathriddles.controller.js");
    // Create a new mathriddles
    app.post("/", mathriddles.create);

    // Retrieve all mathriddles
    app.get("/", mathriddles.findAll);

    // Retrieve a single mathriddles with PicWordID
    app.get("/:idMathRiddle", mathriddles.findById);

    // Retrieve a single mathriddles with PicWordID
    app.get("/next/:idMathRiddle", mathriddles.findNext);

    // Retrieve a single mathriddles with PicWordID
    app.get("/pre/:idMathRiddle", mathriddles.findPrevious);


    // Update a mathriddles with PicWordID
    app.put("/:idMathRiddle", mathriddles.update);

    // Delete a mathriddles with PicWordID
    app.delete("/:idMathRiddle", mathriddles.delete);

// }

module.exports = app;