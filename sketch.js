var frect , mrect ;
function setup() {
  createCanvas(800,400);
  frect = createSprite(400, 200, 50, 50);
  mrect = createSprite(400,200,50,50);

}

function draw() {
  background(0);  
  mrect.x=mouseX;
  mrect.y=mouseY;
  if (frect.x-mrect.x<frect.width/2+mrect.width/2
    &&mrect.x-frect.x<mrect.width/2+frect.width/2){
    mrect.shapeColor="red";
    frect.shapeColor="red";
  }else
  {
    mrect.shapeColor="green";
    frect.shapeColor="green";
  }
  drawSprites();
}