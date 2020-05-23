var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground, testvar, box1,world,engine;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Render = Matter.Render;

var testvar=1;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	box1=new Package(400,350,10,10);

	helicopter=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	


	//engine = Engine.create();
	world = engine.world;
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 7 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);  
}


function draw() {
	Engine.update(engine);
  	//rectMode(CENTER);
	  background(0);
	  rectMode(CENTER);
 	// packageSprite.x= packageBody.position.x 
	 // packageSprite.y= packageBody.position.y 
	 rect(ground.position.x,ground.position.y,800,7)
  	console.log("Before drawSprites()");
  	drawSprites();
  	console.log("After drawSprites()");
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	while(testvar>0){
		box1.display()
	}
    
  }
}
