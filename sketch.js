var shark,sharkImage;
var food,foodImage;
var diver, diverImage;
var knife, knifeImage;
var backgroundImage;
var background1Image;
var IVdiver;
var foodsGroup;
var artifactsGroup;
var art1Image, art2Image, art3Image, art4Image, art5Image;
var ground;

function preload(){

    sharkImage = loadImage("shark.gif");
    diverImage = loadImage("diver.gif");
    foodImage = loadImage("food.gif");
    knifeImage = loadImage("knife.png");
    backgroundImage = loadImage("sea.png");
    art1Image = loadImage("box.png");
    art2Image = loadImage("shell.png");
    art3Image = loadImage("rock1.png");
    art4Image = loadImage("rock2.png");
    art5Image = loadImage("plants.jpg");
  
}

function setup(){

    createCanvas(1500,500);
    
    background = createSprite(750,250);
    background.addImage(backgroundImage);
    background.scale = 3;
    background.velocityX = 4;
    
    shark = createSprite(900,250,10,10);
    shark.addImage(sharkImage);

    diver = createSprite(1200,200,10,10);
    diver.addImage(diverImage);
    diver.scale = 0.7;

    IVdiver = createSprite(1255,215,50,25);
    IVdiver.visible = false;

    knife = createSprite(1195,225,10,10);
    knife.addImage(knifeImage);
    knife.scale = 0.1;

    ground = createSprite(750,470,1500,50);
    ground.shapeColor = rgb(29, 141, 44);

    foodsGroup = new Group();

    artifactsGroup = new Group();

}
 
function draw(){

    background.velocityX = 5;

    if (background.x >= 800){
       background.x = background.width / 3;
     }
     if (keyDown(UP_ARROW)) {
        shark.velocityY = -3;
        shark.velocityX = 0;
      }
      
      if (keyDown(DOWN_ARROW)){
        shark.velocityY = 3;
        shark.velocityX = 0;
      }
      
      if (keyDown(RIGHT_ARROW)){
        shark.velocityX = 3;
        shark.velocityY = 0;
      }
      
      if (keyDown(LEFT_ARROW)){
        shark.velocityX = -3;
        shark.velocityY = 0;
      }
      
       if (keyWentUp(UP_ARROW)){
        shark.velocityX = 0;
        shark.velocityY = 0;
      }
      if (keyWentUp(DOWN_ARROW)){
        shark.velocityX = 0;
        shark.velocityY = 0;
      }
      
      if (keyWentUp(LEFT_ARROW)){
        shark.velocityX = 0;
        shark.velocityY = 0;
      }
      
      if (keyWentUp(RIGHT_ARROW)){
        shark.velocityX = 0;
        shark.velocityY = 0;
      }
        
     if (shark.isTouching(IVdiver)){
         diver.destroy();
         knife.destroy();
     }

     if (foodsGroup.isTouching(shark)){
         foodsGroup.destroyEach();
     }

    drawSprites();

    food();
    spawnArtifacts();

}

function food(){

    if (frameCount % 120===0){
    
    var food = createSprite(0,0,10,10);
    food.y = Math.round(random(50,400));
    food.addImage(foodImage);
    food.velocityX = 5;
    food.scale = 0.3;
    food.lifeTime = 70;
    
    foodsGroup.add(food);

    }

}


function spawnArtifacts(){

    if (frameCount % 50===0){
    
    var art = createSprite(0,450,2,2);
    art.y = Math.round(random(440,460));
    art.velocityX = 5;
    var num = Math.round(random(1,7));
              switch(num){
                case 1 : art.addImage(art1Image);
                break;
                case 2 : art.addImage(art2Image);
                break;
                case 3 : art.addImage(art3Image);
                break;
                case 4 : art.addImage(art4Image);
                break;
                case 5 : art.addImage(art5Image);
                break;
                default : break;
                
              }
    art.scale = 0.8;;
    art.lifeTime = 70;
    
    artifactsGroup.add(art);

    }

}

