class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
       this.rules = createElement('h4');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.rules.hide();
    }
    display() {
        this.title.html("COVISHIELD");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');
        this.rules.html('+5 points for mask and vaccine and -1 point for viruses')
        this.rules.position(200,600);
        this.rules.style('width', '200px');
        this.rules.style('height', '50px');
        this.rules.style('background', 'lightpink');
        
                 if (frameCount % 20 === 0) {
                      virus = createSprite(random(100, 1000), 0, 50, 50);
                      virus.scale = 0.1;
                     virus.velocityY = 6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: virus.addImage("virus1",virus1_img);
                         break;
                         case 2: virus.addImage("virus2", virus2_img);
                         break;
                         case 3: virus.addImage("virus3", virus3_img);
                         break;
                         case 4: virus.addImage("virus4", virus4_img);
                         break;
                         case 5: virus.addImage("mask",mask_img);
                         break;
                        
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
                

        
                 if (frameCount % 20 === 0) {
                      virus = createSprite(random(100, 1000), 0, 50, 50);
                      virus.scale = 0.1;
                     virus.velocityY = 6;
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: virus.addImage("virus1",virus1_img);
                         break;
                         case 2: virus.addImage("virus2", virus2_img);
                         break;
                         case 3: virus.addImage("virus3", virus3_img);
                         break;
                         case 4: virus.addImage("virus4", virus4_img);
                         break;
                         case 5: virus.addImage("mask",mask_img);
                         break;
                        
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
                


        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);

            var playerInfoRef = database.ref('players');
            playerInfoRef.remove();
            
        });

    }
}