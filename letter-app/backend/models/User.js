const db = require("../config/db.js");

const createUserTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        googleId VARCHAR(255) UNIQUE NOT NULL,
        name VARCHAR(255),
        email VARCHAR(255) UNIQUE NOT NULL
    )`;
  db.query(sql, (err) => {
    if (err) console.error("Error creating table:", err);
    else console.log("Users table created successfully!");
  });
};
module.exports = { createUserTable };
