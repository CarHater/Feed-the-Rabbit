var score = 0;
var apple,appleImg;
var leaf,leafImg;
var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg  = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
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
rabbit.setCollider("circle",0,0,500);
}


function draw() {
  background(0);
  
  createApples();
  createLeaves();
  
  rabbit.x=mouseX;
  edges = createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}

function createApples() {
  if (frameCount%160==80){
    apple = createSprite(random(50,350),40,10,10);
    apple.addImage(appleImg);
    apple.scale=0.07;
    apple.velocityY = 10;
    apple.lifetime=40;
  }
  
}

function createLeaves() {
  if (frameCount%160==0){
    leaf = createSprite(random(50,350),40,10,10);
    leaf.addImage(leafImg);
    leaf.scale=0.07;
    leaf.velocityY = 10;
    leaf.lifetime=40;
  }
  
}