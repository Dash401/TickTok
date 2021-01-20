function setup() {
  createCanvas(400,400);
 // createSprite(400, 200, 50, 50);
 angleMode(DEGREES);
}

function draw() {
  background("black"); 
  translate(200,200);
  rotate(-90);
  
 var hr =  hour();
 var mn= minute();
 var sc= second();

  strokeWeight(8);
 stroke("#9b59b6");
 noFill();
 var secondA = map(sc,0,60,0,360);
 arc(0,0,300,300,0,secondA);

 stroke("#1abc9c");
 var minuteA = map(mn,0,60,0,360);
 arc(0,0,280,280,0,minuteA);

 stroke("#e74c3c");
 var hourA = map(hr%12,0,12,0,360);
 arc(0,0,260,260,0,hourA);

 
  
  drawSprites();
}




