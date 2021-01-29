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
        this.jumping = false;
    }

    drawDino(frame) {
        const dinoImg = new Image();
        if(this.jumping == true) {
            dinoImg.src = this.imgIdle;

        } else {
            switch (frame) {
                case 0:
                    dinoImg.src = this.imgLeft;
                    break;
                case 1:
                    dinoImg.src = this.imgRight;
                    break;
            }
        }
        dinoContext.drawImage(dinoImg, this.x, this.y, this.width, this.height);
    }

    moveDino(keyCode) {
        if(this.jumping === false) {
            switch (keyCode) {
                case 38:
                    this.jumping = true;
                    let jumping = setInterval(() => {
                        if (this.y > 35 && !this.goingDown) {
                            this.y -= 6;
                        } else {
                            this.goingDown = true;
                            this.y += 7;
                            if (this.y >= 130) {
                                clearInterval(jumping);
                                this.jumping = false;
                                this.goingDown = false;
                                this.y = 130;
                            }
                        }
                    }, 50);
                    break;
            }
        }
        

    }
}