var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var happy, happyImage
var a, b;
var backgroundImage
var jet, jetImage
var gift, giftImage, giftBody
var anniversary, aImage
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("plane1.jpg")
	packageIMG=loadImage("gift.jpg")
	happyImage=loadImage("happy.jpg")
	jetImage=loadImage("jet.jpg")
	giftImage=loadImage("gift1.jpg")
	aImage=loadImage("anniversary.jpg")
	backgroundImage=loadImage("family.jpg")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	 
	var package_options = {
		restitution:1.9,
		isStatic:true
	}
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2;
	

	helicopterSprite=createSprite(0, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("red")
a= createSprite(width/2, 100, 1,1)
b= createSprite(500, 300, 1,1)
b.visible=false;
	engine = Engine.create();
	world = engine.world;

	
	packageBody = Bodies.circle(width/2 , 200 , 5 , package_options);
	World.add(world, packageBody); 
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 gift=createSprite(500, 400, 10,10);
	
		 gift.addImage(giftImage)
		 gift.scale=0.5;
		 var gift_options = {
			restitution:2,
			isStatic:true,
		}
		 giftBody = Bodies.circle(500 , 400 , 5 , gift_options);
		 World.add(world, giftBody); 
		
		 gift.visible=false;
	Engine.run(engine);
	jet=createSprite(900, 400, 10,10);
	jet.addImage(jetImage)
	jet.scale=0.6

}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  helicopterSprite.velocityX=10;
  packageSprite.visible=false;
  gift.x= giftBody.position.x 
  gift.y= giftBody.position.y 
  if(helicopterSprite.x===400){
helicopterSprite.velocityX=0;
packageSprite.visible=true;

  }
 a.visible=false;
    if (1< touches.length) {
	Matter.Body.setStatic(packageBody,  false)
   touches=[];
  }
  if(groundSprite.isTouching(packageSprite)){
	  
	  helicopterSprite.visible=false;
  }
  if(packageSprite.isTouching(a)){
packageSprite.destroy();
happy=createSprite(width/2, 100, 1, 1);
happy.addImage(happyImage);
happy.scale=1;


	
jet.velocityX=-20;


	
  }
  if(jet.x===500){
	jet.velocityX=0;
	gift.visible=true;
	
	
	  }
	  if (touches.length>0) {
		Matter.Body.setStatic(giftBody,  false)
		touches=[];
	  }
	 if(gift.isTouching(groundSprite)){
		jet.velocityX=-10
	 }
	 if(gift.isTouching(b)){
		
		gift.destroy();
		anniversary=createSprite(500, 400, 1, 1);
		anniversary.addImage(aImage);
		anniversary.scale=1.5;
		
		groundSprite.destroy();
	}
	if(jet.x===-100){
		background(backgroundImage)
		jet.velocityX=0;
		textSize(20)
		textFont("Georgia")
		fill("orange")
		
		text("From Viraj And Vivek 😊", 300, 600)
		
		happy.destroy();
		anniversary.destroy();
	}
	
  drawSprites();
 
}





