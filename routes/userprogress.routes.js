var express = require('express');
var app = express.Router();

// app => {
    const userprogress = require("../controllers/userprogress.controller.js");
    
    // Create a new Userprogress
    app.post("/", userprogress.create);

    // Retrieve a single Userprogress with Userbase_IdUser
    app.get("/:Userbase_IdUser", userprogress.findOne);

    // Update a Userprogress with Userbase_IdUser
    app.put("/:Userbase_IdUser", userprogress.update);

    // Delete a Userprogress with Userbase_IdUser
    app.delete("/:Userbase_IdUser", userprogress.delete);

// }

module.exports = app;