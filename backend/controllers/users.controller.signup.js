const mysql = require("mysql");
const bcrypt = require("bcrypt");
const dbConfig = require("../config/db.config");

const db = mysql.createConnection(dbConfig);

exports.signUp = (req, res) => {
  const { firstName, lastName, email, password, phone, birthDate, userType } =
    req.body;

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).send({ message: "Error hashing password." });
    }

    const query =
      "INSERT INTO users (first_name, last_name, email, password, phone, birth_date, user_type) VALUES ?";
    const values = [
      [firstName, lastName, email, hashedPassword, phone, birthDate, userType],
    ];

    db.query(query, [values], (error, results) => {
      if (error) {
        return res.status(500).send({ message: "Error registering user." });
      }

      res.send({ message: "User registered successfully." });
    });
  });
};
