
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;
   
	//Create the Bodies Here.
	bob1 = new bob(500,200,50);
	bob2 = new bob(550,200,50);
	bob3 = new bob(600,200,50);
	bob4 = new bob(650,200,50);
	bob5 = new bob(700,200,50);
	roof1 = new roof(500,100,20,20);
	roof2 = new roof(550,100,20,20);
	roof3 = new roof(600,100,20,20);
	roof4 = new roof(650,100,20,20);
	roof5 = new roof(700,100,20,20);
    ROAF = new roof(100,100,1200,20)

	bobDiameter = 100
	
	rope1 =  new rope(bob1.body, roof1.body,-bobDiameter*2,0)
    rope2 =  new rope(bob2.body, roof2.body,-bobDiameter*2,0)
    rope3 =  new rope(bob3.body, roof3.body,-bobDiameter*2,0)
    rope4 =  new rope(bob4.body, roof4.body,-bobDiameter*2,0)
    rope5 =  new rope(bob5.body, roof5.body,-bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();
  ROAF.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function KeyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:145,y:-130})
	}
}

