var text, line, stage;
function init()
{
  stage = new createjs.Stage("stage-canvas");
  createjs.Ticker.setFPS(60);
  createjs.Ticker.addEventListener("tick", tick);
  createjs.Ticker.timingMode = createjs.Ticker.RAF;//give a better smooth animation

  var preload = new createjs.LoadQueue();//preload the audio
  preload.installPlugin(createjs.Sound);
  preload.loadFile({id:"redline",src:"audio/redline.wav"});
  preload.on("complete", this);

  var text = new createjs.Text("Why Soybeans Are at the Heart of the \n                U.S-China Trade War", "bold 50px Arial", "white");
  text.x = 200;
  text.y = 250;
  stage.addChild(text);
  createjs.Tween.get(text, { loop: false })
      .to({ x: 100 }, 1000, createjs.Ease.getPowInOut(4))
      .to({ alpha: 0, y: 175 }, 500, createjs.Ease.getPowInOut(2))
      .to({ alpha: 0, y: 225 }, 100)
      .to({ alpha: 1, y: 250 }, 500, createjs.Ease.getPowInOut(2))
      .to({ x: 200 }, 800, createjs.Ease.getPowInOut(2));


  var line = new createjs.Shape();
  line.graphics.setStrokeStyle(6).beginStroke('red').moveTo(310,300).lineTo(570,300);
  line.alpha = 0.01; 
  stage.addChild(line); 
  createjs.Tween.get(line,{loop:false})
  .wait(4000)
  .to({alpha: 1.0})
  .call(function(){
    createjs.Sound.play("redline");
});

  function tick(event) {
    stage.update();
  }

}
