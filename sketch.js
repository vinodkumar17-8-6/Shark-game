var shark, sharkImage;

var food, foodImage;

var diver, diver_diving;

var knife, knifeImage;

var backgroundImage, background1Image;

var IVdiver1, IVdiver2;

var foodsGroup;

var artifactsGroup;

var art1Image, art2Image, art3Image, art4Image, art5Image;

var ground, groundImage;

var health, healthImage;

var score = 0;

var gameState = 0;

var HP = 20;

function preload() {

  sharkImage = loadImage("shark.gif");

  diver_diving = loadImage("diver1.png");

  foodImage = loadImage("food.gif");
  food1Image = loadImage("food1.gif");
  food2Image = loadImage("food2.gif");
  food3Image = loadImage("food3.gif");
  food4Image = loadImage("food4.gif");

  knifeImage = loadImage("knife.png");

  groundImage = loadImage("ground.png");

  backgroundImage = loadImage("sea.png");

  art1Image = loadImage("box.png");
  art2Image = loadImage("shell.png");
  art3Image = loadImage("rock1.png");
  art4Image = loadImage("rock2.png");
  art5Image = loadImage("plants.png");

  healthImage = loadImage("health.png");

  heartImage = loadImage("heart.png");

  backgroundImage2 = loadImage("gameover.png");
  backgroundImage3 = loadImage("win.png");

  music = loadSound("music.mp3");
  bgMp3 = loadSound("bg.mp3");
  bite = loadSound("bite.mp3");
  gameover = loadSound("gameover.wav");

}

function setup() {

  createCanvas(1500, 500);

  background = createSprite(750, 250);
  background.addImage(backgroundImage);
  background.scale = 3;
  background.velocityX = 4;

  // health = createSprite(150, 70, 10, 10);
  // health.addImage(healthImage);
  // health.scale = 0.6;

  shark = createSprite(900, 250, 10, 10);
  shark.addImage(sharkImage);

  ground = createSprite(750, 410, 1500, 10);
  ground.addImage(groundImage);
  ground.scale = 0.7;

  foodsGroup = new Group();
  foods1Group = new Group();
  foods2Group = new Group();
  foods3Group = new Group();
  foods4Group = new Group();

  arts1Group = new Group();
  arts2Group = new Group();
  arts3Group = new Group();
  arts4Group = new Group();
  arts5Group = new Group();

  knifesGroup = new Group();
  diversGroup = new Group();

  score = 0;

  HP = 5;

  gameState = 0;

}

function draw() {

  if (gameState === 0) {

    background.velocityX = 5;

    if (background.x >= 800) {
      background.x = background.width / 3;
    }

    if (keyDown(UP_ARROW)) {
      shark.velocityY = -3;
      shark.velocityX = 0;
    }

    if (keyDown(DOWN_ARROW)) {
      shark.velocityY = 3;
      shark.velocityX = 0;
    }

    if (keyDown(RIGHT_ARROW)) {
      shark.velocityX = 3;
      shark.velocityY = 0;
    }

    if (keyDown(LEFT_ARROW)) {
      shark.velocityX = -3;
      shark.velocityY = 0;
    }

    if (keyWentUp(UP_ARROW)) {
      shark.velocityX = 0;
      shark.velocityY = 0;
    }
    if (keyWentUp(DOWN_ARROW)) {
      shark.velocityX = 0;
      shark.velocityY = 0;
    }

    if (keyWentUp(LEFT_ARROW)) {
      shark.velocityX = 0;
      shark.velocityY = 0;
    }

    if (keyWentUp(RIGHT_ARROW)) {
      shark.velocityX = 0;
      shark.velocityY = 0;
    }

    if (foodsGroup.isTouching(shark)) {
      score += 1;
      foodsGroup.destroyEach();
      bite.play();
    }

    if (foods1Group.isTouching(shark)) {
      score += 2;
      foods1Group.destroyEach();
      bite.play();
    }

    if (foods2Group.isTouching(shark)) {
      score += 3;
      foods2Group.destroyEach();
      bite.play();
    }

    if (foods3Group.isTouching(shark)) {
      score += 4;
      foods3Group.destroyEach();
      bite.play();
    }

    if (foods4Group.isTouching(shark)) {
      score += 5;
      foods4Group.destroyEach();
      bite.play();
    }

    if (shark.isTouching(knifesGroup)) {
      knifesGroup.destroyEach();
      diversGroup.destroyEach();
      shark.x = 800, 250;
      HP = HP - 1
    }

    if (shark.y < 0) {
      shark.y = 0;
    }

    if (shark.y > 450) {
      shark.y = 450;
    }

    food();
    food1();
    food2();
    food3();
    food4();

    art1();
    art2();
    art3();
    art4();
    art5();

    spawnDivers();

    if (HP === 0) {
      gameState = 1;
      gameover.play();
    }

    if (score === 100) {
      gameState = 2;
    }

    drawSprites();

  }

  if (gameState === 1) {

    background.destroy();
    ground.destroy();

    background.velocity.x = 0;
    background = createSprite(750, 250);
    background.addImage(backgroundImage2);
    background.scale = 1.5;

    foodsGroup.destroyEach();
    foods1Group.destroyEach();
    foods2Group.destroyEach();
    foods3Group.destroyEach();
    foods4Group.destroyEach();

    arts1Group.destroyEach();
    arts2Group.destroyEach();
    arts3Group.destroyEach();
    arts4Group.destroyEach();
    arts5Group.destroyEach();

    knifesGroup.destroyEach();
    diversGroup.destroyEach();


    drawSprites();


  }

  if (gameState === 2) {

    background.destroy();
    ground.destroy();

    background.velocity.x = 0;
    background = createSprite(750, 250);
    background.addImage(backgroundImage3);
    background.scale = 3;

    foodsGroup.destroyEach();
    foods1Group.destroyEach();
    foods2Group.destroyEach();
    foods3Group.destroyEach();
    foods4Group.destroyEach();

    arts1Group.destroyEach();
    arts2Group.destroyEach();
    arts3Group.destroyEach();
    arts4Group.destroyEach();
    arts5Group.destroyEach();

    knifesGroup.destroyEach();
    diversGroup.destroyEach();

    drawSprites();


  }


  fill(109, 44, 184);
  textSize(30);
  text("SCORE :- " + score, 1000, 50);
  text("_______   ___", 1000, 50);

  fill(109, 44, 184);
  textSize(30);
  text("Life :: " + HP, 150, 50);

}

