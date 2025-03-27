const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use("/api", authRoutes);

// ✅ API Test Route
app.get("/api", (req, res) => {
  res.json({ message: "API is running" });
});

// ✅ Default Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ Default Route to Fix "Cannot GET /"
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
