window.onload = function () {
  //  var environment = {
  //    pageBackgrounds: [
  //    '/images/apoc1.jpg',
  //    '/images/apoc2.jpg',
  //    '/images/apoc3.jpg',
  //    '/images/apoc4.jpg'
  //  ]};

  var Game = {}; // a Game object for adding variables in a later refactor


  var pageBackgrounds = [
    '/images/apoc1.jpg',
    '/images/apoc2.jpg',
    '/images/apoc3.jpg',
    '/images/apoc4.jpg'
  ];
}; // end window.onload()

  // We will want to abstract this out later to give factories properties and for easier instantiation
  var heroFactoryProto = document.createElement('span');
  heroFactoryProto.className = 'herofactory';
  heroFactoryProto.innerHTML = '<img src="/images/factory5.png">';

  // Hacky placement solution
  heroFactoryProto.containingCanvasSize = canvas.getClientRects()[0]; // bottom, height, left, right, top, width
  heroFactoryProto.xPosition = (function () {
    var cWidth = (heroFactoryProto.containingCanvasSize.width * .8);
    return (cWidth + heroFactoryProto.containingCanvasSize.left);
  })();
  heroFactoryProto.yPosition = (function () {
    var cHeight = (heroFactoryProto.containingCanvasSize.height * .6);
    return (cHeight + heroFactoryProto.containingCanvasSize.top);
  })();

  //  document.body.appendChild(heroFactory);
  var heroFactory = document.body.insertBefore(heroFactoryProto, canvas);
  heroFactory.styleString = 'top: ' + heroFactoryProto.yPosition + 'px; left: ' + heroFactoryProto.xPosition + 'px;';
  heroFactory.setAttribute('style', heroFactory.styleString);

  heroFactory.containingCanvasSize = heroFactory.getClientRects()[0]; // bottom, height, left, right, top, width


  // AARON'S TEMP CODE: Create prototype robot:
  var makeRobot = function () {
    heroRobots.push(new ProtoBot);
    latestRobot++;
//    var latestRobotNode = heroFactory.appendChild(heroRobots[heroRobots.length-1].instanceNode);
    heroFactory.appendChild(heroRobots[latestRobot].instanceNode);
//    heroFactory.insertAdjacentHTML('afterEnd', heroRobots[latestRobot].instanceNode/*, heroFactory*/);
//    heroFactory.insertBefore(heroRobots[latestRobot].instanceNode, heroFactory);
//    setInterval(heroRobots[latestRobot].walk();
    var madeRobot = heroRobots[latestRobot];
    madeRobot.walk();
//    madeRobot.call(setInterval(this.walk, 16));
  }; // end animateCircle()



