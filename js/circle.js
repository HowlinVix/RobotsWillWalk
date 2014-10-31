var circlesvg = document.getElementsByClassName("circlesvg")[0];
var circle1 = document.getElementsByClassName("circle1")[0];

var circle = {
  'x' : 1341, // circle.x
  'y' : 743, // circle.y
  'r' : 25 // Redundant property
};

// THIS CONTENT WILL CHANGE, so it needs to be calculated each time.
// That means it needs to be in a function...
  //circle.right = circle.x + circle.r;
  //circle.left = circle.x + circle.r;

var circle2 = {};
circle2.x = 1366;
circle2.y = 100;
circle2.width = 50;
circle2.height = 50;

//var ellipseX = 125;
//var ellipseY = 125;
