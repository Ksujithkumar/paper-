const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

  engine = Engine.create();
	world = engine.world;
	dustbinObj=new Dustbin(1300,660);
	paperObject=new Paper(200,450,60);
	groundObject=new Ground(width/2,670,width,20);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(155);
 
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {
    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

  	}
}
