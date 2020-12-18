const sql = require('./db.js');
const Userprogress = function(userprogress){
    this.Userbase_IdUser = userprogress.Userbase_IdUser;
    this.PicWordDB_PicWordID = userprogress.PicWordDB_PicWordID;
    this.PicWordDB_PicDone = userprogress.PicWordDB_PicDone;
    this.MathRiddles_idMathRiddle = userprogress.MathRiddles_idMathRiddle;
    this.MathRiddle_Done = userprogress.MathRiddle_Done;
    this.Quiz_idQuiz = userprogress.Quiz_idQuiz;
    this.Quiz_QuizDone = userprogress.Quiz_QuizDone;
    this.UserCoins = userprogress.UserCoins;
    this.UserLevel = userprogress.UserLevel;
}

Userprogress.create = (newUserprogress, result) => {
    sql.query("INSERT INTO userprogress SET ?", newUserprogress, (err, res) => {
        if(err){
            console.log("error: " + err);
            result(err, null);
            return;
        }
        // console.log("Created Userprogress: ", {id: res.Userbase_IdUser, ...newUserprogress});
        result(null, {id: res.Userbase_IdUser, ...newUserprogress});
    });
};

Userprogress.findById = (Userbase_IdUser, result) => {
    sql.query(`SELECT * FROM userprogress WHERE Userbase_IdUser = ${Userbase_IdUser}`, (err, res) => {
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

Userprogress.updateById = (id, userprogress, result) => {
    sql.query(
        "UPDATE userprogress SET PicWordDB_PicWordID = ?, PicWordDB_PicDone = ?, MathRiddles_idMathRiddle = ?, MathRiddle_Done = ?, Quiz_idQuiz = ?, Quiz_QuizDone = ?, UserCoins = ?, UserLevel = ? WHERE Userbase_IdUser = ?",
        [ userprogress.PicWordDB_PicWordID, userprogress.PicWordDB_PicDone, userprogress.MathRiddles_idMathRiddle, userprogress.MathRiddle_Done, userprogress.Quiz_idQuiz, userprogress.Quiz_QuizDone, userprogress.UserCoins, userprogress.UserLevel, id],
        (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // not found userprogress with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("updated userProgress: ", { id: id, ...userprogress });
        result(null, { id: id, ...userprogress });
        }
    );
};

Userprogress.remove = (id, result) => {
    sql.query("DELETE FROM userprogress WHERE Userbase_IdUser = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found userprogress with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted userprogress with id: ", id);
      result(null, res);
    });
};

module.exports = Userprogress;