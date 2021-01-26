let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");

let currentGame;



function startGame() {
    currentGame = new Room();
    //Instantiate the player
    let playerChar = new Player();
    currentGame.player = playerChar;
    currentGame.player.drawPlayer();
}

document.onkeydown = e => {
    currentGame.player.movePlayer(e.keyCode);
}




startGame();