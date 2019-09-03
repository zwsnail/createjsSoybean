var canvas, stage;
var money, shakehand;
var text;
function init()
{

      var preload = new createjs.LoadQueue();
      preload.installPlugin(createjs.Sound);
      preload.loadFile({id:"money",src:"audio/coin.wav"});
      preload.on("complete", this);
      createjs.Ticker.timingMode = createjs.Ticker.RAF;
      

      var stage = new createjs.Stage("stage-canvas");
      createjs.Ticker.addEventListener("tick", tick);
      stage.enableMouseOver(20);

      var text = new createjs.Text("China of course import some other agricultural products.\nSo if there is no meat on the Chinese families tables, \nthe huge fears would be in the society, \nwhich the Chinese government for sure does not want to see." 
      + "\nAdding customs duty on soybeans is so sensitive. \nThat's why the soybean is at the heart of the U.S-China Trade War:)", "35px Rancho", "#336699");
      text.x = 30;
      text.y = 20;
      stage.addChild(text);

      
      var shakehand = new createjs.Bitmap("image/shakehand1.jpg").set({cursor:"pointer"});
      shakehand.shadow = new createjs.Shadow("black", 0,0, 30);
      shakehand.regX = 425/2;
      shakehand.regY = 319/2;
      shakehand.x = 400+425/2;
      shakehand.y = 240+319/2;
      createjs.Tween.get(shakehand, {loop:true}).to({rotation:10}, 400, createjs.Ease.easeInOutExpo)
                    .to({rotation:0}, 400, createjs.Ease.easeInOutExpo)
                    .to({rotation:-10}, 400, createjs.Ease.easeInOutExpo)
                    .to({rotation:0}, 400, createjs.Ease.easeInOutExpo);
      shakehand.addEventListener("click", showmoney);
      stage.addChild(shakehand);
      

      var money = new createjs.Bitmap("image/money1.png");
      money.crossOrigin="anonymous";
      money.x = 300;
      money.y = 0;
      money.visible = false;
      stage.addChild(money);

      function showmoney(){
            money.visible = true;
            createjs.Tween.get(money,{loop:true})
            .call(function(){
                  createjs.Sound.play("money");
                })
            .to({x:300, y:600}, 2500);
  
      }
 
      function tick(event) {
        stage.update();
      }
    
}
