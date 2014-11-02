var abutton = document.getElementById("abutton");
var drawCircleButton = document.getElementById("drawcircle");
var animateCircleButton = document.getElementById("abutton");

var instructionsDiv = document.getElementsByClassName("instructions");
var canvas = document.getElementById('canvas');
var canvasW = canvas.width;
var canvasH = canvas.height;
var context = canvas.getContext('2d');
var circleRadians = (2*Math.PI);

var heroRobots = [];
//var heroRobotsLength = 0; // USE latestRobot
var latestRobot = -1;

var testCircle;

var buttonWidth = 25;
  
// getElementsByClassName returns an array: [<button1>]
instructionsDiv = instructionsDiv[0];

var clickResult = function () {
//  debugger;
  abutton.style.width = (++buttonWidth) + "%"; // increment & typecast to string
  instructionsDiv.style.border = "solid red 2px";
  console.log("test1");
}; // end clickResult()

var drawCircle = function() {
  context.clearRect(0, 0, canvasW, canvasH);
  
  context.beginPath();
  context.ellipse(circle.x, circle.y, circle.r, circle.r, 0, 0, circleRadians);
  context.stroke();

  if (circle.x > canvasW) {
    circle.x = 0;
  } else {
    circle.x += 1;
  }
  
}; // end drawCircle()

var animateCircle = function() {
  setInterval(drawCircle, 30);  
}; // end animateCircle()

// TODO: BUTTON: CREATE HERO BOT

// TODO: BUTTON: CREATE ENEMY CIRCLE
