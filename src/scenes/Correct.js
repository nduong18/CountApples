// "Every great game begins with a single scene. Let's make this one unforgettable!"
export class Correct extends Phaser.Scene {
    constructor() {
        super('Correct');
    }

    create() {
        //Add sky background
        this.add.image(455, 300, 'sky');

        //Add Title
        this.add.text(455, 200, 'Correct!', {fontFamily: 'Calibri', fontSize: '50px', fill: '#16c931' }).setOrigin(0.5);
        const playAgain =  this.add.text(455, 250, 'Play Again', {fontFamily: 'Calibri', fontSize: '30px', fill: '#ff9900' }).setOrigin(0.5).setInteractive();
        playAgain.on('pointerdown', () => {this.playAgain()});     
    }

    playAgain(){
        this.scene.start('Game');
    }

}
