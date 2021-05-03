var hr;
var mn;
var sc;


function setup() {
  createCanvas(800,800);
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  translate(400,400)
  rotate(-90)
  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);

  push();
  rotate(scAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,100,0);
  pop()
  stroke(0,0,255)
  strokeWeight(7);
  noFill();
  arc(0, 0, 210, 210, 0, scAngle)

  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,80,0);
  pop()
  stroke(0,255,0)
  strokeWeight(7);
  noFill();
  arc(0, 0, 260, 260, 0, mnAngle)

  push();
  rotate(hrAngle);
  stroke(255,20,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop()
  stroke(255,0,0)
  strokeWeight(7);
  noFill();
  arc(0, 0, 310, 310, 0, hrAngle)

  drawSprites();
}