
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHight);
	background(red)
	var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density: 1.2
}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Matter.Bodies.circle(200,200,20,ball_options)
	groundObj.display()
	Engine.run(engine);
	
}
//hey, im afraid i couldnt figure it out

function draw() {
  rectMode(CENTER);
  background(0);
  display()
  drawSprites();
  groundObj=new ground(width/2,670,width,20)
  leftSide=new ground(1100,600,20,120)
  rightSide=new ground(1100,600,20,120)
}



