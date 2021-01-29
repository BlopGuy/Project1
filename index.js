let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");

let currentGame;
let animationId;
let gamePlayed = false;

document.onkeydown = e => {
    if (e.keyCode == 37 || e.keyCode == 39) {
        currentGame.player.movePlayer(e.keyCode);
    } else if (e.keyCode = 38) {
        dino.moveDino(e.keyCode);
    }
}

function startGame() {
    currentGame = new Room();
    //Instantiate the player
    let playerChar = new Player();
    currentGame.player = playerChar;
    cancelAnimationFrame(animationId);
    updateCanvas();
}

function runDinoGame() {
    document.querySelector('#dino-html').classList.remove('hidden');
    document.querySelector('#room-html').classList.add('hidden');
}

function wakeUp() {
    document.querySelector('#start').classList.add('hidden');
    document.querySelector('#room-html').classList.remove('hidden');
    document.body.style.backgroundColor = '#3B403E';
}

function updateCanvas() {
    currentGame.player.drawPlayer();

    if (currentGame.player.x < 100 && gamePlayed == true) {
        document.querySelector('#room-html').classList.add('hidden');
        document.querySelector('#End').classList.remove('hidden');
        document.body.style.backgroundColor = '#171918';
    }

    if (currentGame.player.x > 650) {
        document.body.style.backgroundColor = '#FFF';
        runDinoGame();
        context.clearRect(0, 0, canvas.width, canvas.height);
        currentGame.player.x = 600;
    }
    animationId = requestAnimationFrame(updateCanvas);
}

startGame();