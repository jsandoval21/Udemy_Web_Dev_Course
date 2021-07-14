// jshint esversion:6

const express = require("express");
const https = require("https");
const app = express();
const port = 3000;

app.get("/", function(req, res){

  const url = "https://api.openweathermap.org/data/2.5/weather?q=chico,ca,usa&appid=8035b3d6e733ac5b16d74e4c8a8a8fda&units=imperial";
  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;

      const weatherDesc = weatherData.weather[0].description;

      console.log(temp);
      console.log(weatherDesc);
    });
  });

  res.send("Server is up and running");
});

app.listen(port, function() {
  console.log("Server is running on port 3000.");
});
