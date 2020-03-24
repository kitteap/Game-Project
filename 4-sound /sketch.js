
//create an empty array called balls
let balls = [];

//create a variable to hold your avatar
let me;
let mySound;

function preload() {
  soundFormats('mp3', 'ogg');
  mySound = loadSound('squelchysplat.mp3');
}

function setup() {
  createCanvas(500, 400);
  angleMode(DEGREES);

  //make one avatar called me
  me = new Avatar(width/2, 300, 3);

}

function draw(){
if (frameCount % 10 == 0){
  background(random(0,255),random(0,255),random(0,255));
}
  


  me.drawMe();
  me.moveMe();

  if (frameCount % 25 == 0) {
      let  b = new Ball(width, random(0,height), -3);
      balls.push(b);
      console.log(balls); //print the balls array to the console
    }

//	draw all the balls in that array
	for (let i = 0; i < balls.length; i++) {
	 	      balls[i].drawBall();
       	  balls[i].moveBall();
        	balls[i].bounceBall();
	  }

}

//avatar class
class Avatar {

	constructor(x,y, speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed = speed;
	}

	drawMe(){  // draw the running person
    		stroke(0,0,0);
        strokeWeight(3);
    		fill(255,255,255);
		    ellipse(this.x, this.y, 25, 25); //head
        ellipse(this.x+5, this.y+3, 15,13); //mouth
        ellipse(this.x-5, this.y-3, 3, 3); //eye
        line(this.x,this.y+12, this.x, this.y+40); //torso
        line(this.x, this.y+40, this.x-20, this.y+60); //left leg
        ellipse(this.x-15, this.y+60, 10, 5); //left shoe
        line(this.x, this.y+40, this.x+10, this.y+50); //right leg
        line(this.x+10, this.y+50, this.x+5, this.y+60); //right leg
        ellipse(this.x+10, this.y+60, 10, 5); //right shoe
        line(this.x, this.y+15, this.x-10, this.y+25); //top arm
        line(this.x-10, this.y+25, this.x+10, this.y+35); //bottom arm
        fill(51,204,255);
        triangle(this.x-10,this.y-8,this.x+8,this.y-11,this.x-5,this.y-32);
        noFill();
        ellipse(this.x-6,this.y-35,5,5);

	}

	moveMe(){
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
	}

  die(){

  }

}


//ball class from which to create new balls with similar properties.
class Ball {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    this.y = y;
    this.speed = speed;
	}

	// draw a ball on the screen at x,y
	drawBall(){
    	stroke(0,55,185);
      strokeWeight(2);
    	fill(128, 170, 255);
      arc(this.x, this.y, 30, 50, 180, 0);
      strokeWeight(3);
      bezier(this.x-10,this.y+5,this.x-20,this.y+15,this.x-5,this.y+25,this.x-10,this.y+35);
      bezier(this.x,this.y+5,this.x-10,this.y+15,this.x+5,this.y+25,this.x,this.y+35);
      bezier(this.x+10,this.y+5,this.x,this.y+15,this.x+15,this.y+25,this.x+10,this.y+35);

      stroke(0,204,102);
      strokeWeight(1.5);
      bezier(this.x-5,this.y+2,this.x-15,this.y+12,this.x,this.y+22,this.x-5,this.y+32);
      bezier(this.x+5,this.y+2,this.x-5,this.y+12,this.x+10,this.y+22,this.x+5,this.y+32);

	}

	//update the location of the ball, so it moves across the screen
	moveBall(){
		this.x = this.x+ this.speed;
		this.y = this.y+.5;
	}

	//if the ball hits the person, change the speed value to negative (send it in the opposite direction)
  bounceBall(){
      if (this.x >= me.x-15 && this.x <= me.x+15 && this.y > me.y-40 && this.y < me.y+40){
          this.speed = -this.speed;
          mySound.setVolume(0.1);
          mySound.play();
    		}
  	}

}
