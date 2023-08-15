var bk;

function preload(){
bkImg=loadImage("bk.jpg");
r1Img=loadImage("r1.png");
r2Img=loadImage("r2.png");
ballImg=loadImage("ball.png");
}


function setup(){
createCanvas(1200,600); // width height

racket1=createSprite(130,300,10,10);
racket1.addImage(r1Img);
racket1.scale=0.5; // left or right button

racket2=createSprite(1000,280,10,10);
racket2.addImage(r2Img);
racket2.scale=0.3; // up or down button // create ball

ball=createSprite(600,300,20,20)
ball.addImage(ballImg)
ball.scale =0.1 

racket1.setCollider("circle",0,-60,100)
racket1.debug=true
}

function draw(){
background(bkImg);
if(keyDown("space")){
    ball.velocityX=5
    ball.velocityX=-5
}

if(keyDown("left")){
racket1.x=racket1.x-5
}
if(keyDown("right")){
    racket1.y=racket1.y-5
    }
drawSprites()
}