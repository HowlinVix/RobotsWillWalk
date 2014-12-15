var Game = function () {
    this.abutton = document.getElementById("abutton");
    this.drawCircleButton = document.getElementById("drawcircle");
    this.animateCircleButton = document.getElementById("abutton");

    this.instructionsDiv = document.getElementsByClassName("instructions");
    this.canvas = document.getElementById('canvas');
    this.context = canvas.getContext('2d');
    this.circleRadians = (2 * Math.PI);

    this.initialize();
}; // end Game()

Game.prototype.constructor = Game;

Game.prototype.initialize = function () {
    this.GameView = new GameView();
};