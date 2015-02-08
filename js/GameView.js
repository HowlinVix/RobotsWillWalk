// GameView extends the main Game code.

GameView = function () {
    /*************************
     * document.innerHeight: viewport height
     * document.outerHeight: Browser (Chrome app) height
     * document.screenTop: Monitor screen distance from top
     * document.screenY:
     * document.innerWidth: viewport width
     * document.outerWidth:
     * document.screenLeft:
     * document.screenX:
     ************************/
    this.screenHeight = document.innerHeight;
    this.screenWidth = document.innerWidth;

    this.canvasDimensions = canvas.getBoundingClientRect(); // bottom, height, left, right, top, width
    this.canvasTop = this.canvasDimensions.top;
    this.canvasBottom = this.canvasDimensions.bottom;
    this.canvasLeft = this.canvasDimensions.left;
    this.canvasRight = this.canvasDimensions.right;

    this.canvasWidth = this.canvasDimensions.width;
    this.canvasHeight = this.canvasDimensions.height;
    
    this.gridOverlayTable = document.getElementById('gridoverlaytable');
    this.gridIsVisible = false;

    this.initialize();
};

// gridCellTemplate = 4 divs
GameView.gridCellTemplate = '<td class="gridoverlay cell"><div class="gridoverlay top">top</div><div class="gridoverlay left">left</div><div class="gridoverlay right">right</div><div class="gridoverlay bottom">bottom</div></td>';

// gridRowTemplate = 10X cells
GameView.gridRowTemplate = '<tr>' + GameView.gridCellTemplate + GameView.gridCellTemplate + GameView.gridCellTemplate + GameView.gridCellTemplate + GameView.gridCellTemplate + GameView.gridCellTemplate + GameView.gridCellTemplate + GameView.gridCellTemplate + GameView.gridCellTemplate + GameView.gridCellTemplate + '</tr>';

// gridRowTemplate = 16X rows
GameView.gridTemplate = '<tbody>' + GameView.gridRowTemplate + GameView.gridRowTemplate + GameView.gridRowTemplate + GameView.gridRowTemplate + GameView.gridRowTemplate + GameView.gridRowTemplate + GameView.gridRowTemplate + GameView.gridRowTemplate + GameView.gridRowTemplate + GameView.gridRowTemplate + GameView.gridRowTemplate + GameView.gridRowTemplate + GameView.gridRowTemplate + GameView.gridRowTemplate + GameView.gridRowTemplate + GameView.gridRowTemplate + '</tbody>';

GameView.prototype.populateGrid = function (_this) {
    var _this = _this || this;
    console.log(_this);
    _this.gridOverlayTable.innerHTML = GameView.gridTemplate;
};

GameView.prototype.calculateBrowserDimensions = function () {


    this.heroFactoryCenterX = (function () {
        var factoryX = this.canvasWidth;
        factoryX *= 0.2;
        var factoryCenter = this.canvasRight - factoryX - 128;
        return factoryCenter;
    })(); // heroFactoryCenterX

    this.heroFactoryCenterY = (function () {
        var upY = this.canvasHeight;
        upY *= 0.2;
        var canvasBottom = this.canvasBottom - upY;
        return canvasBottom;
    })(); // heroFactoryCenterY


    console.log("this =", this);
    //  this.outerHeight = this.outerHeight;
    //  this.outerWidth = this.outerWidth;
    //  this.screenTop = this.screenTop;
    //  this.screenY = this.screenY;
    //  this.screenLeft = this.screenLeft;
    //  this.screenX = this.screenX;
    }; // end calculateBrowserDimensions()

GameView.prototype.initialize = function() {
    var _this = this;
    _this.populateGrid(_this);
    
    _this.hideGrid();
};

GameView.prototype.toggleGrid = function() {
    var _this = this;
    if (_this.gridIsVisible) {
        _this.gridIsVisible = false;
        _this.hideGrid();
    } else {
        _this.gridIsVisible = true;
        _this.showGrid();
    }
}

GameView.prototype.hideGrid = function() {
    var _this = this;
//    _this.gridOverlayTable.style.visibility = 'hidden';
    _this.gridOverlayTable.className = 'hidden';
    console.log("hiding grid");
};

GameView.prototype.showGrid = function() {
    var _this = this;
//    _this.gridOverlayTable.style.visibility = 'visible';
    _this.gridOverlayTable.className = 'visible';
    console.log("showing grid");
};