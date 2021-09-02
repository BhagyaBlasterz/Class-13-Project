var garden,rabbit,apple,leaf;
var gardenImg,rabbitImg,appleImg,leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit
rabbit = createSprite(200,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

//
}


function draw() {
  background(0);
  
  fun_apple();
  fun_leaf();

  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  if (rabbit.collide(leaf)){
    apple.x=apple.x=0;
  }
  
  rabbit.x=World.mouseX;
  
  drawSprites();
}

function fun_apple () {
  if(frameCount% 60 === 0){
    apple = createSprite (200,0)
    apple.addImage(appleImg)
    apple.velocityY=2
    apple.scale=0.1
    apple.x=Math.round(random(0,400))
    apple.depth=rabbit.depth
    rabbit.depth=rabbit.depth+1
    apple.depth=garden.depth
    garden.depth=garden.depth-1
  }
}

function fun_leaf () {
  if(frameCount% 100 === 0){
    leaf = createSprite (200,0)
    leaf.addImage(leafImg)
    leaf.velocityY=2
    leaf.scale=0.1
    leaf.x=Math.round(random(0,400))
    leaf.depth=rabbit.depth
    rabbit.depth=rabbit.depth+1
    leaf.depth=garden.depth
    garden.depth=garden.depth-1
  }
}