class Game{
    constructor(){
    }
    getGameState(){
        var _gameState
        database.ref('gameState').on("value", function (data){
            _gameState = data.val();
        });
        return _gameState
    }
    updateState(state){
        database.ref('/').update({
            gameState: state
        })
    }
    async start(){
        if(gameState == 0){
            player = new Player();
            player.getContestantCount();

            form = new Form();
            form.revealThySelf();

            if (player.getContestantCount() == 2) {
                game.updateGameState(1);
                form.hide();
                
                form.question1();
                form.question2();
            }
        }
    }
    play() {
        form.hide();
        form.question1();
        form.question2();
    }


}