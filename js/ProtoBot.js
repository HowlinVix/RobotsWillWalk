/*
ANIMATION:
  FAST Animations:
    1. Position (transform: translate(Npx, Npx);
    2. Scale (transform: scale(N);
    3. Rotation (transform: rotate(Ndeg);
    4. Opacity (opacity: 0...1);
*/

// TO TEST:
// 1. Instantiate image in different containers:
// a. span
// b. div
// c. svg
// d. just img
// 2. Test speed of each...

var ProtoBot = function () {
  //  RobotParentClass.call(this, top, left, timeBetweenSteps); // instantiates the parent class
  this.enemy = false; // Bool to assign to player or AI
  //  this.timeBetweenSteps = (this.timeBetweenSteps * 1.5);
  this.timeBetweenSteps = 16;

  //  debugger;
  this.instanceNode = document.createElement('img');
  this.instanceNode.className = 'robot';
  this.instanceNode.src = './images/robot1.gif';
  this.creep = -50;

  // this might need to be refactored later for edge-detection
  // Enemy will start @ enemy factory, detect right edge
  // Hero will start @ hero factory, detect left edge
  this.xPosition = window.Game.heroFactoryCenterX;
  this.yPosition = window.Game.heroFactoryCenterY;
  console.log(this);

  this.speed = 1;
  this.xOffset = 0;
  this.hp = 50;
  this.attackSpeed = 1;
  this.damage = 10;
  
  this.ID = ProtoBot.generateID();
};

// Instantiate with inheritance
//ProtoBot.prototype = Object.create(RobotParentClass.prototype);

ProtoBot.prototype.constructor = ProtoBot;

//ProtoBot.prototype.step = function () {
//  //  RobotParentClass.prototype.step.call(this); // old version of step function
//  RobotParentClass.prototype.step.call(this); // old version of step function
//  var creepLeft = (this.leftPos + this.creep);
//  this.creep *= -1;
//  this.$node.animate({
//    left: creepLeft
//  }, this.timeBetweenSteps);
//};

ProtoBot.assignImage = function (pictureFilename) {
  //  this.image = document.createElement('img');
  this.image.src = './images/' + pictureFilename;
  //  return '<img src="./images/' + pictureFilename + '">';
};

ProtoBot.ID = 0;

ProtoBot.generateID = function() {
  ProtoBot.ID++
  return ProtoBot.ID;
};
  

ProtoBot.assignNode = function () {
  //  this.node = document.createElement('span');
  this.node.className = 'robot';
  this.node.appendChild(this.image);
//  console.log(this.node);
}; // end createNode()


ProtoBot.prototype.walk = function () {
  var context = this;
  setTimeout(function () {
//    debugger;
//    context.xOffset -= context.speed;
    context.xPosition -= context.speed;
//    context.instanceNode.style.transform='translate(' + this.speed + 'px, 0px)"'
    context.instanceNode.style.transform = 'translate(' + context.xPosition + 'px)';
    context.walk();
  }, context.timeBetweenSteps);
  //  this.instanceNode.style.transform="transpose(50px, 50px)";
};


ProtoBot.prototype.setPosition = function (top, left) {
  var styleSettings = {
    top: window.Game.heroFactoryCenterY,
    left: window.Game.heroFactoryCenterX,
//    top: 100,
//    left: 100,
    border: '0px'
  };
  this.$node.css(styleSettings);
}; // end setPosition