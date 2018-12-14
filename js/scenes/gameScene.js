class gameScene extends Phaser.Scene {
    constructor() {
        super({key: "gameScene"})
    }

    create () {

        this.matter.world.on('collisionstart', function (event, bodyA, bodyB) {

            bodyA.gameObject.setTint(0xff0000);
            bodyB.gameObject.setTint(0x00ff00);

            if(bodyA.label == 'endZone')
            {
                console.log("Shit");
                gameOver = true;
            }
        });


        //Adding a Background

        this.add.image(400, 300, 'backgroundOne');

        //Adding Score and Menu Text

        scoreText = this.add.text(35,85, '0', {fill: '#000000',  fontSize: '32px'});
        score = 11;

        menuText = this.add.text(700, 25, 'Menu', { fontSize: '36px'});
        menuText.setInteractive();
        menuText.on('pointerup', () => { this.scene.start("menu") });

        //Adding Shape Images

        square2 = this.add.image(50, 50, 'square2');

        //Locking the Mouse

        game.canvas.addEventListener('mousedown', function ()
        {
            if (score !== 1)
            {
                game.input.mouse.requestPointerLock();
            }
        });

        //Moving Chosen Shape to Pointer

        this.input.on('pointermove', function (pointer)
        {
            if (this.input.mouse.locked)
            {
                square2.x += pointer.movementX;
                square2.y += pointer.movementY;

                // Force the sprite to stay on screen
                square2.x = Phaser.Math.Wrap(square2.x, 0, game.renderer.width);
                square2.y = Phaser.Math.Wrap(square2.y, 0, game.renderer.height - 400);
            }
        }, this);

        //Drop Object

        this.input.on('pointerup', function (pointer)
        {
            this.matter.add.sprite(square2.x, square2.y, 'square2');
            square2.destroy();
            square2 = this.add.image(50, 50, 'square2');
            game.input.mouse.releasePointerLock();
            score--;
        }, this);

        //Adding Static Platform, Drop Boundary And EndZone

        const platform = this.matter.add.image(400, 550, 'platform', null, {isStatic: true});
        platform.setScale(3, 1);

        let boundary = this.add.image(0, 225,'dropBoundary');
        boundary.setScale(2, 1);

        let endZone = this.matter.add.sprite(0,800, 'endZone', null, {label: 'endZone'}).setStatic(true);
        endZone.setScale(2,1);
    }

    update()
    {
        scoreText.text = (score - 1);
        if (score === 0)
        {
            this.scene.start("sceneTwo");
        }

        if (gameOver)
        {
            this.scene.start("gameScene");
            gameOver = false;
        }
    }
}