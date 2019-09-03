function init()
{
  var stage = new createjs.Stage("stage-canvas");
  createjs.Ticker.addEventListener("tick", tick);
  createjs.Ticker.timingMode = createjs.Ticker.RAF;
  stage.enableMouseOver(20);//without it, the click function won't work
  

  var text = new createjs.Text("We have a common sense that \nsoybeans are widely used in China.", "bold 45px Arial", "#336600");
  text.x = 20;
  text.y = 10;
  stage.addChild(text);
  text.shadow = new createjs.Shadow("#99CC00", 5, 5, 2);  //make shadow on text
  createjs.Tween.get(text, {loop:true}).to({alpha: 0.7}, 1000)
                .to({x: 60}, createjs.Ease.easeInOutBack)
                .to({alpha: 1.0}, 1000)
                .to({x: 20}, createjs.Ease.easeInOutBack);


  var tofuText = new createjs.Text("Tofu", "bold 30px Arial", "white");
  var tofu = new createjs.Bitmap("image/tofu1.jpg");
  var container = new createjs.Container();
  container.addChild(tofu, tofuText);
  container.x = 100;
  container.y = 120;
  container.addEventListener("mouseover", function(event) {
        container.scaleX = container.scaleY = 1.12;
    });
    container.addEventListener("mouseout", function(event) {
        container.scaleX = container.scaleY = 1;
    });

  stage.addChild(container);


  var soysauseText = new createjs.Text("Soysause", "bold 30px Arial", "white");
  var oil = new createjs.Bitmap("image/soysauce.jpg");
  var container1 = new createjs.Container();
  container1.addChild(oil, soysauseText);
  container1.x = 440;
  container1.y = 230;
  container1.addEventListener("mouseover", function(event) {
        container1.scaleX = container1.scaleY = 1.12;
    });
    container1.addEventListener("mouseout", function(event) {
        container1.scaleX = container1.scaleY = 1;
    });

  stage.addChild(container1);
 

  var soymilkText = new createjs.Text("Soymilk", "bold 40px Arial", "#666666");
  var soymilk = new createjs.Bitmap("image/soymilk1.jpg");
  var container2 = new createjs.Container();
  container2.addChild(soymilk, soymilkText);
  container2.x = 780;
  container2.y = 350;
  container2.addEventListener("mouseover", function(event) {
        container2.scaleX = container2.scaleY = 1.12;
    });
    container2.addEventListener("mouseout", function(event) {
        container2.scaleX = container2.scaleY = 1;
    });

  stage.addChild(container2);


  function tick(event) {
    stage.update();
}

}