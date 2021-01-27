class Player {
    constructor() {
        this.x = 20;
        this.y = 190;
        this.width = 190;
        this.height = 200;
        this.img = './images/playerL.png';
    }

    drawPlayer() {
        const playerImg = new Image();
        playerImg.src = this.img;
        context.drawImage(playerImg, this.x, this.y, this.width, this.height);
    }

    movePlayer(keyCode) {
        context.clearRect(this.x, this.y, this.width, this.height);
        switch(keyCode) {
            case 37:
                this.img = './images/playerL.png';
                if (this.x > 0) {
                    this.x -= 6;
                }
            break;
            case 39:
                this.img = './images/playerR.png';
                if (this.x < 700) {
                    this.x += 6;
                }
            break;
        }
    }
}