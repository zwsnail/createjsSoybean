function init()
{
  var stage = new createjs.Stage("stage-canvas");
  createjs.Ticker.addEventListener("tick", tick);
  createjs.Ticker.timingMode = createjs.Ticker.RAF;

  var preload = new createjs.LoadQueue();//preload the audio
  preload.installPlugin(createjs.Sound);
  preload.loadFile({id:"no",src:"audio/no.wav"});
  preload.on("complete", this);

  var text = new createjs.Text("But why not rice?\nWe all know Chinese love rice, right!?", "bold 35px Arial", "#003366");
  text.lineWidth = 700;
  var rect = new createjs.Shape();
  rect.graphics.beginFill("#CCC").drawRect(0,0,700, text.getBounds().height);
  text.x = 30;
  text.y = 20;
  rect.x = 30;
  rect.y = 20;
  stage.addChild(rect, text);


  var text1 = new createjs.Text("Because rice almost no need to be imported, \nand there is no shortage in China. \nThey can provide all needs by themselves.", "bold 35px Arial", "#336633");
  text1.x = 440;
  text1.y = 440;
  text1.visible = false;//hide the text first. Use call function to show it later
  stage.addChild(text1);
  
  var rice = new createjs.Bitmap("image/rice1.png");
  rice.x = 400;
  rice.y = 170;
  createjs.Tween.get(rice,{loop:false})
          .call(popnosign)
          .wait(2000)
          .to({alpha: 0.6}, 1500, createjs.Ease.linear)
          .wait(1000)
          .call(showtext1);//call the function
  stage.addChild(rice);


  function popnosign(){
        var nosign = new createjs.Bitmap("image/nosign1.png");
        nosign.x = 400;
        nosign.y = 130;
        nosign.scaleX = 0.001;
        nosign.scaleY = 0.001;
        nosign.width = 100;
        createjs.Tween.get(nosign,{loop:false})
                .wait(2000).to({scaleX:1,scaleY:1}, 500)
                .call(function(){
                  createjs.Sound.play("no");
                });
        stage.addChild(nosign);
        
  }
   //show the text
  function showtext1(){
        text1.visible = true;
  }
 


  function tick(event) {
        stage.update();
      }
    
}
