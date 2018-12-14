class sceneTwo extends Phaser.Scene {
    constructor() {
        super({key: "sceneTwo"})
    }

    create ()
    {
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

        this.add.image(400, 300, 'backgroundTwo');

        //Adding Score and Menu Text

        scoreText = this.add.text(60,135, '0', {fill: '#000000',  fontSize: '32px'});
        score = 11;

        menuText = this.add.text(700, 25, 'Menu', { fontSize: '36px'});
        menuText.setInteractive();
        menuText.on('pointerup', () => { this.scene.start("menu") });

        //Adding Shape Images

        square1 = this.add.image(75, 75, 'square1');

        //Locking the Mouse

        game.canvas.addEventListener('mousedown', function ()
        {
            if (score != 1)
            {
                game.input.mouse.requestPointerLock();
            }
        });

        //Moving Chosen Shape to Pointer

        this.input.on('pointermove', function (pointer)
        {
            if (this.input.mouse.locked)
            {
                square1.x += pointer.movementX;
                square1.y += pointer.movementY;

                // Force the sprite to stay on screen
                square1.x = Phaser.Math.Wrap(square1.x, 0, game.renderer.width);
                square1.y = Phaser.Math.Wrap(square1.y, 0, game.renderer.height - 400);
            }
        }, this);

        //Drop Object

        this.input.on('pointerup', function (pointer)
        {
            this.matter.add.sprite(square1.x, square1.y, 'square1');
            square1.destroy();
            square1 = this.add.image(75, 75, 'square1');
            game.input.mouse.releasePointerLock();
            score--;
        }, this);

        //Adding Static Platform, Drop Boundary And EndZone

        let platform = this.matter.add.image(400, 550, 'platform', null, {isStatic: true});
        platform.setScale(3, 1);

        let boundary = this.add.image(0, 225,'dropBoundary');
        boundary.setScale(2, 1);

        let endZone = this.matter.add.sprite(0,800, 'endZone', null, {label: 'endZone'}).setStatic(true);
        endZone.setScale(2,1);
    }

    update()
    {
        scoreText.text = (score - 1);
        if (score == 0)
        {
            this.scene.start("sceneThree");
        }

        if (gameOver)
        {
            this.scene.start("sceneTwo");
            gameOver = false;
        }
    }
}