const express = require("express"),
      path = require("path");

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));

app.get("/", function(req,res){
  res.render("landing.ejs");
});

app.get("/register", function(req,res){
  res.render("register.ejs");
});

app.get("/login", function(req,res){
  res.render("login.ejs");
});

app.get("/patients", function(req,res){
  res.render("index.ejs");
});

app.get("*", function(req,res){
  res.redirect("/");
});

app.listen(3000, process.env.IP, function(){
  console.log("Server has started");
});
