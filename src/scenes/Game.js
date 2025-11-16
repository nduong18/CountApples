// "Every great game begins with a single scene. Let's make this one unforgettable!"
export class Game extends Phaser.Scene {
    constructor() {
        super('Game');
    }

    create() {
        //Add sky background
        this.add.image(455, 300, 'sky');

        //Add Title
        this.add.text(455, 50, 'How many apples are there?', {fontFamily: 'Calibri', fontSize: '50px', fill: '#000000' }).setOrigin(0.5);

        //Add Apples Image
        const applePositions = [
            {x: 150, y: 200}, {x: 250, y: 300}, {x: 350, y: 200}, {x: 450, y: 300},
            {x: 550, y: 200}, {x: 650, y: 300}, {x: 750, y: 200}
        ];
        applePositions.forEach(pos => {
            this.add.image(pos.x, pos.y, 'apple').setScale(0.3);
        });

        //Add button Numbers
        const numbers = [1, 3, 5 ,7];
        const buttonY = 500;
        const positions = [150, 350, 550, 750];
        const buttons = [];
        numbers.forEach((num, i) => {
            const btn = this.add.image(positions[i], buttonY, 'button').setScale(0.8).setInteractive();
            btn.on('pointerdown', () => {this.handleInput(num)});
            this.add.text(positions[i], buttonY, numbers[i], {fontFamily: 'Calibri', fontSize: '60px', fill: '#000000' }).setOrigin(0.5);
            buttons.push(btn);
        });
    }

    handleInput(number){
        const result = 7;
        if (number === result) this.scene.start('Correct');
        else this.scene.start('Wrong');
    }

}
