var mysql = require('mysql');
const dbConfig = require("../api/config/db.config.js");

var con = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.db
});

con.connect(err => {
    if (err) throw err;
    console.log("Connected to database.");
});

module.exports = con;