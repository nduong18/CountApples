// "Every great game begins with a single scene. Let's make this one unforgettable!"
export class Preloader extends Phaser.Scene {
    constructor() {
        super('Preloader');
    }

    preload() {
        this.load.setPath('assets');
        this.load.image('sky', 'sky.png');
        this.load.image('apple', 'apple.png');
        this.load.image('button', 'button.png');
    }

    create() {
        this.scene.start('Game');
    }

}
