var database;
var form, player, game;
var Playercount;
var Gamestate = 0;

function setup() {
  createCanvas(displayWidth - 500, displayHeight - 130);

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();

}

function draw() {

  //background(255); 

}