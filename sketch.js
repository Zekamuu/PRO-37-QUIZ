var canvas;
var gameState, contestantCount;

var database;
var game;
var form;
var player, players;
var selectedAnswer, option1, option2;
var submitNameButton;
var nameInput;
var display1, display2;

function setup() {
  createCanvas(850, 400);
  database = firebase.database();

  game = new Game();
  
  gameState = 0;
  game.getGameState();
  game.start();
}


function draw() {
  background("yellow");
  
  if(display1 == true){
    text("correct", 300, 300);
  }
  if(display2 == true){
    text("incorrect", 280, 300);
  }
  
  if(contestantCount == 2){
    text("What starts and ends with the letter 'E' but has only one letter", 250, 100);
    game.updateState(1)
    game.play();
  }
  

}
