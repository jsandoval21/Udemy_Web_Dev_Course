// jshint esversion:6

const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require("body-parser");

const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){

  res.sendFile(__dirname + "/index.html")

});

app.listen(port, function() {
  console.log("Server is running on port 3000.");
});

app.post("/", function(req, res){

  const query = req.body.cityName;
  const apiKey = "8035b3d6e733ac5b16d74e4c8a8a8fda";
  const units = "imperial";
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + ",ca,usa&appid=" + apiKey + "&units=" + units;

  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const icon = weatherData.weather[0].icon;
      const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      const weatherDesc = weatherData.weather[0].description;

      console.log(temp);
      console.log(weatherDesc);
      console.log(icon);

      res.write("<h1>Current temperature in " + query + " is: " + temp + " fahrenheit.</h1>");
      res.write("<p>The weather in " + query + " is: " + weatherDesc + "</p>");
      res.write("<img src=" + imageURL + ">");
      res.end();
    });
  });
})
