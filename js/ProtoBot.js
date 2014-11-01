/*
ANIMATION:
  FAST Animations:
    1. Position (transform: translate(Npx, Npx);
    2. Scale (transform: scale(N);
    3. Rotation (transform: rotate(Ndeg);
    4. Opacity (opacity: 0...1);
*/

var ProtoBot = function(top, left, timeBetweenSteps){
//  RobotParentClass.call(this, top, left, timeBetweenSteps); // instantiates the parent class
  this.timeBetweenSteps = (this.timeBetweenSteps * 1.5);
  this.image = '<img src="./image/robot1.gif"></img>';
  this.$node.append(this.image);
  this.leftPos = left;
  this.creep = -50;
};

// Instantiate with inheritance
//ProtoBot.prototype = Object.create(RobotParentClass.prototype);

ProtoBot.prototype.constructor = ProtoBot;

ProtoBot.prototype.step = function(){
//  RobotParentClass.prototype.step.call(this); // old version of step function
  RobotParentClass.prototype.step.call(this); // old version of step function
  var creepLeft = (this.leftPos+this.creep);
  this.creep *= -1;
  this.$node.animate({left: creepLeft}, this.timeBetweenSteps);
};

ProtoBot.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left,
    border: '0px'
  };
  this.$node.css(styleSettings);
}; // end setPosition

ProtoBot.prototype.lineUp = function() {
//  this.leftPos = RobotParentClass.prototype.lineUp.call(this); // old version of step function
  this.leftPos = RobotParentClass.prototype.lineUp.call(this); // old version of step function
} // end lineUp()
