import db from "../config/db.js";

export const createLetterTable = () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS letters (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content TEXT NOT NULL
    )`;
  db.query(sql, (err) => {
    if (err) console.error("Error creating table:", err);
    else console.log("Letters table created successfully!");
  });
};
