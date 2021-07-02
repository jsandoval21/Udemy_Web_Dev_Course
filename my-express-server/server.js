// jshint esversion:6

const express = require("express");
const app = express();
const port = 3000;

app.get("/", function(request, response){
  response.sendFile('D:\Udemy\Full Stack Web Dev\Web Development\Simon Game Challenge Starting Files\index.html');
});

app.listen(port, function(){
  console.log("server started on port: " + port);
});
