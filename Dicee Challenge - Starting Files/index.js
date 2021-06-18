var dice1 = Math.floor(Math.random() * 6) + 1;
var dice2 = Math.floor(Math.random() * 6) + 1;

//Change dice
document.getElementsByClassName("img1").item(0).setAttribute("src", "images/dice" + dice1 + ".png");
document.getElementsByClassName("img2").item(0).setAttribute("src", "images/dice" + dice2 + ".png");


if(dice1 > dice2){
  document.querySelector("h1").innerHTML="Player 1 Wins!";
} else if (dice1 < dice2){
  document.querySelector("h1").innerHTML="Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML="It's a Tie";
}
