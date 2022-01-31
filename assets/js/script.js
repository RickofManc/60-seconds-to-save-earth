Swal.fire({
    text: 'The year is 2035, all attempts by world leaders to end their profiting on fossil fuels have failed. <br> You are the last hope and have just 60 seconds to hit back with aa renewable energy source and save Earth!',
    confirmButtonText: 'Start'
})


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

// Add alert to game over card
function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('You did it! By stopping {$result} Power Stations burning fossil fuels, Earth is saved for another billion years. Remember to promote Renewable Energy and Go Green in everything you do!');
    }
}

let countDownTimerId = setInterval(countDown, 1000);




