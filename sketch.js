var ball,ground,engine,world,bodies,box1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	var canvas=createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;


   var ground_option={isStatic:true}

	var ball_option={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2,}

	//ball= Bodies .circle (100, 640, 20, 20, ball_option)
	//world.add(world,ball)
	ground=createSprite(450,660,800,20,ground_option)
	//Create the Bodies Here.

	box1=new box(660,630,20,70)
	box2=new box(740,630,20,70)
	box3=new box(700,640,100,20)
	Engine.run(engine);
	
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  //ball.collide(ground)
  //ellipseMode(RADIUS)
  //ellipse(ball.position.x,ball.position.y,20,20)
  
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
  
 
}

function keyPressed(){


}



