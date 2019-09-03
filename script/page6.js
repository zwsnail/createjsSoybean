function init()
{
  var stage = new createjs.Stage("stage-canvas");
  createjs.Ticker.addEventListener("tick", tick);
  stage.enableMouseOver(20);

  //"type" words one by one
  var scene = new createjs.Container();  
  stage.addChild(scene); 
  scene.name="scene2";
  scene.data = {}; 
  scene.data.tTimer = 0;
  scene.data.tIndex = 0;
  scene.data.tData = "According to soybean, \nit takes the largest portion in the total food export in America. \nFor example, in 2017, \nit exported about 55 million tons of soybeans \nwhich were much higher than corn, wheat.";    
  scene.data.tText = new createjs.Text("", "30px Arial", "#000000");
  scene.data.tText.x = 20;
  scene.data.tText.y = 20;    
      
  scene.animateText = function(event){
      if (scene.data.tTimer < createjs.Ticker.getTime()){
          scene.data.tTimer = createjs.Ticker.getTime() + 1;
          if (scene.data.tIndex < scene.data.tData.length){
              scene.data.tText.text = scene.data.tText.text + scene.data.tData[scene.data.tIndex];
              scene.data.tIndex = scene.data.tIndex + 1;                
          }
      }
  };  

  scene.addEventListener("tick", scene.animateText); 
  scene.addChild(scene.data.tText);

  var text1 = new createjs.Text("On the other hand, \nChina is always the biggest buyer \nwho takes more than \nhalf of the soybean export every year.", "bold 35px Arial", "#000000");
  text1.x = 30;
  text1.y = 220;
  text1.lineWidth = 600;
  text1.alpha = 0.001;

  stage.addChild(text1);
  createjs.Tween.get(text1).wait(10000).to({alpha: 1.0}, 3000);


  //create a button as container holding label & background to alert more words
  var background = new createjs.Shape();
  background.graphics.beginFill("red").drawRoundRect(0, 0, 150, 60, 10);
  
  var label = new createjs.Text("Click", "bold 18px Arial", "#FFFFFF");
  label.textAlign = "center";
  label.textBaseline = "middle";
  label.x = 150/2;
  label.y = 60/2;
  
  var redbutton = new createjs.Container().set({cursor:"pointer"});
  var shadow = new createjs.Shadow("#000", 0,0, 30);
  redbutton.shadow = shadow;
  redbutton.x = 20;
  redbutton.y = 500;
  redbutton.addChild(background, label);
  stage.addChild(redbutton);

  redbutton.on("mouseover", function(e){
    redbutton.alpha = 0.7;
  });
  redbutton.on("mouseout", function(e){
    redbutton.alpha = 1;
  });

  redbutton.addEventListener("click", showSource);
  function showSource(event) {
    alert("You can copy the link to see the data resource: \nhttps://www.fas.usda.gov/data/top-us-agricultural-exports-2017");
  }

  function tick(event) {
        stage.update();
      }
    
}
