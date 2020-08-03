const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
var engine,world
var umbrella1; 
var drop = [];
var maxdrops = 100;
var thunderImg,thunder1;
var rand;
function preload(){
    thunderImg = loadImage("thunder.png")
}

function setup(){
 canvas = createCanvas(500,700)
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
     thunder1=createSprite(300,100,20,40)
    thunder1.addImage("thunder",thunderImg)
    umbrella1 = new umbrella(225,400);
    for(var i = 0; i<maxdrops;i++){
        drop.push(new drops(random(0, 400), random(0, 400) ));
    }

}

function draw(){
   Engine.update(engine); 
   background(0)
   umbrella1.display();
   
   for(var i=0; i<maxdrops;i++){
       drop[i].display();
       drop[i].update();
   }
   /*rand= Math.round(random(1,2))
   switch(rand){
      case 1: thunder1.display()
       break;
       case 2: thunder1.remove()
       default:
       break;
   }*/
   if(frameCount%100 ===0){
      thunder1.display();
   }
}   


