var player
var enemy
var snitch
var background
function preload(){
  bg = loadImage("bg.jpg");
  Player = loadImage("player.png")
  
}
function setup() {
  createCanvas(1200,800);
   fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "aqua";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "aqua";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  player = createSprite(100,100,20,20) 
  player.addImage("Player",Player)
  player.scale = 0.2
}

function draw() {
  background(bg);  
bounceOff(fixedRect,movingRect);
  
  drawSprites();
}

