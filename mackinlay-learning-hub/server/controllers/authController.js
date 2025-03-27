const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const {
      email,
      password,
      role,
      // name = "",
      // enrolled_courses = "",
      // expertise = "",
      // assigned_courses = "",
      // department = "",
    } = req.body;

    if (!email || !password || !role) {
      return res
        .status(400)
        .json({ message: "All required fields must be filled" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert into users table
    const sql = "INSERT INTO users (email, password, role) VALUES (?, ?, ?)";
    db.query(sql, [email, hashedPassword, role], (err, result) => {
      if (err) {
        console.error("Database Error:", err);
        return res.status(500).json({ message: "Error signing up" });
      }

      const userId = result.insertId;

      // Insert based on role
      if (role === "student") {
        if (!enrolled_courses) enrolled_courses = ""; // Default value
        db.query(
          "INSERT INTO students (user_id, name, enrolled_courses) VALUES (?, ?, ?)",
          [userId, name || email.split("@")[0], enrolled_courses],
          (err) => {
            if (err) console.error("Error inserting student:", err);
          }
        );
      } else if (role === "trainer") {
        if (!expertise)
          return res
            .status(400)
            .json({ message: "Expertise is required for trainers" });
        db.query(
          "INSERT INTO trainers (user_id, name, expertise, assigned_courses) VALUES (?, ?, ?, ?)",
          [userId, name || email.split("@")[0], expertise, assigned_courses],
          (err) => {
            if (err) console.error("Error inserting trainer:", err);
          }
        );
      } else if (role === "admin") {
        if (!department)
          return res
            .status(400)
            .json({ message: "Department is required for admins" });
        db.query(
          "INSERT INTO admins (user_id, name, department) VALUES (?, ?, ?)",
          [userId, name || email.split("@")[0], department],
          (err) => {
            if (err) console.error("Error inserting admin:", err);
          }
        );
      }

      res.status(201).json({ message: "User registered successfully" });
    });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    db.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      async (err, results) => {
        if (err) {
          console.error("Database Error:", err);
          return res.status(500).json({ message: "Internal Server Error" });
        }

        if (results.length === 0) {
          return res.status(401).json({ message: "Invalid credentials" });
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
          return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
          { id: user.id, role: user.role },
          process.env.JWT_SECRET || "fallback_secret",
          {
            expiresIn: "1h",
          }
        );

        res.json({ message: "Sign-in successful", token, role: user.role });
      }
    );
  } catch (error) {
    console.error("Signin Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
