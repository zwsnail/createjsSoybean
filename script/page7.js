function init()
{
  var preload = new createjs.LoadQueue();
  preload.installPlugin(createjs.Sound);
  preload.loadFile({id:"pigSound",src:"audio/pig.wav"});
  preload.loadFile({id:"cowSound",src:"audio/cow.wav"});
  preload.loadFile({id:"chickenSound",src:"audio/chicken.wav"});
  preload.on("complete", this);

  var stage = new createjs.Stage("stage-canvas");
  createjs.Ticker.addEventListener("tick", stage);
  createjs.Ticker.timingMode = createjs.Ticker.RAF;
  stage.enableMouseOver(20);

  var text = new createjs.Text("We already know Chinese eat lots of soybeans. "+
  "\nBut if they want to avoid the affection of tradewar, \nthey may say \"let's just eat other food instead\". \nSo, why the soybean plays such an important role.\n ", "bold 35px Arial", "white");
  text.shadow = new createjs.Shadow("black", 0,0, 20);
  text.x = 30;
  text.y = 20;
  stage.addChild(text);
  createjs.Tween.get(text,{loop:false})
  .wait(8000)
  .to({alpha: 0}, 2000, createjs.Ease.linear)
  .wait(1000).call(showtext1);

  function showtext1(){
        var text1 = new createjs.Text("\nThe deeper reason is that soybean is the most used feeds for\nmeat-provider animals, such as, pig, cow, chicken.\nThe livestock not only eat grass, \nthey also need protein to gain weight. \nSoybean is the best feed which contains more than 38% of protein.\nSo, that's why the soybean plays such an important role.", "bold 35px Arial", "white");
        text1.shadow = new createjs.Shadow("black", 0,0, 20);
        text1.x = 20;
        text1.y = 0;
        stage.addChild(text1);
  }
 
  var shadow = new createjs.Shadow("#000", 0,0, 30);
  var pig = new createjs.Bitmap("image/pig1.png").set({cursor:"pointer"});
  pig.shadow = shadow;

  //flip the image
  pig.regX = 283/2;
  pig.regY = 236/2;
  function flip() {
    pig.scaleX = pig.scaleX * -1;   
  }
  setInterval(flip, 800);

  //offset the shadow
  createjs.Tween.get(shadow, {loop:true})
  .to({offsetX:10,offsetY:10, blur:20}, 1000, createjs.Ease.quadInOut)
  .to({offsetX:0,offsetY:0,blur:0}, 1000, createjs.Ease.quadInOut);

  pig.x = 20 + 283/2;
  pig.y = 300 + 236/2;
  stage.addChild(pig);
  pig.on("mouseover", function(e){
    pig.alpha = 0.5;
  });
  pig.on("mouseout", function(e){
    pig.alpha = 1;
  });


  pig.on("click", function(e) {
        createjs.Tween.get(pig, {override:true})
          .to({scale:1.2},500,createjs.Ease.quadIn)
          .to({scale:1},300,createjs.Ease.bounceOut)
          .call(function(){
              createjs.Sound.play("pigSound");
          });
      });


  var cow = new createjs.Bitmap("image/cow1.png").set({cursor:"pointer"});
  var shadow = new createjs.Shadow("#000", 0,0, 30);
  cow.regX = 283/2;
  cow.regY = 207/2;
  function cowflip() {
    cow.scaleX = cow.scaleX * -1;   
  }
  setInterval(cowflip, 1000);

  cow.shadow = shadow;
  createjs.Tween.get(shadow, {loop:true})
  .to({offsetX:10,offsetY:10, blur:20}, 1000, createjs.Ease.quadInOut)
  .to({offsetX:0,offsetY:0,blur:0}, 1000, createjs.Ease.quadInOut);
  cow.x = 420 + 283/2;
  cow.y = 320 + 207/2;
  stage.addChild(cow);
  cow.on("mouseover", function(e){
    cow.alpha = 0.5;
  });
  cow.on("mouseout", function(e){
    cow.alpha = 1;
  });

  cow.on("click", function(e) {
        createjs.Tween.get(cow, {override:true})
          .to({scale:1.2},500,createjs.Ease.quadIn)
          .to({scale:1},300,createjs.Ease.bounceOut)
          .call(function(){
              createjs.Sound.play("cowSound");
          });
      });

  var chicken = new createjs.Bitmap("image/chicken1.png").set({cursor:"pointer"});
  var shadow = new createjs.Shadow("#000", 0,0, 30);
  chicken.regX = 283/2;
  chicken.regY = 186/2;
  function chickenflip() {
    chicken.scaleX = chicken.scaleX * -1;   
  }
  setInterval(chickenflip, 1200);

  chicken.shadow = shadow;
  createjs.Tween.get(shadow, {loop:true})
  .to({offsetX:10,offsetY:10, blur:20}, 1000, createjs.Ease.quadInOut)
  .to({offsetX:0,offsetY:0,blur:0}, 1000, createjs.Ease.quadInOut);
  
  chicken.x = 820 + 283/2;
  chicken.y = 320 + 186/2;
  stage.addChild(chicken);
  chicken.on("mouseover", function(e){
    chicken.alpha = 0.5;
  });
  chicken.on("mouseout", function(e){
    chicken.alpha = 1;
  });

  chicken.on("click", function(e) {
        createjs.Tween.get(chicken, {override:true})
          .to({scale:1.2},500,createjs.Ease.quadIn)
          .to({scale:1},300,createjs.Ease.bounceOut)
          .call(function(){
              createjs.Sound.play("chickenSound");
          });
      });


  function tick(event) {
        stage.update();
      }
    
}
