class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500,60,100);
    player1.addImage("player1",player1_img);
    player1.scale = 0.4;
    player2 = createSprite(800,500,60,190);
    player2.addImage("player2", player2_img);
    player2.scale = 0.8;
    players=[player1,player2];

    

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                
                       textSize(20);
                       fill('black');
                       text(allPlayers[plr].name , x-25,y+25);

                         
                     }
                    
                     textSize(20);
                     fill('black');
                     text(allPlayers.player1.name+ ' : '+ allPlayers.player1.score,50,50);
                     text(allPlayers.player1.name + ' : '+ allPlayers.player2.score,50,100);
                     
                     if(allPlayers[plr].score>150){

                        // if(score > 50 ){
                        //     velocity = 6;
                        //     this.velocity(6 > 50);
                        //     this(console.log('speed'> velocity));
                        // }

                        // if(score > 100){
                        //     velocity = 8;
                        //     this.velocity(8 < 50)
                        //      this(console.log('speed'> velocity));
                        //  }
                        winner = allPlayers[plr].name;
                        gameState = 2;
                    }
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                    console.log(player.distance)
                    if(player.distance < 100){
                        player.distance  = 100;
                        }
                    
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                    console.log(player.distance)
                    if(player.distance > 800){
                        player.distance  = 800;
                        } 
                }
            
                 if (frameCount % 20 === 0) {
                      virus = createSprite(random(100, 1000), 0, 50, 50);
                     virus.scale = 0.2;
                    //  virus.velocityY = frameCount / 100;
                    if(frameCount < 500){
                        virus.velocityY = 5;
                    }
                    else if(frameCount < 1000){
                     virus.velocityY = 7;
                    }
                    else if(frameCount < 2000){
                     virus.velocityY = 9;
                    }
                    else {
                     virus.velocityY = 10;
                    }
                     var rand = Math.round(random(1,4));
                     switch(rand){
                         case 1: virus.addImage("virus1",virus1_img);
                         break;
                         case 2: virus.addImage("virus2", virus2_img);
                         break;
                         case 3: virus.addImage("virus3", virus3_img);
                         break;
                         case 4: virus.addImage("virus4", virus4_img);
                         break;
                        //  case 5: virus.addImage("mask",mask_img);
                        //  break;
                        
                     }
                     virusgroup.add(virus);
                     
                 }
                 
                  if (player.index !== null) {
                    for (var i = 0; i < virusgroup.length; i++) {
                        if (virusgroup.get(i).isTouching(players)) {
                            virusgroup.get(i).destroy();
                         player.score = player.score-1;
                         player.update();
                            
                        }
                        
                    }
                    
                    
                   
                  }

                  
                 if (frameCount % 30 === 0) {
                    mask = createSprite(random(100, 1000), 0, 50, 50);
                    mask.scale = 0.09;
                //    mask.velocityY = frameCount / 100;
                if(frameCount < 500){
                    mask.velocityY = 5;
                }
                else if(frameCount < 1000){
                 mask.velocityY = 7;
                }
                else if(frameCount < 2000){
                 mask.velocityY = 9;
                }
                else {
                 mask.velocityY = 10;
                }
                   var rand = Math.round(random(1,3));
                   switch(rand){
                       case 1: mask.addImage("mask1",mask_img);
                       break;
                       case 2: mask.addImage("vaccine1", vaccine1_img);
                       break;
                       case 3: mask.addImage("vaccine2", vaccine2_img);
                       break;
                       }
                   maskgroup.add(mask);   
               }
               
                if (player.index !== null) {
                  for (var i = 0; i < maskgroup.length; i++) {
                      if (maskgroup.get(i).isTouching(players)) {
                          maskgroup.get(i).destroy();
                       player.score = player.score+5;
                       player.update();
                          
                      }
                      
                  }
                  
                  
                }
              
                
                

         
         
        
         

    }
    

    
}
// console.log('speed');
