let squares = document.getElementsByClassName('square');
let powerStation = document.getElementsByClassName('power-station');
let timeLeft = document.getElementById('time-left');
let score = document.getElementById('score');

let result = 0
let hitPosition

function randomSquare() {
    for (let i = 0; i <= squares.length; i++) {
        square.classList.remove('powerStation')
    }

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('powerStation')

    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown' () => {
        if (square.id == ) {
            result++
            score.innerHTML = result
            hitPosition = null
        }
})

// Add timerID to button to start the game here

function movePowerStation() {
    let timerId = null
    timerId = setInterval(randomSquare, 500)
}

movePowerStation()




