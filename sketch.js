
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	ground =new Ground(500,390,1000,10)
	right =new Ground(600,370,10,120)
	left =new Ground(750,370,10,120)


	//Create the Bodies Here.


	Engine.run(engine);
	
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
				
	};
	//Bodies.circle = function(x, y, radius, options, maxSides) {
        //options = options || {};

	ball = Bodies.circle(200,50,10,ball_options)

	World.add(world,ball)

	ellipseMode(RADIUS)
	rectMode(CENTER)
}


function draw() {
  rectMode(CENTER);
  background(200);

  ground.show()
  right.show()
  left.show()

  ellipse(ball.position.x,ball.position.y,10,10)


  drawSprites();
 
}
function hforce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.5,y:0})
  }
  
  function vforce(){
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-1})
  }

function keyPressed(){
	if (keyCode === UP_ARROW){
		vforce()
	}
	if (keyCode === RIGHT_ARROW){
		hforce()
	}
}

