import db from "../config/db.js";

export const getLetters = (req, res) => {
  db.query("SELECT * FROM letters", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

export const saveLetter = (req, res) => {
  const { title, content } = req.body;
  db.query(
    "INSERT INTO letters (title, content) VALUES (?, ?)",
    [title, content],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Letter saved successfully!" });
    }
  );
};
