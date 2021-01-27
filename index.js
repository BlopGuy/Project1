let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");

let currentGame;
let animationId;

document.onkeydown = e => {
    currentGame.player.movePlayer(e.keyCode);
}

function startGame() {
    currentGame = new Room();
    //Instantiate the player
    let playerChar = new Player();
    currentGame.player = playerChar;
    cancelAnimationFrame(animationId);
    updateCanvas();
}

function updateCanvas() {
    currentGame.player.drawPlayer();
    animationId = requestAnimationFrame(updateCanvas);
}

startGame();