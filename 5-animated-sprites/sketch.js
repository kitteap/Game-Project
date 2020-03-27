// Creating animations
//
// animations like p5 images should be stored in variables
// in order to be displayed during the draw cycle
var ghost;
//
// //it's advisable (but not necessary) to load the images in the preload function
// //of your sketch otherwise they may appear with a little delay
function preload() {
//
//   //create an animation from a sequence of numbered images
//   //pass the first and the last file name and it will try to find the ones in between
  ghost = loadAnimation('sprites/thing01.png', 'sprites/thing20.png');

}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255, 255, 255);

  //specify the animation instance and its x,y position
  //animation() will update the animation frame as well
  animation(ghost, 300, 300);

}




//trying to figure out how to move it below
this.x = x;
this.y = y;
this.speed = speed;


if (keyIsDown(UP_ARROW)) { //if you hold the up arrow, move up by speed
   this.y -= this.speed;
}

if (keyIsDown(DOWN_ARROW)) { // if you hold the down arrow, move down by speed
    this.y += this.speed;
}

if (keyIsDown(LEFT_ARROW)) { // if you hold the left arrow, move down by speed
    this.x -= this.speed;
}

if (keyIsDown(RIGHT_ARROW)) { // if you hold the left arrow, move down by speed
    this.x += this.speed;
}
