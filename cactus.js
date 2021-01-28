class Cactus {
    constructor(){
        this.x = 525;
        this.y = 130;
        this.width = 60;
        this.height = 60;
        this.image = './images/cacti.png'
    }

    draw() {
        const cactusImg = new Image();
        cactusImg.src = this.image;
        dinoContext.drawImage(cactusImg, this.x, this.y, this.width, this.height);
    }

    move() {

        let moveLeft = setInterval(() => {
            console.log('im here');
            this.x -= 2;
            if(this.x < 0) {
                clearInterval(moveLeft);
            }
        }, 50);
    }
}