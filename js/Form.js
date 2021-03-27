class Form {
    constructor() {
        this.option1button = createButton("1:Everyone");
        this.option1button.position(150, 100);
        this.option1button.hide();
        option1 = ("1:Everyone");
        this.option2button = createButton("2:Envelope");
        this.option2button.position(150, 120);
        this.option2button.hide();
        option2 = ("2:Envelope");
        this.nameInput = createInput("Name");
        this.nameInput.position(350, 200);
        this.nameInput.hide();
        this.nameInput.show();
        this.submitNameButton = createButton("Submit Name");
        this.submitNameButton.position(390, 250);
        this.submitNameButton.hide();
        this.submitNameButton.show();


    }

    hide() {
        this.nameInput.hide();
        this.submitNameButton.hide();

        this.option1button.show();
        this.option2button.show();
    }
    revealThySelf() {

        this.submitNameButton.mousePressed(() => {

            player.name = this.nameInput.value();
            player.index = contestantCount + 1;
            console.log(player.index);
            player.updatePlayerRecord();
            player.updateCount(player.index);

            
        });
    }

    question1() {
        this.option1button.mousePressed(() => {
            display1 = true;
            display2 = false;
            
        })
    }
    question2() {
        this.option2button.mousePressed(() => {
            display2 = true;
            display1 = false;
        })

    }
}