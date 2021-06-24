var colors = ["green", "red", "yellow", "blue"];
var nextColorID;
var gamePattern = [];
var userClickedPattern = [];
var userChosenColor;
var level = 0;
var i = 0;


$("body").one("keydown", function(){
  updateH1();
  nextSequence();
  updateGamePattern();
  playSound(colors[nextColorID]);
  animate(colors[nextColorID]);

});


$(".btn").click(function(){
    userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(this.id);
    animate(this.id);
    checkAnswer(level);
});


function nextSequence() {
  nextColorID = Math.floor(Math.random() * 4);
  level++;
  return nextColorID;
}

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animate(currentColour){
  $("#" + currentColour).addClass("pressed");
  setTimeout(function(){
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function updateH1(){
  $("#level-title").html("Level " + level);
}

function checkAnswer(currentLevel){
  console.log(userChosenColor + " " + gamePattern[i]);
  console.log(gamePattern);
  if (userChosenColor === gamePattern[i]){
    console.log("success");

    console.log("i: " + i + "length: " + gamePattern.length);
    if(i === gamePattern.length - 1){
      updateH1();
      nextSequence();
      updateGamePattern();
      setTimeout(function(){
        playSound(colors[nextColorID]);
        animate(colors[nextColorID]);
      }, 1000);
      i = 0;
    } else { i++; }

  } else {
    // TODO: Restart game and do new animations when incorrect button press
    console.log("wrong");
  }
}

function updateGamePattern(){
  gamePattern.push(colors[nextColorID]);
}
