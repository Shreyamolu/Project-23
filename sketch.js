var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var line1, line2, line3, line1Sprite, line2Sprite, line3Sprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
  rectMode(CENTER);
  
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	line2Sprite=createSprite(width/2,660, 200, 15 );
	line2Sprite.shapeColor=color("red")

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:false});
	World.add(world, packageBody);
	
	//Create a Ground
	line2 = Bodies.rectangle(width/2,660, 200, 15 , {isStatic:true} );
 	World.add(world, line2);

	line1Sprite = createSprite(300, 618, 20, 100);
	line1Sprite.shapeColor = color("red");
	line1 = Bodies.rectangle(300, 618, 20, 100, {isStatic:true} );
	World.add(world, line1);

	line3Sprite = createSprite(500, 618, 20, 100);
	line3Sprite.shapeColor = color("red");
	line3 = Bodies.rectangle(500, 618, 20, 100, {isStatic:true} );
	World.add(world, line3);

	Engine.run(engine);
   
	packageSprite.x = packageBody.position.x;
	packageSprite.y = packageBody.position.y;

}


function draw() {

  rectMode(CENTER);
  background(0);

  // packageBody.position.y = 640;
  // packageBody.position.x = 374;

  keyPressed(DOWN_ARROW);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
   Matter.Body.setStatic(packageBody, false);

  }
}






