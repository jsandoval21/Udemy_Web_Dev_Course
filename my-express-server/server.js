// jshint esversion:6

const express = require("express");
const app = express();
const port = 3000;

app.get("/", function(req, res){
  res.send('<h1>Hello World</h1>');
});

app.get("/home", function(req, res){
  res.send('this is the home page');
});

app.get("/about", function(req, res){
  res.send('I like beer and stuff');
});

app.get("/hobbies", function(req, res){
  res.send('Soccer, beer, zelda');
});


app.listen(port, function(){
  console.log("server started on port: " + port);
});
