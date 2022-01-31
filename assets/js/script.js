/*
// Start game pop-up screen
Swal.fire({
    title: 'The years is 2035...',
    text: 'all attempts by world leaders to end profiting on fossil fuels have failed. You are the last hope and have just 60 seconds to hit back with renewable energy sources to save earth!',
    confirmButtonText: 'Start Game',
})*/

// Start of code for main game area
const squares = document.querySelectorAll('.square');
const coal = document.querySelector('.coal');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 60;
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
// Code to increase score with every hit
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    });
});


// Add timerID to button to start the game here
function moveCoal() {
    timerId = setInterval(randomSquare, 700);
}

moveCoal();

// Game countdown function and Game Over pop-up screen
function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        Swal.fire({
            title: 'You did it!',
            text: 'By stopping {$result} Power Stations burning fossil fuels, Earth is saved for another billion years. Remember to promote Renewable Energy and Go Green in everything you do!',
            confirmButtonText: 'Play Again'
        })
    }
}

let countDownTimerId = setInterval(countDown, 1000);

