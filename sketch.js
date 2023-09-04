var canvas;
var spaceship1, spaceship2,spaceship1Img, spaceship2Img,spaceship=[];
var alien, alienImg;
var life, lifeImg;
var bgImg, database;
var form , game, gameState ; 
var player, playerCount;

function preload(){
    bgImg = loadImage("bg.jpeg")
    spaceship1Img = loadImage("spaceship1.png");
    spaceship2Img = loadImage("spaceship2.png");
    alienImg = loadImage("alien.png");
    lifeImg = loadImage("life.png");
}

function setup(){
	canvas = createCanvas(windowWidth, windowHeight);
	database = firebase.database();

	//create the game object 
	game = new Game();
  game.getGameState();
	game.start();
}


function draw(){
  background(bgImg)
 
  //switch the game state 
  if(playerCount === 2){
    game.gameStateupdate(1) //PLAY STATE
  }

  if(gameState === 1){
    game.play()
  }
  
    
  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}