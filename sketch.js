var gardenImage;
function preload() {
    //load the images here
gardenImage = loadImage ("images/garden.png");



}

function setup(){
    createCanvas(600,600);
    //create tom and jerry sprites here
garden = createSprite (300,300,800,800);
garden. addImage(gardenImage);



}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}

