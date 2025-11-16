// "Every great game begins with a single scene. Let's make this one unforgettable!"
export class Wrong extends Phaser.Scene {
    constructor() {
        super('Wrong');
    }

    create() {
        //Add sky background
        this.add.image(455, 300, 'sky');

        //Add Title
        this.add.text(455, 200, 'Wrong!', {fontFamily: 'Calibri', fontSize: '50px', fill: '#ff0000' }).setOrigin(0.5);
        const playAgain =  this.add.text(455, 250, 'Play Again', {fontFamily: 'Calibri', fontSize: '30px', fill: '#ff9900' }).setOrigin(0.5).setInteractive();
        playAgain.on('pointerdown', () => {this.playAgain()});  
    }
    playAgain(){
        this.scene.start('Game');
    }
}
