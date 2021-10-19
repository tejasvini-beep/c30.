const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground;
var leftwall;
var rightwall;
var bridge;
var joinPoint;
var joinlink;
var stones = []

function setup() {
  createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  frameRate(80);
  ground = new Base(width/2, height-10, width, 20 , "yellow")
  leftwall = new Base(200, height/2+50, 400, 100, "grey");
  rightwall = new Base(width-200, height/2+50, 400, 100, "grey")
  joinPoint = new Base(width-200, height/2, 40, 20, "black")
  bridge = new Bridge(20, {x: 100, y: height/2});
  Matter.Composite.add(bridge.body, joinPoint)
  joinlink = new Link(bridge, joinPoint);

  for (var i = 0; i<= 8; i++) {
    var x = random(width / 2 - 200,width / 2+300)
    var y = random(-10, 140) ;
    var stone = new Stone(x, y, 80);
    stones.push(stone)
  }
}

function draw() {
  background(51);
  Engine.update(engine);
 ground.show()
 leftwall.show()
 rightwall.show()
 bridge.show()
 for(var i = 0; i<=8; i++){
 stones[i].show()
 }
}

