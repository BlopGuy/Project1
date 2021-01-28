class Dino {
    constructor() {
        this.x = 20;
        this.y = 130;
        this.width = 60;
        this.height = 60;
        this.imgIdle = './images/t-rex.png';
        this.imgLeft = './images/dinoL.png';
        this.imgRight = './images/dinoR.png';
        this.goingDown = false;
    }

    drawDino(frame) {
        const dinoImg = new Image();
        switch (frame) {
            case 0:
                dinoImg.src = this.imgLeft;
                break;
            case 1:
                dinoImg.src = this.imgRight;
                break;

        }
        dinoContext.drawImage(dinoImg, this.x, this.y, this.width, this.height);

    }

    moveDino(keyCode) {
        switch (keyCode) {
            case 38:

                let jumping = setInterval(() => {
                    if (this.y > 25 && !this.goingDown) {
                        this.y -= 7;
                    } else {
                        this.goingDown = true;
                        this.y += 10;
                        if (this.y >= 130) {
                            clearInterval(jumping);
                            this.goingDown = false;
                            this.y = 130;
                        }
                    }
                }, 50);
                break;
        }

    }
}