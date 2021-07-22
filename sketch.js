var bgImg, issImg, scImg, scImg2, scImg3, scImg4;
var iss, spacecraft;
var hasDocked = false;

function preload() {
  bgImg = loadImage("images/spacebg.jpg");
  scImg = loadImage("images/spacecraft1.png");
  scImg2 = loadImage("images/spacecraft2.png");
  scImg3 = loadImage("images/spacecraft3.png");
  scImg4 = loadImage("images/spacecraft4.png");
  issImg = loadImage("images/iss.png");
}

function setup() {
  createCanvas(1300,700);
  iss = createSprite(700,300,50,50);
  iss.addImage(issImg);
  //iss.scale = 1;

  spacecraft = createSprite(600,500,50,50);
  spacecraft.addImage(scImg);
  spacecraft.scale = 0.25;

  hasDocked
}

function draw() {
  background(bgImg);
  
  if(!hasDocked) {

    if(keyDown(UP_ARROW)) {
        spacecraft.y = spacecraft.y-1;
        spacecraft.addImage(scImg2);      
    }
    
    if(keyDown(DOWN_ARROW)) {
        spacecraft.y = spacecraft.y+1;
        spacecraft.addImage(scImg);
    }

    if(keyDown(RIGHT_ARROW)) {
        spacecraft.x = spacecraft.x+1;
        spacecraft.addImage(scImg3);
    }

    if(keyDown(LEFT_ARROW)) {
        spacecraft.x = spacecraft.x-1;
        spacecraft.addImage(scImg4);
    }
  }

  drawSprites();
  if(spacecraft.y <=(iss.y+115) && spacecraft.x <=(iss.x-10)) {
    hasDocked = true;
    //fill("white");
    textSize(25);
    fill("white");
    text("Docking Successful!",200,300);
  }
}