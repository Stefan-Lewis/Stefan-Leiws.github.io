class menu extends Phaser.Scene{
    constructor(){
        super({key:"menu"})
    }

    update()
    {
        if(L1)
        {
            this.scene.start("gameScene");
            L1 = false;
        }
        else if(L2)
        {
            this.scene.start("sceneTwo");
            L2 = false;
        }
        else if(L3)
        {
            this.scene.start("sceneThree");
            L3 = false;
        }
        else if(L4)
        {
            this.scene.start("sceneFour");
            L4 = false;
        }
        else if(L5)
        {
            this.scene.start("sceneFive");
            L5 = false;
        }
        else if(L6)
        {
            this.scene.start("sceneSix");
            L6 = false;
        }
    }

    create ()
    {
        this.key = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);

        image = this.add.image(400, 300, 'Background');

        let level1platform = this.matter.add.image(75, 500, 'platform', null, {label: 'level1Platform'}).setStatic(true);
        level1platform.setScale(1);

        let level2platform = this.matter.add.image(205, 500, 'platform', null, {label: 'level2Platform'}).setStatic(true);
        level2platform.setScale(1);

        let level3platform = this.matter.add.image(335, 500, 'platform', null, {label: 'level3Platform'}).setStatic(true);
        level3platform.setScale(1.2,1);

        let level4platform = this.matter.add.image(465, 500, 'platform', null, {label: 'level4Platform'}).setStatic(true);
        level4platform.setScale(1);

        let level5platform = this.matter.add.image(595, 500, 'platform', null, {label: 'level5Platform'}).setStatic(true);
        level5platform.setScale(1);

        let level6platform = this.matter.add.image(725, 500, 'platform', null, {label: 'level6Platform'}).setStatic(true);
        level6platform.setScale(1);

        levelOneText = this.add.text(30, 490, 'Level One', { fontSize: '16px'});
        levelTwoText = this.add.text(160, 490, 'Level Two', { fontSize: '16px'});
        levelThreeText = this.add.text(282, 490, 'Level Three', { fontSize: '16px'});
        levelFourText = this.add.text(420, 490, 'Level Four', { fontSize: '16px'});
        levelFiveText = this.add.text(547.5, 490, 'Level Five', { fontSize: '16px'});
        levelSixText = this.add.text(680, 490, 'Level Six', { fontSize: '16px'});

        levelOneText.setInteractive();
        levelTwoText.setInteractive();
        levelThreeText.setInteractive();
        levelFourText.setInteractive();
        levelFiveText.setInteractive();
        levelSixText.setInteractive();

        levelOneText.on('pointerup', () => { this.scene.start("gameScene") });
        levelTwoText.on('pointerup', () => { this.scene.start("sceneTwo") });
        levelThreeText.on('pointerup', () => { this.scene.start("sceneThree") });
        levelFourText.on('pointerup', () => { this.scene.start("sceneFour") });
        levelFiveText.on('pointerup', () => { this.scene.start("sceneFive") });
        levelSixText.on('pointerup', () => { this.scene.start("sceneSix") });

        let boundary = this.add.image(0, 225,'dropBoundary');
        boundary.setScale(2, 1);

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

        this.matter.world.on('collisionstart', function (event, bodyA, bodyB) {

            bodyA.gameObject.setTint(0xff0000);
            bodyB.gameObject.setTint(0x00ff00);

            if(bodyA.label == 'level1Platform')
            {
                L1 = true;
            }
            else if(bodyA.label == 'level2Platform')
            {
                L2 = true;
            }
            else if(bodyA.label == 'level3Platform')
            {
                L3 = true;
            }
            else if(bodyA.label == 'level4Platform')
            {
                L4 = true;
            }
            else if(bodyA.label == 'level5Platform')
            {
                L5 = true;
            }
            else if(bodyA.label == 'level6Platform')
            {
                L6 = true;
            }
        });

    }
}