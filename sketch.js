const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball
// var rigth_side,left_side,bottom_side;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = createSprite(100,697,1400,5);
	ground.shapeColor = "white"
	
	var options = {
		restitution :1.0
	}

	ball = Bodies.circle(100,100,3,options);

	World.add(world,ball)	

	Engine.run(engine);
  
}


function draw() {
	// Engine.update()
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



