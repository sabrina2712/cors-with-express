var express = require("express");
var logger = require("morgan");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.set({
    "Access-Control-Allow-Origin": "http://localhost:3003",
  });
  res.json({ message: "Hello" });
});

module.exports = app;