function spawnDivers() {

  if (frameCount % 350 === 0) {

    var diver = createSprite(1600, 200, 1, 1);
    diver.y = random(200, 300);
    diver.addImage(diver_diving);
    diver.scale = 0.5;
    diver.velocityX = random(-5, -8);
    diver.lifeTime = 150;

    var knife = createSprite(1195, 225, 10, 10);
    knife.x = diver.x - 20;
    knife.y = diver.y + 40;
    knife.addImage(knifeImage);
    knife.scale = 0.15;
    knife.velocityX = diver.velocityX;
    knife.lifeTime = 150;

    knifesGroup.add(knife);
    diversGroup.add(diver);

  }

}

function food() {

  if (frameCount % 200 === 0) {

    var food = createSprite(0, 0, 10, 10);
    food.y = Math.round(random(50, 400));
    food.addImage(foodImage);
    food.velocityX = 5;
    food.scale = 0.3;
    food.lifeTime = 70;

    foodsGroup.add(food);

  }

}

function food1() {

  if (frameCount % 280 === 0) {

    var food1 = createSprite(0, 0, 10, 10);
    food1.y = Math.round(random(50, 400));
    food1.addImage(food1Image);
    food1.velocityX = 3;
    food1.scale = 0.6;
    food1.lifeTime = 80;

    foods1Group.add(food1);

  }

}

function food2() {

  if (frameCount % 350 === 0) {

    var food2 = createSprite(0, 0, 10, 10);
    food2.y = Math.round(random(50, 400));
    food2.addImage(food2Image);
    food2.velocityX = 6;
    food2.scale = 0.6;
    food2.lifeTime = 80;

    foods2Group.add(food2);

  }

}

function food3() {

  if (frameCount % 400 === 0) {

    var food3 = createSprite(0, 0, 10, 10);
    food3.y = Math.round(random(50, 400));
    food3.addImage(food3Image);
    food3.velocityX = 7;
    food3.scale = 0.4;
    food3.lifeTime = 80;

    foods3Group.add(food3);

  }

}

function food4() {

  if (frameCount % 500 === 0) {

    var food4 = createSprite(0, 0, 10, 10);
    food4.y = Math.round(random(50, 400));
    food4.addImage(food4Image);
    food4.velocityX = 6;
    food4.scale = 0.8;
    food4.lifeTime = 80;

    foods4Group.add(food4);

  }

}

function art1() {

  if (frameCount % 120 === 0) {

    var art1 = createSprite(0, 0, 10, 10);
    art1.y = Math.round(random(420, 450));
    art1.addImage(art1Image);
    art1.velocityX = 5;
    art1.scale = 1.5;
    art1.lifeTime = 70;

    arts1Group.add(art1);

  }

}

function art2() {

  if (frameCount % 120 === 0) {

    var art2 = createSprite(0, 0, 10, 10);
    art2.y = Math.round(random(420, 450));
    art2.addImage(art2Image);
    art2.velocityX = 4;
    art2.scale = 0.3;
    art2.lifeTime = 70;

    arts2Group.add(art2);

  }

}

function art3() {

  if (frameCount % 120 === 0) {

    var art3 = createSprite(0, 0, 10, 10);
    art3.y = Math.round(random(420, 450));
    art3.addImage(art3Image);
    art3.velocityX = 7;
    art3.scale = 1;
    art3.lifeTime = 70;

    arts3Group.add(art3);

  }

}

function art4() {

  if (frameCount % 500 === 0) {

    var art4 = createSprite(0, 0, 10, 10);
    art4.y = Math.round(random(420, 450));
    art4.addImage(art4Image);
    art4.velocityX = 2;
    art4.scale = 0.5;
    art4.lifeTime = 70;

    arts4Group.add(art4);

  }

}

function art5() {

  if (frameCount % 120 === 0) {

    var art5 = createSprite(0, 0, 10, 10);
    art5.y = Math.round(random(420, 450));
    art5.addImage(art5Image);
    art5.velocityX = 3;
    art5.scale = 0.6;
    art5.lifeTime = 70;

    arts5Group.add(art5);

  }

}
