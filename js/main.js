let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
        physics: {
            default: 'matter',
        },
    scene: [preloadScene, menu , gameScene, sceneTwo, sceneThree, sceneFour, sceneFive, sceneSix]
};

let levelOneText;
let levelTwoText;
let levelThreeText;
let levelFourText;
let levelFiveText;
let levelSixText;
let menuText;
let L1 = false;
let L2 = false;
let L3 = false;
let L4 = false;
let L5 = false;
let L6 = false;
let image;
let hold;
let square2;
let gameOver = false;
let triangle1;
let square1;
let Shapes;
let shape;
let randshape;
let platform;
let endZone;
let rectangle1;
let score;
let scoreText = "";
let game = new Phaser.Game(config);

function create()
{
    this.scene.start("preloadScene");
}
