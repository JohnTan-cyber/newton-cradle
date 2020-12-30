
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var bob1,rope1;
var bob,rope;

function preload()
{
	
}

function setup() {
	var canvas =createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground= new Ground(width/2,670,width,20);

	bob1 = new Bob(700,329,70,70)

	rope1 = new Rope(bob1.body,ground.body,-bobDiameter*2,0)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 drawSprites();

  ground.display();
 
}



