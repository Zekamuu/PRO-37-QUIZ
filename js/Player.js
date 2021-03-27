class Player{
    constructor() {
        this.score = 0;
        this.name = null;
        this.rank = null;
    }
    getContestantCount() {
        database.ref('contestantCount').on("value", function (data){
            contestantCount = data.val();
        });
    }
    updateCount(count){
        database.ref('/').update({
            contestantCount: count
        });
    };
    updatePlayerRecord() {
        var playerIndex = "contestants/contestant" + player.index;
        database.ref(playerIndex).set({
            name: this.name,
            score: this.score,
            rank:this.rank
        });
    }
}