const sql = require('./db.js');

const Picwordlist = function(picwordlist) {
    this.PicID = picwordlist.PicID;
    this.PicLink = picwordlist.PicLink;
};

Picwordlist.create = (newPicwordlist, result) => {
    sql.query("INSERT INTO picwordlist SET ?", newPicwordlist, (err, res) => {
        if(err){
            console.log("error: " + err);
            result(err, null);
            return;
        }

        console.log("Created picwordlist: ", {id: res.PicID, ...newPicwordlist});
        result(null, {id: res.PicID, ...newPicwordlist});
    });
};

Picwordlist.findById = (PicID, result) => {
    sql.query(`SELECT * FROM picwordlist WHERE PicID LIKE '${PicID}\\\\_%'`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found Pics: ", res);
        result(null, res);
        return;
      }
      result({ kind: "not_found" }, null);
    });
};

Picwordlist.getAll = result => {
    sql.query("SELECT * FROM Picwordlist", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Pics: ", res);
      result(null, res);
    });
};

Picwordlist.updateById = (id, picwordlist, result) => {
    sql.query(
        "UPDATE picwordlist SET PicID = ?, PicLink = ? WHERE PicID = ?",
        [picwordlist.PicID, picwordlist.PicLink, id],
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

        console.log("updated pics: ", { id: id, ...picwordlist });
        result(null, { id: id, ...picwordlist });
        }
    );
};

Picwordlist.remove = (id, result) => {
    sql.query("DELETE FROM picwordlist WHERE PicID = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted picwordlist with id: ", id);
      result(null, res);
    });
};

module.exports = Picwordlist;