class Player{
    constructor(){
        this.name = null;
        this.index = null;
        this.positionX = 0;
        this.positionY = 0;
    }

    getPlayerCount(){
        database.ref("playerCount").on("value",(data)=>{
            playerCount = data.val();
        })
    }

    updatePlayerCount(count){
        database.ref("/").update({
            playerCount: count
          });
    }

    addPlayerInfo(){
        var players = "players/player" + this.index;
        if(this.index == 1){
            this.positionX = width/2 -100;
        }
        if(this.index == 2){
            this.positionX = width/2 +100;
        }

        database.ref(players).set({
            name:this.name,
            positionX:this.positionX,
            positionY:this.positionY
        })
    }
    
}