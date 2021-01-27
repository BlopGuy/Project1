let dinoCanvas = document.querySelector('#dino-run');
let dinoContext = dinoCanvas.getContext('2d');

const image = new Image();
image.src = './images/t-rex-background.png';
const dino = new Dino();

document.onkeydown = e => {
    dino.moveDino(e.keyCode);
}

const backgroundImage = {
    image: image,
    x: 0,
    speed: -1,
    move: function() {
        this.x += this.speed; //-1 -2 -3 
        this.x %= dinoCanvas.width; //-500%500=0 => -1 -2 -3
    },
    draw: function() {
        dinoContext.drawImage(this.image, this.x, 0);
        dinoContext.drawImage(this.image, this.x + dinoCanvas.width, 0);
    }
}

function updateCanvas() {
      backgroundImage.move();
      backgroundImage.draw();
      dino.drawDino();

      
      requestAnimationFrame(updateCanvas);
}

updateCanvas();