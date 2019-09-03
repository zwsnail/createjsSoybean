var canvas, stage;
var money, soybean;
var text, soybeanSound, rect;
function init()
{
  var preload = new createjs.LoadQueue();
  preload.installPlugin(createjs.Sound);
  preload.loadFile({id:"soybean",src:"audio/soybean.wav"});
  preload.on("complete", this);

  var stage = new createjs.Stage("stage-canvas");
  createjs.Ticker.addEventListener("tick", tick);
  createjs.Ticker.timingMode = createjs.Ticker.RAF;

  var text = new createjs.Text("Nowadays the Tradewar between China and USA is a hot topic. \nEach country is adding duty on the import goods. \nThere are lots of different trade goods between those two countries. \nBut we heard a lot about \"soybeans\" in their debates. \nWhy not other goods sounds more important.", 
  "bold 30px Arial", "#000000");
  text.lineWidth = 1100;
  text.y = 30;
  var rect = new createjs.Shape();
  rect.y = 30;
  rect.graphics.f("#FFCCCC").dr(0,0,1100, text.getBounds().height);
  stage.addChild(rect, text);

    //make two flags and tween them both in the center
  var americanflag = new createjs.Bitmap("image/americanflag.png");
  americanflag.shadow = new createjs.Shadow("black", 0,0, 30);
  americanflag.x = -200;
  americanflag.y = 350;
  createjs.Tween.get(americanflag,{loop:false})
          .to({x:100, y:350}, 1000);
  stage.addChild(americanflag);

  var chinaflag = new createjs.Bitmap("image/chinaflag.png");
  chinaflag.shadow = new createjs.Shadow("black", 0,0, 30);
  chinaflag.x = 1200;
  chinaflag.y = 350;
  createjs.Tween.get(chinaflag,{loop:false})
          .to({x:850, y:350}, 1000).wait(2000).call(popSoybean);
  stage.addChild(chinaflag);


   //soybean picture pop up with sound
    function popSoybean(){
    var soybean = new createjs.Bitmap("image/soybean.jpg");
    soybean.shadow = new createjs.Shadow("black", 0,0, 30);
    soybean.regX = 177;
    soybean.regY = 133;
    soybean.scaleX = 0.01;
    soybean.scaleY = 0.01;
    soybean.x = 600;
    soybean.y = 433;
    stage.addChild(soybean);
    createjs.Tween.get(soybean, {loop: false})
    .to({scaleX: 1, scaleY: 1}, 300).call(function(){
      createjs.Sound.play("soybean");
    });
    }
//     //add a mask
//     var shape = new createjs.Shape();
//     shape.graphics.s("#f00").drawPolyStar(200, 200, 50, 5, 0.6, -90);
//     stage.addChild(shape); 
//     soybean.mask = shape;
//     };
// shape.graphics.s("#f00").ss(3).mt(0,100).lt(50,150).lt(100,100).lt(105,15).lt(0,100).cp();
// test.mask = shape;
// stage.addChild(shape);

    function tick(event) {
        stage.update();
        }
}
