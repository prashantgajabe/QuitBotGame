const sql = require('./db.js');

const Picworddb = function(picworddb) {
    this.PicOneID = picworddb.PicOneID;
    this.PicThreeID = picworddb.PicThreeID;
    this.PicTwoID = picworddb.PicTwoID;
    this.PicFourID = picworddb.PicFourID;
    this.PicOneCopyright = picworddb.PicOneCopyright;
    this.PicTwoCopyright = picworddb.PicTwoCopyright;
    this.PicThreeCopyright = picworddb.PicThreeCopyright;
    this.PicFourCopyright = picworddb.PicFourCopyright;
    this.PicAnswer = picworddb.PicAnswer;
};

Picworddb.create = (newPicworddb, result) => {
    sql.query("INSERT INTO Picworddb SET ?", newPicworddb, (err, res) => {
        if(err){
            console.log("error: " + err);
            result(err, null);
            return;
        }

        console.log("Created PicQuiz: ", {id: res.PicWordID, ...newPicworddb});
        result(null, {id: res.PicWordID, ...newPicworddb});
    });
};

Picworddb.findById = (PicWordID, result) => {
    sql.query(`SELECT * FROM Picworddb WHERE PicWordID = ${PicWordID}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found PicQuiz: ", res[0]);
        result(null, res[0]);
        return;
      }
      result({ kind: "not_found" }, null);
    });
};

Picworddb.findNext = (PicWordID, result) => {
    sql.query(`SELECT * FROM Picworddb WHERE PicWordID = (SELECT MIN(PicWordID) FROM Picworddb WHERE PicWordID > ${PicWordID}) LIMIT 1`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found PicQuiz: ", res[0]);
        result(null, res[0]);
        return;
      }
      result({ kind: "not_found" }, null);
    });
};

Picworddb.findPrevious = (PicWordID, result) => {
    sql.query(`SELECT * FROM Picworddb WHERE PicWordID = (SELECT MAX(PicWordID) FROM Picworddb WHERE PicWordID < ${PicWordID}) LIMIT 1`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found PicQuiz: ", res[0]);
        result(null, res[0]);
        return;
      }
      result({ kind: "not_found" }, null);
    });
};

Picworddb.getAll = result => {
    sql.query("SELECT * FROM Picworddb", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("PicQuiz: ", res);
      result(null, res);
    });
};

Picworddb.updateById = (id, picworddb, result) => {
    sql.query(
        "UPDATE picworddb SET PicOneID = ?, PicTwoID = ?, PicThreeID = ?, PicFourID = ?, PicOneCopyright = ?, PicTwoCopyright = ?, PicThreeCopyright = ?, PicFourCopyright = ?, PicAnswer = ? WHERE PicWordID = ?",
        [picworddb.PicOneID, picworddb.PicTwoID, picworddb.PicThreeID, picworddb.PicFourID, picworddb.PicOneCopyright, picworddb.PicTwoCopyright, picworddb.PicThreeCopyright, picworddb.PicFourCopyright, picworddb.PicAnswer, id],
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

        console.log("updated picworddb: ", { id: id, ...picworddb });
        result(null, { id: id, ...picworddb });
        }
    );
};

Picworddb.remove = (id, result) => {
    sql.query("DELETE FROM picworddb WHERE PicWordID = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted picworddb with id: ", id);
      result(null, res);
    });
};

module.exports = Picworddb;