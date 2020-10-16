const sql = require('./db.js');

const userbase = userbase => {
    this.Username = userbase.Username;
    this.UserPassword = userbase.UserPassword;
    this.UserEmail = userbase.UserEmail;
    this.UserPhoneNumber = userbase.UserPhoneNumber;
    this.UserAge = userbase.UserAge;
};

userbase.create = (newUser, result) => {
    sql.query("INSERT INTO Userbase SET ?", newUserbase, (err, res) => {
        if(err){
            console.log("error: " err);
            result(err, null);
            return;
        }

        console.log("Created User: ", {id: res.IdUser, ...newUserbase});
        result(null, {id: res.IdUser, ...newUserbase});
    });
};

