var colors = ["green", "red", "yellow", "blue"];
var nextColorID = Math.floor(Math.random() * 4)

var audio = new Audio("sounds/" + colors[nextColorID] + ".mp3")
$("#" + colors[nextColorID]).fadeTo("fast", 0.00)
audio.play();
$("#" + colors[nextColorID]).fadeTo("fast", 1.00)
