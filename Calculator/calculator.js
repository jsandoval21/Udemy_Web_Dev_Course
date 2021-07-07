// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "\\index.html");
});

app.post("/", function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  result = num1 + num2;
  res.send("the sum is: " + result);
});

app.listen(port, function(){
  console.log("server started on port: " + port);
});
