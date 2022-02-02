// Start of code for main game area
const squares = document.querySelectorAll('.square');
const coal = document.querySelector('.coal');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
const startButton = document.querySelector(".start-button");
const modal = document.querySelector(".modal");
const highScore = document.querySelector(".high-score");
const gameOver = document.querySelector(".game-over-text");
const windTurbine = document.querySelector(".wind-turbine");

let result = 0;
let maxScore = 0;
let hitPosition
let currentTime = 10;
let timerId = null;

// Code to pop-up the coal image on random grid squares
function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('coal');
    });
    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('coal');
    hitPosition = randomSquare.id;
}

// Code to provide a feedback flash and increase score with every hit
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            setTimeout(() => {
                document.body.classList.toggle("flash");
            }, 50);
            document.body.classList.toggle("flash");
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    });
});

// Start Game button functionality
startButton.addEventListener("click",() => {
    modal.classList.add("modalclose");
    function moveCoal() {
        timerId = setInterval(randomSquare, 700);
    }
    moveCoal();
});

// Game countdown function and trigger for End Game Sweet Alert pop-up screen
function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;
    if (currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        Swal.fire({
            title: 'CONGRATULATIONS! YOU STOPPED '+result+' POWER STATIONS BEING BUILT.',
            text: 'EARTH IS SAVED FOR ANOTHER 10 YEARS, PLAY AGAIN TO GIVE US MORE TIME!',
            confirmButtonText: 'PLAY AGAIN',
            allowOutsideClick: false,
            allowEscapeKey: false
            }).then(function() {
                window.location = "index.html";
            })
            }
        }

let countDownTimerId = setInterval(countDown, 1000);