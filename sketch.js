 var gameState=1;
 var babyi, thiefr, thiefl, policer , policel, craftingi ,bottlei, capi, milki;
 var walls = [],idc, gWalls = [];
 var uFlag= false;
 var gFlag= false;
 var timer = 200;
function preload(){
  babyi =  loadImage("baby image.png");
  policer =  loadImage("police r.png");
  policel =  loadImage("police l.png");
  thiefr =  loadImage("thief r.png");
  thiefl =  loadImage("thief l.png");
  bottlei =  loadImage("bottle.png");
  capi = loadImage("cap.png");
  milki = loadImage("milk.png");
  craftingi =  loadImage("crafting.png");
  idci =  loadImage("idc.png");
  babd = loadImage("babyd.png");
  guni  = loadImage("gun.png");
  sguni = loadImage("shrink gun.png")
  tsu = loadImage("t.png")
}

function setup(){
  createCanvas(400,400);

  
  detect = createSprite(25,375,15,30);
  thief = createSprite(25,365,8,8);
  tpe = createSprite(100000,100000,5,5);
  trap2 = createSprite(380,15,40,40); 
  trap = createSprite(360,35,80,80);
  diamond = createSprite(375,25,20,20);
  lazar = createSprite(100,0,200,5);
  lazar1 = createSprite(300,400,200,5);
  jail = createSprite(-200,-200,10,400);
  jail2 = createSprite(-200,-200,10,400);
  jail5 = createSprite(-200,-200,10,400);
  jail3 = createSprite(-200,-200,10,400);
  jail4 = createSprite(-200,-200,10,400);
  arrest = createSprite(-200,-200,400,400);
  police = createSprite(375,170,20,20);
  pollice = createSprite(20,270,20,20);
  gun = createSprite(5000,5000,10,10);
  sgun = createSprite(5000,5000,10,10);
  ts = createSprite(1000000000000,101000,20,400)
  
  gWalls[0] = createSprite(350,355,20,100);
  gWalls[1] = createSprite(320,260,60,20);
  gWalls[2] = createSprite(285,220,20,100);
  gWalls[3] = createSprite(360,195,70,20);
  gWalls[4] = createSprite(315,220,20,70);
  gWalls[5] = createSprite(310,340,60,20);
  gWalls[6] = createSprite(310,290,20,40);
  gWalls[7] = createSprite(235,270,20,150);
  gWalls[8] =createSprite(55,150,20,380);
  gWalls[9] = createSprite(130,180,70,20);
  gWalls[10] = createSprite(105,290,20,230);
  gWalls[11] = createSprite(105,30,20,180);
  gWalls[12] = createSprite(180,230,100,20);
  gWalls[13] = createSprite(180,270,20,80);
  gWalls[14] = createSprite(140,365,50,20);
  gWalls[15] = createSprite(175,150,20,170);
  gWalls[16] = createSprite(300,100,20,200);
  gWalls[17] = createSprite(220,88,80,20);
  gWalls[18] = createSprite(235,145,20,100);
  for(var i=0;i<gWalls.length;i++){
    gWalls[i].visible = false;
  }
    
 wall = createSprite(165,60,400,10);
 wall2 = createSprite(380,115,180,10);
 wall3 = createSprite(80,115,200,10);
 wall4 = createSprite(200,200,400,10);
 wall5 = createSprite(230,180,30,50);

 policeu = createSprite(360,365,20,20);
 policeu.addImage(policer);
 policeu.visible = false;

  wall.shapeColor="red";
  wall2.shapeColor="red";
  wall3.shapeColor="red";
  wall4.shapeColor="red";
  wall5.shapeColor="red";
    
  tp1 = createSprite(0,180,20,50);
  tp2 = createSprite(400,180,20,50);    
  tp1.shapeColor="green";
  tp2.shapeColor="green";

  wall.visible =false;
  wall2.visible =false;
  wall3.visible =false;
  wall4.visible =false;
  wall5.visible =false;

  baby = createSprite(310,315,20,20);
  baby.visible=false;

  craft = createSprite(100,350,20,20)
  craft.addImage(craftingi);
  craft.scale=0.7;
  craft.visible = false;
  
  walls[0] = createSprite(100,50,10,100);
  walls[1] = createSprite(175,100,250,10);
  walls[2] = createSprite(300,250,200,10);
  walls[3] = createSprite(200,200,150,10);
  walls[4] = createSprite(75,150,150,10);
  walls[5] = createSprite(295,125,10,50);
  walls[6] = createSprite(300,150,100,10);
  walls[7] = createSprite(125,180,10,50);
  walls[8] = createSprite(30,230,100,10);
  walls[9] = createSprite(25,300,50,10);
  walls[10] = createSprite(10,363,30,125);
  walls[11] = createSprite(185,350,30,100);
  walls[12] = createSprite(175,300,50,10);
  walls[13] = createSprite(80,240,10,25);
  walls[14] = createSprite(90,250,25,10);
  walls[15] = createSprite(375,300,100,10);
  walls[16] = createSprite(275,350,10,100);

  edges = createEdgeSprites();

  for(var i=0;i<walls.length;i++){
    walls[i].visible = false;
  }


  bot = createSprite(40,40,20,20);
  bot.visible=false;
  milk = createSprite(30,185,20,20);
  milk.visible=false;
  cap = createSprite(370,275,20,20);
  cap.visible=false;

  thief.addImage(thiefr);
  thief.scale = 0.07;

  baby.addImage(babyi);
  baby.scale = 0.2;

  milk.addImage(milki);
  milk.scale=0.1;

  cap.addImage(capi);
  cap.scale=0.1

  bot.addImage(bottlei);
  bot.scale=0.2

  police.addImage (policel);
  police.scale = 0.1;
     
  pollice.addImage (policer);
  pollice.scale = 0.1;

  gun.addImage(guni);
  gun.scale = 0.05;

  sgun.addImage(sguni);
  sgun.scale = 0.1

  ts.addImage(tsu);
  ts.scale =0.8;
   
  arrest.shapeColor="green";
  lazar.shapeColor="red";
  lazar1.shapeColor="red";
  trap.shapeColor="green";
  trap2.shapeColor="green";
    
  
  diamond.shapeColor="lightblue";
  detect.shapeColor="green";
 
 
}

