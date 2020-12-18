const sql = require('./db.js');

const Mathriddles = function(mathriddles) {
    idMathRiddle = mathriddles.idMathRiddle;
    MathRiddle = mathriddles.MathRiddle;
    MathRiddleAnswer = mathriddles.MathRiddleAnswer;
    MathRiddlesLevel = mathriddles.MathRiddlesLevel;
};

Mathriddles.create = (newMathriddles, result) => {
    sql.query("INSERT INTO mathriddles SET ?", newMathriddles, (err, res) => {
        if(err){
            console.log("error: " + err);
            result(err, null);
            return;
        }

        console.log("Created mathriddles: ", {id: res.idMathRiddle, ...newMathriddles});
        result(null, {id: res.idMathRiddle, ...newMathriddles});
    });
};

Mathriddles.findById = (idMathRiddle, result) => {
    sql.query(`SELECT * FROM mathriddles WHERE idMathRiddle = ${idMathRiddle}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found Riddles: ", res[0]);
        result(null, res[0]);
        return;
      }
      result({ kind: "not_found" }, null);
    });
};

Mathriddles.findNext = (idMathRiddle, result) => {
    sql.query(`SELECT * FROM mathriddles WHERE idMathRiddle = (SELECT MIN(idMathRiddle) FROM mathriddles WHERE idMathRiddle > ${idMathRiddle}) LIMIT 1`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found Riddle: ", res[0]);
        result(null, res[0]);
        return;
      }
      result({ kind: "not_found" }, null);
    });
};

Mathriddles.findPrevious = (idMathRiddle, result) => {
    sql.query(`SELECT * FROM mathriddles WHERE idMathRiddle = (SELECT MAX(PicWordID) FROM mathriddles WHERE idMathRiddle < ${idMathRiddle}) LIMIT 1`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found Riddle: ", res[0]);
        result(null, res[0]);
        return;
      }
      result({ kind: "not_found" }, null);
    });
};

Mathriddles.getAll = result => {
    sql.query("SELECT * FROM Mathriddles", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Riddles: ", res);
      result(null, res);
    });
};

Mathriddles.updateById = (id, mathriddles, result) => {
    sql.query(
        "UPDATE mathriddles SET MathRiddle = ?, MathRiddleAnswer = ?, MathRiddlesLevel = ? WHERE idMathRiddle = ?",
        [mathriddles.MathRiddle, mathriddles.MathRiddleAnswer, mathriddles.MathRiddlesLevel, id],
        (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("updated Riddles: ", { id: id, ...mathriddles });
        result(null, { id: id, ...mathriddles });
        }
    );
};

Mathriddles.remove = (id, result) => {
    sql.query("DELETE FROM mathriddles WHERE idMathRiddle = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted mathriddles with id: ", id);
      result(null, res);
    });
};

module.exports = Mathriddles;