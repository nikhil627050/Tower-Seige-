
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var ground;
var block,block1,block2,block3,block4,block5,block6,block7
var polygon
var dot1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    

	
	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
	ground=new Ground(200,600,200,10)
    ground1=new Ground(700,600,200,10)
	ground2=new Ground(700,300,200,10)
   
	block=new Blocks(700,570,50,50)
	block1=new Blocks(750,550,50,50)
	block2=new Blocks(650,530,50,50)
	block3=new Blocks(725,480,50,50)
	block4=new Blocks(675,430,50,50)
	block5=new Blocks(700,400,50,50)
	block6=new Blocks(700,280,50,50)
	block7=new Blocks(650,280,50,50)
	block8=new Blocks(750,280,50,50)
	block9=new Blocks(725,250,50,50)
	block10=new Blocks(675,250,50,50)
	block11=new Blocks(700,200,50,50)

	polygon=new weapon(200,580,50,50)

//	Dot=new dot(150,580,20,20)

	string=new SlingShot(polygon.body,{x:180,y:200})
   
}


function draw() {
Engine.update(engine)
background("green")
ground.display()
ground1.display()  
ground2.display() 



block.display()
block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()
block7.display()
block8.display()
block9.display()
block10.display()
block11.display()

polygon.display()



strokeWeight(5)
string.display()

}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
	string.fly()
}

function keyPressed(){
	if(keyCode===32){
		string.attach(polygon.body)
	}
}

