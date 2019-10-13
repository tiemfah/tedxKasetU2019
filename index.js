var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/speaker", (req, res) => {
  res.render("pages/");
});

app.get("/partner", (req, res) => {
  res.render("pages/");
});

app.get("/participate", (req, res) => {
  res.render("pages/participate");
});

app.get("/watch", (req, res) => {
  res.render("pages/watch");
});

app.get("/contact", (req, res) => {
  res.render("pages/contact");
});

app.get("/ticket", (req, res) => {
  res.render("pages/");
});

app.listen(8100);
