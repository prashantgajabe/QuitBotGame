const sql = require('./db.js');
const Quiz = function(quiz){
    this.QuizQuestion = quiz.QuizQuestion;
    this.QuizQuestionDetail = quiz.QuizQuestionDetail;
    this.QuizOp1 = quiz.QuizOp1;
    this.QuizOp2 = quiz.QuizOp2;
    this.QuizOp3 = quiz.QuizOp3;
    this.QuizOp4 = quiz.QuizOp4;
    this.QuizC_Op = quiz.QuizC_Op;
    this.QuizLevel = quiz.QuizLevel;
};

Quiz.create = (newQuiz, result) => {
    sql.query("INSERT INTO quiz SET ?", newQuiz, (err, res) => {
        if(err){
            console.log("error: " + err);
            result(err, null);
            return;
        }

        console.log("Created Quiz: ", {id: res.IdQuiz, ...newQuiz});
        result(null, {id: res.IdQuiz, ...newQuiz});
    });
};

Quiz.findById = (IdQuiz, result) => {
    sql.query(`SELECT * FROM quiz WHERE IdQuiz = ${IdQuiz}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found quiz: ", res[0]);
        result(null, res[0]);
        return;
      }
      result({ kind: "not_found" }, null);
    });
};

Quiz.getAll = result => {
    sql.query("SELECT * FROM quiz", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("quizzes: ", res);
      result(null, res);
    });
};

Quiz.updateById = (id, quiz, result) => {
    sql.query(
        "UPDATE quiz SET QuizQuestion = ?, QuizQuestionDetail = ?, QuizOp1 = ?, QuizOp2 = ?, QuizOp3 = ?, QuizOp4 = ?, QuizC_Op = ?, QuizLevel = ? WHERE IdQuiz = ?",
        [quiz.QuizQuestion, quiz.QuizQuestionDetail, quiz.QuizOp1, quiz.QuizOp2, quiz.QuizOp3, quiz.QuizOp4, quiz.QuizC_Op, quiz.QuizLevel, id],
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

        console.log("updated quiz: ", { id: id, ...quiz });
        result(null, { id: id, ...quiz });
        }
    );
};

Quiz.remove = (id, result) => {
    sql.query("DELETE FROM quiz WHERE IdQuiz = ?", id, (err, res) => {
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
  
      console.log("deleted quiz with id: ", id);
      result(null, res);
    });
};

module.exports = Quiz;