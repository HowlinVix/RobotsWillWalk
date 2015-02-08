/*********
 * heroBot should:
 * 1) march LEFT TO RIGHT
 * 2) disappear when it goes off screen
 * 3) BONUS - new hero bot should appear each
 *    time you click a button.
 ********/
 


// TODO: march LEFT TO RIGHT



// TODO: disappear when it goes off screen

var Hero = function() {
    var _this = this;
    
    _this.heroBots = [];
    return _this;
}; // end Hero()

//Hero.prototype.constructor = Hero;

Hero.prototype.buyRobot = function(heroElement) {
    var _this = this;
    
    _this.newRobot = document.createElement('div');
    
    _this.newRobot.appendChild( heroElement.children[0].cloneNode() );
    
    _this.newRobot.className = 'marching-robot-' + heroElement.children[0].dataset.robotype;
    _this.newRobot.id = _this.heroBots.length;
    _this.heroBots.push(_this.newRobot);
    
    
    console.log(_this.heroBots);
    _this.addRobotToStage();
} // end buyRobot()


Hero.prototype.addRobotToStage = function() {
    var _this = this;
    
    var currentBot = _this.heroBots[_this.heroBots.length-1];
    
    window.stage.bodyRef.appendChild(_this.heroBots[_this.heroBots.length-1]);
    
    _this.heroBots[_this.heroBots.length-1].style.position = 'absolute';
    _this.heroBots[_this.heroBots.length-1].style.visibility = 'absolute';
    
//    _this.heroBots[_this.heroBots.length-1].style.left = '' + window.stage.robotFactoryLocation.x - 32 + 'px';
//    _this.heroBots[_this.heroBots.length-1].style.top = '' + window.stage.robotFactoryLocation.y - 32 + 'px';
    _this.heroBots[_this.heroBots.length-1].style.left = '200px';  
    _this.heroBots[_this.heroBots.length-1].style.top = '200px';
    _this.heroBots[_this.heroBots.length-1].style['z-index'] = 2225;
//    debugger;
    
    
    
} // end addRobotToStage()