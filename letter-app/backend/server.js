require("dotenv").config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session"); // Required for passport session

require("./config/googleAuth"); // Google OAuth setup

const authRoutes = require("./routes/authRoutes");
const letterRoutes = require("./routes/letterRoutes");

const app = express();

// Use session before passport
app.use(
  session({
    secret: process.env.SESSION_SECRET || "mysecret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", // Adjust to your frontend URL
    credentials: true, // Required for authentication
  })
);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/letters", letterRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
