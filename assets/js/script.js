const squares = document.getElementsByClassName('square')
const powerStation = document.getElementsByClassName('power-station')
const timeLeft = document.getElementById('time-left')
const score = document.getElementById('score')

let result = 0

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('powerStation')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('powerStation')

}

randomSquare()