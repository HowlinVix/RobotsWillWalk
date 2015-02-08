var Stage = function () {
    var _this = this;

    _this.canvas = document.getElementById('canvas');
    _this.blurredBackground = document.getElementsByClassName('blurred-background')[0];
    _this.bodyRef = document.getElementsByTagName('body')[0];

    // has top, left, right, bottom, height, width
    _this.location = _this.canvas.getBoundingClientRect();

    _this.location.xCenter = parseInt((_this.location.right - _this.location.right) / 2);
    _this.location.yCenter = parseInt((_this.location.bottom - _this.location.top) / 2);


    _this.robotFactoryLocation = {
        x: _this.location.xCenter*1.5,
        y: _this.location.yCenter*1.5,
    };

    return _this;
}; // end Hero()

//Hero.prototype.constructor = Hero;

Stage.prototype.aThing = function () {
        var _this = this;
    } // end buyRobot()


Stage.prototype.anotherThing = function () {
        var _this = this;
    } // end addRobotToStage()