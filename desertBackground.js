class DesertBackground {
    constructor() {
        this.image = './images/t-rex-background.png';
        this.x = 0;
        this.speed = -1;
    }

    move(width) {
        this.x += this.speed;
        this.x %= width;
    }

    draw(width) {
        dinoContext.drawImage(this.image, this.x, 0);
        dinoContext.drawImage(this.image, this.x + width, 0);
    }
}