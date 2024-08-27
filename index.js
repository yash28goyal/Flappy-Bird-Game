let gameArea = document.getElementById('container');
let bird = document.getElementById('bird');
let startBtn = document.getElementById('start_btn');
let restartBtn = document.getElementById('restart');
let highScore = document.getElementById('highscore');
let score = document.getElementById('score');
let dieSount = document.getElementById('die');
let hitSound = document.getElementById('hit');
let wingSound = document.getElementById('wing');
let pointSound = document.getElementById('point');

let birdY = 100;
let birdVelocity = 0;
let gravity = 0.5;
let Score = 0;
let game = false;

let gameInterval, obstacleInterval;
gameInterval = setInterval(()=>{
    birdY += 10;
    bird.style.top = birdY + "px";  
    gameOver()
},10);

function gameOver() {
    if(birdY < 0 || birdY >= container.clientHeight-89) {
        hitSound.play();
        clearInterval(gameInterval)
    }
}

// console.log(gameArea.clientHeight);

window.addEventListener("keydown", fly)

function fly(e) {
    if(e.code === "Space" && !gameOver){
        
    }    
}