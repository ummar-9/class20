var movingrect, fixedrect;
function setup() {
  createCanvas(1200,800);
  movingrect = createSprite(800, 400, 80, 30);
  fixedrect = createSprite(600, 400, 50, 80);
  movingrect.shapeColor = "green";
  fixedrect.shapeColor = "green";
}

function draw() {
  background(0);  
  movingrect.x = World.mouseX;
   movingrect.y = World.mouseY;
  if(fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
    && movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2
    && fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2
    && movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2){
    movingrect.shapeColor = "red";
    fixedrect.shapeColor = "red";
    }
    else{
      movingrect.shapeColor = "green";
      fixedrect.shapeColor = "green";
    }
  drawSprites();
}