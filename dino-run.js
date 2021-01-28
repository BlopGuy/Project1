let dinoCanvas = document.querySelector('#dino-run');
let dinoContext = dinoCanvas.getContext('2d');

const image = new Image();
image.src = './images/t-rex-background.png';
const dino = new Dino();
let cacti = [];
let cactiFrequency = 2;
let score = 0;
let cactusTimer = 0;
let highScore = 0
let dinoFrame;



const backgroundImage = {
    image: image,
    x: 0,
    speed: -1,
    move: function () {
        this.x += this.speed; //-1 -2 -3 
        this.x %= dinoCanvas.width; //-500%500=0 => -1 -2 -3
    },
    draw: function () {
        dinoContext.drawImage(this.image, this.x, 0);
        dinoContext.drawImage(this.image, this.x + dinoCanvas.width, 0);
    }
}

function detectCollision(obstacle) {
    return !((dino.x - 15 + dino.width < obstacle.x) ||
        (dino.y - 15 + dino.height < obstacle.y));
}

function addCactus() {
    if (cactusTimer <= 0) {
      cacti.push(new Cactus());
      cactusTimer = 200;
    }
    cactusTimer -= 1;
  }

function updateDinoCanvas() {
    backgroundImage.move();
    backgroundImage.draw();
    dino.drawDino();
    addCactus();

    for (let i = 0; i < cacti.length; i++) {
        cacti[i].x -= 2;
        cacti[i].draw();
        
        if (detectCollision(cacti[i])) {
            cactiFrequency = 0;
            if(score > highScore) {
                highScore = score;
                document.querySelector('#highscore-span').innerHTML = highScore;
            }
            score = 0;
            document.querySelector('#score-span').innerHTML = 0;
            cacti = [];
            dino.x = 20;
            dino.y = 130;
        }


        if (cacti.length > 0 && cacti[i].x <= 0) {
            cacti.splice(i, 1);
            score++;
            document.querySelector('#score-span').innerHTML = score;
        }

    }

    dinoFrame = requestAnimationFrame(updateDinoCanvas);
}

function returnRoom() {
    document.querySelector('#room-html').classList.remove('hidden');
    document.querySelector('#dino-html').classList.add('hidden');
}

updateDinoCanvas();