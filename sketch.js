var fixedRect, movingRect;
var object1;
var object2;
var object3;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  object1= createSprite(600,100,50,80);
  object2= createSprite(100,100,50,80);
  object3= createSprite(500,200,50,80);

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
if(isTouching(movingRect, object1)){
  movingRect.shapeColor= "yellow";
  object1.shapeColor="green";
}
  else
{
  movingRect.shapeColor= "blue";
  object1.shapeColor="red";

}
if(isTouching(movingRect, object2)){
  movingRect.shapeColor= "green";
  object2.shapeColor="yellow";
}
  else
{
  movingRect.shapeColor= "blue";
  object2.shapeColor="red";

}
if(isTouching(movingRect, object3)){
  movingRect.shapeColor= "purple";
  object3.shapeColor="blue";
}
  else
{
  movingRect.shapeColor= "yellow";
  object3.shapeColor="brown";

}
if(isTouching(movingRect,fixedRect)){
  movingRect.shapeColor= "yellow";
  fixedRect.velocityX= 2;
}
  else
{
  movingRect.shapeColor= "blue";
  fixedRect.shapeColor="red";

}
  drawSprites();
  
}
