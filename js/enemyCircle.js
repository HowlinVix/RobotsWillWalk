/*********
 * enemyCircle should:
 * 1) march RIGHT TO LEFT
 * 2) BONUS - disappear when it TOUCHES heroBot
 ********/
 var enemyCircle = document.getElementById("enemycircle");


// TODO: march RIGHT TO LEFT
var enemyC = function() {
  context.clearRect(0, 0, canvasW, canvasH);
  context.fillStyle = "red";
  context.beginPath();
  context.ellipse(circle.x, circle.y, circle.r, circle.r, 0, 0, circleRadians);
  context.stroke();
  context.fill();

  if (circle.x < 0) {
    circle.x = 1366;
  } else {
    circle.x -= 1;
  }
  
}; // end drawCircle()

var animateEnemyCircle = function() {
  setInterval(enemyC, 30);
}


// TODO: disappear when it TOUCHES heroBot