function draw() {
background("green");

diamond.rotation=45;

if(gameState === 1){
  if (keyDown("space")) {
    lazar.velocityY=5;
    lazar1.velocityY=-5;
    police.velocityX=-3;
    pollice.velocityX = 3;
  }

  if(thief.isTouching(trap)){
    trap.shapeColor="red";
  }
  
  if(thief.isTouching(trap2)){
    trap2.shapeColor="red";
  }
  
  if(trap2.shapeColor==="red"||
  (lazar.isTouching(thief)||lazar1.isTouching(thief))||
    (thief.isTouching(police)||thief.isTouching(pollice))){
    lazar.velocityY=0;
    lazar1.velocityY=0;
    lazar.destroy();
    lazar1.destroy();
    diamond.destroy();
    police.destroy();
    pollice.destroy();
   
   
    trap.destroy();
    trap2.destroy();
    
    jail.x=200;
    jail.y=200;
    jail2.x=55;
    jail2.y=200;
    jail3.x=120;
    jail3.y=200;
    jail4.x=275;
    jail4.y=200;
    jail5.x=350;
    jail5.y=200;
    thief.x=200;
    thief.y=300;
    gameState=0;
  }
  
  if (thief.isTouching(detect)) {
  fill("black");
  textSize(25);
  text("Thief Detected",10,200);
  text("Press space to deploy security",10,220);
  }

  
  if (police.isTouching(edges[0])){
    police.addImage(policer);
  }
  if (police.isTouching(edges[1])) {
    police.addImage(policel);
  }
  if (pollice.isTouching(edges[0])){
    pollice.addImage(policer);
  }
  if (pollice.isTouching(edges[1])) {
    pollice.addImage(policel);
  }

  police.bounceOff(edges);
  pollice.bounceOff(edges);

 }

  if(gameState === 0){
    fill("red");
    textSize(50);
    text("Thief Was Arrested",0,200);

    fill("blue");
    textSize(40);
    text("Press 'Q' to break out",0,50);
  }
  
  
  if(keyWentDown("Q")&&gameState === 0){
    jail.destroy();
    jail2.destroy();
    jail3.destroy();
    jail4.destroy();
    jail5.destroy();
    thief.x= 200;
    thief.y = 25;
    gameState=3;
  }
  
  if(gameState === 3 || gameState === 1 || gameState === 4 || gameState === 2 || gameState === 5){
    if (keyDown("up")) {
    thief.y=thief.y-3;
  }

  if (keyDown("down")) {
    thief.y=thief.y+3;
   
  }

  if (keyDown("right")) {
    thief.x=thief.x+3;
   
    thief.addImage(thiefr)
  }

  if (keyDown("left")) {
    thief.x=thief.x-3;
     thief.addImage(thiefl)
  }

  if(uFlag === true){
    
    if (keyDown("right")) {
      thief.x=thief.x+3;
     
      thief.addImage(policer)
    }
  
    if (keyDown("left")) {
      thief.x=thief.x-3;
      thief.addImage(policel)
    }
  }
  }

  

  if(gameState === 3){
    

    wall.visible =true;
    wall2.visible =true;
    wall3.visible =true;
    wall4.visible =true;
    wall5.visible =true;


    if (thief.isTouching(wall)||
    thief.isTouching(wall2)||
    thief.isTouching(wall3)||
    thief.isTouching(wall5)) {
      thief.x=200;
      thief.y=25;
    }
    
    if (thief.isTouching(wall4)) {
      fill("blue");
      textSize(25);

      if(uFlag!==true && gFlag!==true)
        text("Need police uniform and Gun",50,250);
      else if(uFlag === true && gFlag === false)
        text("Need Gun",50,250);
      else if(gFlag === true && uFlag === false)
        text("Need Police Uniform",50,250); 
      else {
        wall4.destroy()
      }
        
      
      thief.collide(wall4);
      tp1.shapeColor="blue";
      tp2.shapeColor="brown";
    }
    
    if(thief.isTouching(tp1)){
      wall.visible =false;
      wall2.visible =false;
      wall3.visible =false;
      wall4.visible =false;
      wall5.visible =false;
      tp1.destroy();
      tp2.visible=false;
  
      thief.x=200;
      thief.y=25;
      gameState=4;
    }

    if(thief.isTouching(tp2)){
      wall.visible =false;
      wall2.visible =false;
      wall3.visible =false;
      wall4.visible =false;
      wall5.visible =false;
      tp1.visible = false;
      tp2.visible=false;
  
      thief.x=200;
      thief.y=25;
      gameState=2;
    }
  }
  
  if(thief.x>175&&thief.x<225 && thief.y>20&&thief.y<45 && gameState === 4){
    fill("blue");
    textSize(20);
    text("We need to distract the baby with milk",30,180);
  }
  
  if(gameState === 4){
    

   
    for(var i=0;i<walls.length;i++){
      walls[i].visible = true;
      thief.collide(walls[i]);
    }
    policeu.visible = true;
    policeu.scale = 0.1
    craft.visible = true;
    craft.depth = 100;
    baby.visible = true;
    thief.collide(baby);
    bot.visible = true
    milk.visible = true;
    cap.visible=true;
    

    if(thief.isTouching(bot)){
      bot.x=55;
      bot.y=350;
    }

    if(thief.isTouching(milk)){
      milk.x=55;
      milk.y=350;
    }

    if(thief.isTouching(cap)){
      cap.x=55;
      cap.y=350;
    }

    if(craft.isTouching(bot)&&craft.isTouching(cap)&&craft.isTouching(milk)){
      craft.destroy();
      bot.destroy();
      milk.destroy();
      cap.destroy();
      idc = createSprite(75,355,20,20);
      idc.addImage(idci);
      idc.scale=0.1
      if(idc.x === 75){
        baby.x = 75;
        baby.y = 355;
      }
     
      if(baby.isTouching(idc)){
        baby.addImage(babd);
        idc.scale = 0;
      }
      

    }
    if(thief.isTouching(policeu)){
      thief.addImage(policer);
      uFlag = true;
      fill("black")
      textSize(25);
      text("Press 'B' to go back",100,200);
    }

    if(keyWentDown("B")){
      thief.addImage(policer);
      baby.destroy();
      idc.destroy();
      policeu.destroy();
      for(var i=0;i<walls.length;i++){
        walls[i].destroy();
      }
      gameState = 3;
      thief.x=10;
      thief.y=180;
      tp2.visible = true
    }
  }
 
  if(gameState === 5){
    for(var i=0;i<gWalls.length;i++){
     gWalls[i].visible = true;
     thief.collide(gWalls[i]);
    }
    gun.x=150;
    gun.y=205;

    sgun.x = 160;
    sgun.y = 250;

    tpe.x=200;
    tpe.y=200;


    if(thief.isTouching(sgun)){
      thief.x=200;
      thief.y=100;
    }

    if(thief.isTouching(gun)){
      gun.x = 120120
      text("Gun Aquired",200,200)
      text("Tsunami Incoming",200,10)
      background("red");
      gFlag = true;
    }

    if(gun.x === 120120 ){
      textSize(20);
      fill("black")
      text("Tsunami Incoming",120,20); 
      gameState = 10;
    }
    
    if(thief.isTouching(tpe)){
      thief.x = 150;
      thief.y = 205;
      tpe.destroy()
      gWalls[9].destroy()
      detect.destroy()
    }


  }

  if(gameState === 2){
    text("Click 'E' to enter the sewers",200,100);
    if(keyDown("E")){
      gameState = 5
      thief.x = 25;
      thief.y = 25;
    }
  }

  if(gameState === 10){
    ts.x=0;
    ts.y = 240;
    gameState = 9
  }

  if(gameState === 9){
    ts.velocityX = 2
    if(ts.x === 60){
      gameState = 8
    }
  }

  if(gameState === 8){
    background("black")
    ts.destroy()
      for(var i=0;i<gWalls.length;i++){
        gWalls[i].destroy()
      }
    sgun.destroy();
    thief.x=200;
    thief.y=20;
    thief.visible = false
    timer--
    if(timer === 0){
      changeState()
    }
  }

  thief.bounceOff(edges);

  lazar.bounceOff(edges);
  lazar1.bounceOff(edges);

  console.log(gameState);
  drawSprites();  

  fill(0);
  textSize(10);
  text(mouseX + "," + mouseY, mouseX,mouseY);
}

function changeState(){
  gameState = 3
  thief.visible = true;
  console.log("changed")
}


