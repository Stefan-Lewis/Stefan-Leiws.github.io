class preloadScene extends Phaser.Scene {
    constructor(){
        super({key:"preloadScene"})
    }

    //assets loaded before game begins
    preload()
    {
        console.log("Game is Loading");
        this.load.image('Background', 'assets/Background.png');
        this.load.image('backgroundOne', 'assets/backgrounds/backgroundOne.png');
        this.load.image('square1', 'assets/sprites/Square1.png');
        this.load.image('square2', 'assets/sprites/Square2.png');
        this.load.image('triangle1', 'assets/sprites/Triangle1.png');
        this.load.image('platform', 'assets/sprites/platform.png');
        this.load.image('dropBoundary', 'assets/sprites/DropBoundary.png');
        this.load.image('endZone', 'assets/sprites/EndZone.png');
        this.load.image('rectangle1', 'assets/sprites/Rectangle1.png');
        this.load.image('backgroundTwo', 'assets/backgrounds/backgroundTwo.png');
        this.load.image('backgroundThree', 'assets/backgrounds/backgroundThree.png');
        this.load.image('backgroundFour', 'assets/backgrounds/backgroundFour.jpg');
        this.load.image('backgroundFive', 'assets/backgrounds/backgroundFive.jpg');
        this.load.image('backgroundSix', 'assets/backgrounds/backgroundSix.jpg');
    }

    create()
    {
        this.scene.start("menu");
    }
}