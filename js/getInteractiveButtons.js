var getInteractiveButtons = function () {
    this.abutton = document.getElementById("abutton");
    this.drawCircleButton = document.getElementById("drawcircle");
    this.animateCircleButton = document.getElementById("abutton");

    this.instructionsDiv = document.getElementsByClassName("instructions");
    this.canvas = document.getElementById('canvas');
    this.context = canvas.getContext('2d');
    var circleRadians = (2 * Math.PI);

    this.heroRobots = [];
    //this.heroRobotsLength = 0; // USE latestRobot
    this.latestRobot = -1;

    this.testCircle;

    this.buttonWidth = 25;

    // getElementsByClassName returns an array: [<button1>]
    instructionsDiv = instructionsDiv[0];

    this.clickResult = function () {
        //  debugger;
        abutton.style.width = (++buttonWidth) + "%"; // increment & typecast to string
        instructionsDiv.style.border = "solid red 2px";
        console.log("test1");
    }; // end clickResult()

    canvas.onclick = function (e) {
        window.Game.mouseX = e.x;
        window.Game.mouseY = e.y;
        //  console.log(e);
        //  console.log(window.Game);
    }; // end canvas.onclick()

    this.drawCircle = function () {
        context.clearRect(0, 0, canvas.width, canvas.height);

        context.beginPath();
        context.ellipse(circle.x, circle.y, circle.r, circle.r, 0, 0, circleRadians);
        context.stroke();

        if (circle.x > canvas.width) {
            circle.x = 0;
        } else {
            circle.x += 1;
        }

    }; // end drawCircle()

    this.animateCircle = function () {
        setInterval(drawCircle, 30);
    }; // end animateCircle()

    // TODO: BUTTON: CREATE HERO BOT

    // TODO: BUTTON: CREATE ENEMY CIRCLE
}; // end getInteractiveButtons