const sql = require('./db.js');
const QuizHasCategories = function(quizhascategories){
    this.Quiz_idQuiz = quizhascategories.Quiz_idQuiz;
    this.Categories_idCategory = quizhascategories.Categories_idCategory;
}

QuizHasCategories.create = (newQuizCat, result) => {
    sql.query("INSERT INTO quiz_has_categories SET ?", newQuizCat, (err, res) => {
        if(err){
            console.log("error: " + err);
            result(err, null);
            return;
        }

        console.log("Created QuizHasCategories: ", {id: res.Quiz_idQuiz, ...newQuizCat});
        result(null, {id: res.Quiz_idQuiz, ...newQuizCat});
    });
};

Quiz.findByCategoryId = (IdCat, result) => {
    sql.query(`SELECT * FROM quiz_has_categories WHERE Categories_idCategory = ${IdCat}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found quizzes: ", res[0]);
        result(null, res[0]);
        return;
      }
      result({ kind: "not_found" }, null);
    });
};

Quiz.getAll = result => {
    sql.query("SELECT * FROM quiz_has_categories", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("quizzes: ", res);
      result(null, res);
    });
};

Quiz.updateByQuizId = (id, quiz, result) => {
    sql.query(
        "UPDATE quiz_has_categories SET Quiz_idQuiz = ?, Categories_idCategory = ? WHERE Quiz_idQuiz = ?",
        [quizhascategories.Quiz_idQuiz, quizhascategories.Categories_idCategory, id],
        (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            // quiz not found with the id
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("updated quiz_has_categories: ", { id: id, ...quiz });
        result(null, { id: id, ...quiz });
        }
    );
};

// Quiz.remove = (id, result) => {
//     sql.query("DELETE FROM quiz WHERE IdQuiz = ?", id, (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(null, err);
//         return;
//       }
  
//       if (res.affectedRows == 0) {
//         // quiz not found with the id
//         result({ kind: "not_found" }, null);
//         return;
//       }
  
//       console.log("deleted quiz with id: ", id);
//       result(null, res);
//     });
// };

module.exports = QuizHasCategories;