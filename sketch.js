const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var bird
var log1,log2,log3,log4;
function setup(){
    var canvas = createCanvas(1200,525);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,490,50,50);
    box2 = new Box(900,490,50,50);
    pig1 = new Pig(800,490);
    log1 = new Log(800,450,300,PI/2)
    box3 = new Box(700,410,50,50);
    pig2 = new Pig(800,410);
    box4 = new Box(900,410,50,50);
    log2 = new Log(800,380,300,PI/2)
    box5 = new Box(800,330,50,50);
    log3 = new Log(765,330,125,PI/4)
    log4 = new Log(835,330,125,-PI/4)
    ground = new Ground(600,515,1200,20)
    bird = new Bird(100,50);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    bird.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}