var dog,sadDog,happyDog;
var FoodObject

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  feed = createButton("feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood = createButton("add food");
  addFood.position(800,95);
  addFood.mousePressed(addFood);

  FoodObject = new Food();



}

function draw() {
  background(46,139,87);
  drawSprites();

  FoodObject.display()


 
}

//function to read food Stock


//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog);


if(FoodObject.getFoodStock()<=0){
  FoodObject.updateFoodStock(FoodObject.getFoodStock()*0);
}else{
  FoodObject.updateFoodStock(FoodObject.getFoodStock()-1);
}
}


//function to add food in stock
function addFood(){
  foodS++;
  database.ref('/').update({
    Food:foods
  })
}
