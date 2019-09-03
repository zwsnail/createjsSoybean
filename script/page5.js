function init()
{
  var stage = new createjs.Stage("stage-canvas");
  createjs.Ticker.addEventListener("tick", tick);
  stage.enableMouseOver(20);

  var text = new createjs.Text("Of course China imports some other agricultural products, \nbut they do not take in big partial.", "bold 35px Arial", "#000000");
  text.outline = 10;//give the text a outline and color it
  var text2 = text.clone();//colne text
  text2.outline = false;
  text2.color = "green";
  text.x = 15;
  text2.x =15;
  text.y = 20;
  text2.y = 20;
  createjs.Tween.get(text, { loop: true })
  .to({ alpha: 0}, 5000, createjs.Ease.easeInOutQuart)
  // .to({ y: 100 }, 3000, createjs.Ease.getPowInOut(4));
  stage.addChild(text, text2);

  //match the text with picture small trick
  var nuttext = new createjs.Text("(Here's Nut's place)", "bold 24px Arial", "brown");
  nuttext.x = 20;
  nuttext.y = 300;
  stage.addChild(nuttext);
  
  var corntext = new createjs.Text("(Here's Corn's place)", "bold 24px Arial", "#FFCC33");
  corntext.x = 400;
  corntext.y = 300;
  stage.addChild(corntext);

  var cottontext = new createjs.Text("(Here's Cotton's place)", "bold 24px Arial", "grey");
  cottontext.x = 800;
  cottontext.y = 300;
  stage.addChild(cottontext);

  var tricktext = new createjs.Text("Drag the pictures.\nLet's put them in order ^_<", "bold 24px Arial", "red");
  tricktext.x = 400;
  tricktext.y = 510;
  createjs.Tween.get(tricktext, { loop: true })
  .to({ x: 600 }, 1000, createjs.Ease.getPowInOut(4))
  // .to({ alpha: 0, y: 175 }, 500, createjs.Ease.getPowInOut(2))
  // .to({ alpha: 0, y: 225 }, 100)
  // .to({ alpha: 1, y: 250 }, 500, createjs.Ease.getPowInOut(2))
  .to({ x: 400 }, 1000, createjs.Ease.getPowInOut(4))
  .to({ x: 200 }, 1000, createjs.Ease.getPowInOut(4))
  .to({ x: 400 }, 1000, createjs.Ease.getPowInOut(4));
  stage.addChild(tricktext);

  var cotton = new createjs.Bitmap("image/cotton1.jpg");
  cotton.regX = 354/2;
  cotton.regY = 236/2;
  cotton.on("pressmove", function(event) {//drag and drop the pictures on the stage
    cotton.x = event.stageX;
    cotton.y = event.stageY;
  });
  stage.addChild(cotton);
  cotton.x = 400 + cotton.regX;
  cotton.y = 200 + cotton.regY;

  var corn = new createjs.Bitmap("image/corn2.jpg");
  corn.regX = 354/2;
  corn.regY = 236/2;
  corn.on("pressmove", function(event) {
    corn.x = event.stageX;
    corn.y = event.stageY;
  });
  corn.x = 20 + corn.regX;
  corn.y = 200 + corn.regY;
  stage.addChild(corn);

  var nut = new createjs.Bitmap("image/nut1.jpg");
  nut.regX = 354/2;
  nut.regY = 297/2;
  nut.on("pressmove", function(event) {
    nut.x = event.stageX;
    nut.y = event.stageY;
  });
  nut.x = 800 + nut.regX;
  nut.y = 165 + nut.regY;
  stage.addChild(nut);
 
  //make three rectangles to cover the images
  var rect = new createjs.Shape();
  rect.fillCommand = rect.graphics.beginFill("white").rect(20, 200, 354, 236).command;
  stage.addChild(rect);
  createjs.Tween.get(rect,{loop:false}).wait(1000).to({x:20, y:900}, 1000);

  var rect2 = new createjs.Shape();
  rect2.fillCommand = rect2.graphics.beginFill("white").rect(400, 200, 354, 236).command;
  stage.addChild(rect2);
  createjs.Tween.get(rect2,{loop:false}).wait(2000).to({x:400, y:900}, 1000);

  var rect3 = new createjs.Shape();
  rect3.fillCommand = rect3.graphics.beginFill("white").rect(800, 180, 354, 320).command;
  stage.addChild(rect3);
  createjs.Tween.get(rect3,{loop:false}).wait(3000).to({x:800, y:-900}, 1000);



  function tick(event) {
        stage.update();
      }
    
}
