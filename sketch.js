var garden,rabbit;
var gardenImg,rabbitImg;
var apple , appleImg;
var leaf , leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  CreateApple();
  Createleaf();
  rabbit.x = mouseX;
}


function CreateApple() {
  if(frameCount%80 === 0) {
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage('apple', appleImg);
  apple.scale = 0.090;
  apple.velocityY = 5;
  }
  
}


function Createleaf() {
  if(frameCount%80 === 0) {
  leaf = createSprite(random(100,200),50,20,20);
  leaf.velocityY = 4;
  leaf.addImage("leaf",leafImg);
  leaf.scale = 0.090;
  }
}

