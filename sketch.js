const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground, groundSprite, box1, box2, box3;
var engine, world;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
    world = engine.world;

	packageSprite=createSprite(width/2, 200, 5, 5);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width, 10);
	groundSprite.shapeColor=color(255)

	ground = Bodies.rectangle(width/2, height-50, width, 10, {isStatic:true});
 	World.add(world, ground);
	
	packageBody = Bodies.rectangle(width/2, 200, 10, 10, {isStatic:true});
	World.add(world, packageBody);
	
	box1 = new Box(width/2-55,height-65,10,50);
	World.add(world, box1);

	box2 = new Box(width/2,height-45,100,10);
	World.add(world, box2);

	box3 = new Box(width/2+55,height-65,10,50);
	World.add(world, box3);

	keyPressed();
	
	}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  rect(groundSprite.position.x, groundSprite.position.y, groundSprite.width, groundSprite.height);
  rect(packageBody.position.x, packageBody.position.y, 5, 5);
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
  
 }

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	packageBody = Bodies.rectangle(width/2, 200, 10, 10, {restitution:0.8, isStatic:false});
	World.add(world, packageBody);
  }
}

  