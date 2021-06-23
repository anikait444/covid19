var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var virus,virusgroup,mask,maskgroup;
var virus1_img, virus2_img, virus3_img, virus4_img;
var player_img;
var gameover,gameover_img;
var winner='';
function preload(){
  back_img = loadImage("room.jpg");
  player1_img = loadImage("warrior2.png");
  player2_img = loadImage("warrior3.png");
  virus1_img = loadImage("enemy1.png");
  virus2_img = loadImage("enemy2.png");
  virus3_img = loadImage("enemy3.png");
  virus4_img = loadImage("enemy4.png");
  mask_img = loadImage("mask.png");
  vaccine1_img = loadImage("vaccine.png");
  vaccine2_img =loadImage("vaccine2.png");
  gameover_img = loadImage("gameover.png");
  virusgroup = new Group();
  maskgroup = new Group();

  

  
}
function setup() {
  createCanvas(1000, 600);
   database = firebase.database();
  game = new Game();
   game.getState()
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    textSize(50);
    text(winner + " Won " , 380,100); 
    gameover = createSprite(500,300,200,200);
    gameover.addImage(gameover_img);
    gameover.scale=0.3;
    player1.visible=false;
    player2.visible=false;
        drawSprites();
       
     //game.end();
   }
}