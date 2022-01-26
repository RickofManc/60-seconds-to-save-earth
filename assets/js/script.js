let squares = document.getElementsByClassName('square')
let powerStation = document.getElementsByClassName('power-station')
let timeLeft = document.getElementById('time-left')
let score = document.getElementById('score')

let result = 0

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('powerStation')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('powerStation')
}

// Add button to start the game here

function movePowerStation() {
    let timerId = null
    timerId = setInterval(randomSquare, 500)
}

movePowerStation()


