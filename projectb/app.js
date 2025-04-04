var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

const admin = require("./routes/admin");
const bankForm = require("./routes/bankForm");
const message = require("./routes/bankForm");

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/projectdb", {
    //useNewUrlParser: true,
    //useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// In routes/admin.js
app.get("/login", (req, res) => {
  res.render("login"); // Make sure login.ejs exists in the views folder
});

// In routes/admin.js
app.get("/bankForm", (req, res) => {
  res.render("bankForm"); // Make sure login.ejs exists in the views folder
});

app.post("/login", admin);
app.post("/bankForm", bankForm);
app.get("/message", message);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
