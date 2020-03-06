//create a variable to hold one ball
let b;
let anotherBall;
let ball3;
let rock1;
let rock2;
let rock3;

function setup() {
  createCanvas(800, 500);
  b = new Ball(0, 100,"red"); //make a new ball from the Ball class and call it b.
  anotherBall = new Ball(200,20,"green");
  ball3 = new Ball(400,100, "purple");
  rock1 = new Rock(500,50, "black");
  rock2 = new Rock(400,50, "black");
  rock3 = new Rock(300,50, "black");

}


function draw(){
	background(220);
    b.drawBall(); //draw the ball called b (go look in the Ball class for the drawBall function)
    b.moveBall(); //move the ball called b (go look in the Ball class for the moveBall function)
    anotherBall.drawBall();
    anotherBall.moveBall();
    ball3.drawBall();
    ball3.moveBall();
    rock1.drawRock();
    rock1.moveRock();
    rock2.drawRock();
    rock2.moveRock();
    rock3.drawRock();
    rock3.moveRock();


}


//ball class from which to create new balls with similar properties.
class Ball {

	constructor(x,y,color){ //every ball needs an x value and a y value
		    this.x = x;
    		this.y = y;
        this.color= color;
        this.stroke= stroke;
	}
	drawBall(){  // draw a ball on the screen at x,y
    		stroke(4);
    		fill(this.color);
		    ellipse(this.x,this.y,10,10);
	}
	moveBall(){ //update the location of the ball, so it moves across the screen
		this.x = this.x+random(0,10);
		this.y = this.y+random(0,20);
	}
}
class Rock {

  constructor(x,y, color){
    this.x = x;
    this.y = y;
    this.color = color;
    this.stroke = stroke;
  }
  drawRock(){
    stroke(9);
    fill(this.color);
    rect(this.x,this.y,50,50);
  }
  moveRock(){
    this.x = this.x + 2;
    this.y = this.y + 9;
  }
}
