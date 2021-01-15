var shark,sharkImage;
var food,foodImage;
var diver, diverImage;
var knife, knifeImage;
var backgroundImage;
var background1Image;

function preload(){

    sharkImage = loadImage("shark.gif");
    diverImage = loadImage("diver.gif");
    foodImage = loadImage("food.gif");
    knifeImage = loadImage("knife.png");
    backgroundImage = loadImage("sea.jpg");
  
}

function setup(){

    createCanvas(1500,500);
    
    background = createSprite(750,250);
    background.addImage(backgroundImage);
    background.velocityX = 4;
    
    background1 = createSprite(0,250);
    background1.addImage(backgroundImage);
    background1.velocityX = 4;

    shark = createSprite(900,250,10,10);
    shark.addImage(sharkImage);

    diver = createSprite(1200,200,10,10);
    diver.addImage(diverImage);
    diver.scale = 0.7;

    knife = createSprite(1195,225,10,10);
    knife.addImage(knifeImage);
    knife.scale = 0.1;

}
 
function draw(){

    background.velocityX = 4;

    background1.velocityX = 4;

    if (background.x < 750 ){
       background.x = background.width / 2;
     }

    if (background1.x < 750 ){
       background1.x = background1.width / 2;
     }

    drawSprites();

}

function food(){

    if (frameCount % 100===0){
    
    food = createSprite(200,200,10,10);
    food.addImage(foodImage);
    food.velocityX = 5;
    food.scale = 0.3;

    }
}