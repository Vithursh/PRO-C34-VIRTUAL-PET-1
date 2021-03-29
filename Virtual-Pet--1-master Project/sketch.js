var dog, happyDog, database, foodS, foodStock;

function preload(){

dog = loadImage("Dog.png");
happyDog = loadImage("happyDog.png")


	//load images here
}

function setup() {
	createCanvas(500, 500);
database = firebase.database();
Dog = createSprite(250, 250, 10, 10);
Dog.addImage(dog);
Dog.scale = 0.5;
foodStock=database.ref('Food');
foodStock.on("value",readStock);

}


function draw() { 
  background(46, 139, 87); 

  drawSprites();
  //add styles here
  textSize(20);
  stroke("Blue");
  text("Note: Press UP_ARROW key To Feed Drago Milk! ", 30,20)

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    Dog.addImage(happyDog);
  }

}


function readStock(data){
  foodS=data.val();
}


function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}






