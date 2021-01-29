let dinoCanvas = document.querySelector('#dino-run');
let dinoContext = dinoCanvas.getContext('2d');

const image = new Image();
image.src = './images/t-rex-background.png';
const dino = new Dino();
let cacti = [];
let pteros = [];
let score = 0;
let cactusTimeStamps = [200,300,400];
let cactusTimer = 0;
let highScore = 0
let dinoFrame;
let walkTimer = 100;
let pteroTimer = 0;
let pteroTimeStamps = [1000,2000,3000];



const backgroundImage = {
    image: image,
    x: 0,
    speed: -3,
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
        (dino.y - 25 + dino.height < obstacle.y));
}

function addCactus() {
    if (cactusTimer <= 0) {
      cacti.push(new Cactus());
      cactusTimer = cactusTimeStamps[Math.floor(Math.random() * 3)];
    }
    cactusTimer -= 2;
  }

  function addPtero() {
    if (pteroTimer <= 0) {
      pteros.push(new Pterodactyl());
      pteroTimer = pteroTimeStamps[Math.floor(Math.random() * 3)];
    }
    pteroTimer -= 2;
  }

function drawWalk() {
    console.log(walkTimer);
    if (walkTimer <= 50) {
        dino.drawDino(0);
        walkTimer-= 2;
      } else if(walkTimer > 50){
        dino.drawDino(1);
        walkTimer-= 2;
      } 
      if(walkTimer === 0) {
        walkTimer = 100;
      }
}

function updateDinoCanvas() {
    backgroundImage.move();
    backgroundImage.draw();

    drawWalk();
    addCactus();
    addPtero();

    for(let i = 0; i < pteros.length; i++) {
        pteros[i].x -= 2;
        pteros[i].draw();

        if(pteros.length > 0 && pteros[i].x < (0 - pteros[i].width)) {
            pteros.splice(i, 1);
        }
    }

    for (let i = 0; i < cacti.length; i++) {
        cacti[i].x -= 3;
        cacti[i].draw();
        
        if (detectCollision(cacti[i])) {
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


        if (cacti.length > 0 && cacti[i].x < 0 - cacti[i].width) {
            cacti.splice(i, 1);
            score++;
            document.querySelector('#score-span').innerHTML = score;
        }

    }

    dinoFrame = requestAnimationFrame(updateDinoCanvas);
}

function returnRoom() {
    highScore = 0;
    gamePlayed = true;
    document.querySelector('#highscore-span').innerHTML = 0;
    document.querySelector('.instructions strong').innerHTML = 'Well, I suppose the Netflix servers don\'t need managing today... <br> <i>distant noises of angry costumers</i>'
    document.body.style.backgroundColor = '#3B403E';
    document.querySelector('#room-html').classList.remove('hidden');
    document.querySelector('#dino-html').classList.add('hidden');
}

updateDinoCanvas();