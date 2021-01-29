class Pterodactyl {
    constructor() {
        this.x = 525;
        this.y = 50;
        this.width = 87;
        this.height = 64;
        this.img = './images/pterodactyl.png';
    }

    draw() {
    
        const pterodactylImg = new Image();
        pterodactylImg.src = this.img;
        dinoContext.drawImage(pterodactylImg, this.x, this.y, this.width, this.height);
        
    }
} 