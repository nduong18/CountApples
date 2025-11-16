import { Preloader } from './scenes/Preloader.js';
import { Game } from './scenes/Game.js';
import { Wrong } from './scenes/Wrong.js';
import { Correct } from './scenes/Correct.js';

const config = {
    type: Phaser.AUTO,
    title: 'CountApples',
    description: '',
    parent: 'game-container',
    width: 910,
    height: 600,
    backgroundColor: '#000000',
    pixelArt: false,
    scene: [
        Preloader, Game, Wrong, Correct
    ],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
}

new Phaser.Game(config);
            