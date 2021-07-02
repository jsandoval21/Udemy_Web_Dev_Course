//jshint esversion:6

const sh = require("superheroes");
const sv = require("supervillains");

var mySuperHeroName = sh.random();
console.log("The hero is: " + mySuperHeroName);

var mySuperVillain = sv.random();
console.log("The villain is: " + mySuperVillain);
