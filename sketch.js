
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball 

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball=Bodies.circle(260,100,10,ball_options)
	fill("yellow")
	World.add(world,ball)
	ground =new Ground(width/2,670,width,20);
  right = new Ground(900,600,20,120);
  left = new Ground(1100,600,20,120);
 
 Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0); 
  drawSprites();

  ground.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20)
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:18,y:-18})
	}

}



