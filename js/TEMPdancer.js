// TO TEST:
// 1. Instantiate image in different containers:
  // a. span
  // b. div
  // c. svg
  // d. just img
// 2. Test speed of each...




// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
//  this.$node = $('<div class="dancer"></div>');
//  this.$node = $('<svg class="dancer"></svg>');
//  this.$node = $('<img class="dancer"></img>');

  this.step(); // invokes step() functions
  this.setPosition(top, left); // invokes setPosition() function
};


Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var context = this;
  setTimeout(function() {context.step();}, context.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function() {
  var dancerPos = 0;
  this.$node.css({left: dancerPos});
  return dancerPos;
}; // end lineUp
