class Dino {
    constructor() {
        this.x = 20;
        this.y = 130;
        this.width = 60;
        this.height = 60;
        this.img = './images/t-rex.png';
        this.goingDown = false;
    }

    drawDino() {
        const dinoImg = new Image();
        dinoImg.src = this.img;
        dinoContext.drawImage(dinoImg, this.x, this.y, this.width, this.height);
    }

    moveDino(keyCode) {
        switch (keyCode) {
            case 38:
                console.log('jumping');
                let jumping = setInterval(() => {
                    if (this.y > 50 && !this.goingDown) {
                        console.log('jumping');
                        this.y -= 10;
                    } else {
                        this.goingDown = true;
                        this.y += 10;
                        if (this.y === 130) {
                            clearInterval(jumping);
                            this.goingDown = false;
                        }
                    }
                }, 50);
                break;
        }

    }
}