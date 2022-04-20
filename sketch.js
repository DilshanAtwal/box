
function setup() {
  createCanvas(600,600);
  ball=createSprite(200,200,30,30);
}

function draw() 
{
  background("blue");

  if(keyIsDown(RIGHT_ARROW)){
    ball.position.x+=5;
  }
  if(keyIsDown(LEFT_ARROW)){
    ball.position.x-=5;
  }
  if(keyIsDown(DOWN_ARROW)){
    ball.position.x-=5;
  }
  
  

  drawSprites();

}

