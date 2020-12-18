const sql = require('./db.js');

const Userbase = function(userbase) {
    // this.IdUser = userbase.IdUser;
    this.Username = userbase.Username;
    this.UserPassword = userbase.UserPassword;
    this.UserEmail = userbase.UserEmail;
    this.UserPhoneNumber = userbase.UserPhoneNumber;
    this.UserAge = userbase.UserAge;
};

Userbase.create = (newUserbase, result) => {
    sql.query("INSERT INTO Userbase SET ?", newUserbase, (err, res) => {
        if(err){
            console.log("error: " + err);
            result(err, null);
            return;
        }

        console.log("Created User: ", {id: res.IdUser, ...newUserbase});
        result(null, {id: res.IdUser, ...newUserbase});
    });
};

Userbase.findById = (userID, result) => {
    sql.query(`SELECT * FROM userbase WHERE IdUser = ${userID}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found user: ", res[0]);
        result(null, res[0]);
        return;
      }
      result({ kind: "not_found" }, null);
    });
};

Userbase.findByUsername = (Username, result) => {
    sql.query(`SELECT * FROM userbase WHERE Username = '${Username}' LIMIT 1`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found user: ", res[0]);
        result(null, res[0]);
        return;
      }
      result({ kind: "not_found" }, null);
    });
};

Userbase.getAll = result => {
    sql.query("SELECT * FROM userbase", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("users: ", res);
      result(null, res);
    });
};

Userbase.updateById = (id, userbase, result) => {
    sql.query(
        "UPDATE userbase SET Username = ?, UserPassword = ?, UserEmail = ?, UserPhoneNumber = ?, UserAge = ? WHERE IdUser = ?",
        [userbase.Username, userbase.UserPassword, userbase.UserEmail, userbase.UserPhoneNumber, userbase.UserAge, id],
        (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found userbase with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("updated userbase: ", { id: id, ...userbase });
        result(null, { id: id, ...userbase });
        }
    );
};

Userbase.remove = (id, result) => {
    sql.query("DELETE FROM userbase WHERE IdUser = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found userbase with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted userbase with id: ", id);
      result(null, res);
    });
};

module.exports = Userbase;