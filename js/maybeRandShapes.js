class gameScene extends Phaser.Scene {
    constructor() {
        super({key: "gameScene"})
    }

    create () {
        //Adding a Background

        this.add.image(400, 300, 'backgroundOne');

        //Adding Score Text
        scoreText = this.add.text(50,450, 'Score: 0', {fill: '#000000',  fontSize: '32px'});
        score = 10;

        //Adding Shape Images

        square1 = this.add.image(75, 75, 'square1');
        square2 = this.add.image(175, 75, 'square2');
        triangle1 = this.add.image(275, 75, 'triangle1');

        //Locking the Mouse and Choosing Random Shape

        game.canvas.addEventListener('mousedown', function ()
        {
            game.input.mouse.requestPointerLock();

            randshape = Math.floor(Math.random() * 3);
            console.log(randshape);
        });

        //Moving Chosen Shape to Pointer

        this.input.on('pointermove', function (pointer)
        {
            if (this.input.mouse.locked)
            {
                if(randshape = 0)
                {
                    square1.x += pointer.movementX;
                    square1.y += pointer.movementY;

                    // Force the sprite to stay on screen
                    square1.x = Phaser.Math.Wrap(square1.x, 0, game.renderer.width);
                    square1.y = Phaser.Math.Wrap(square1.y, 0, game.renderer.height);
                }
                else if(randshape = 1)
                {
                    square2.x += pointer.movementX;
                    square2.y += pointer.movementY;

                    // Force the sprite to stay on screen
                    square2.x = Phaser.Math.Wrap(square2.x, 0, game.renderer.width);
                    square2.y = Phaser.Math.Wrap(square2.y, 0, game.renderer.height);
                }
                else if(randshape = 2)
                {
                    triangle1.x += pointer.movementX;
                    triangle1.y += pointer.movementY;

                    // Force the sprite to stay on screen
                    triangle1.x = Phaser.Math.Wrap(triangle1.x, 0, game.renderer.width);
                    triangle1.y = Phaser.Math.Wrap(triangle1.y, 0, game.renderer.height);
                }
            }
        }, this);

        //Drop Object

        this.input.on('pointerup', function (pointer)
        {
            if(randshape = 0)
            {
                this.matter.add.sprite(square1.x, square1.y, 'square1');
                square1.destroy();
                square1 = this.add.image(75, 75, 'square1');
                game.input.mouse.releasePointerLock();
            }
            else if(randshape = 1)
            {
                this.matter.add.sprite(square2.x, square2.y, 'square2');
                square2.destroy();
                square2 = this.add.image(175, 75, 'square2');
                game.input.mouse.releasePointerLock();
            }
            else if(randshape = 2)
            {
                this.matter.add.sprite(triangle1.x, triangle1.y, 'triangle1');
                triangle1.destroy();
                triangle1 = this.add.image(275, 75, 'triangle1');
                game.input.mouse.releasePointerLock();
            }

            score--;
        }, this);

        //Adding Static Platform

        let platform = this.matter.add.image(400, 550, 'platform', null, {isStatic: true});
        platform.setScale(3, 1);

    }

    update()
    {
        scoreText.text = "Score: " + score;
        if (score == 0)
        {
            this.scene.start("sceneTwo");
        }
    }
}