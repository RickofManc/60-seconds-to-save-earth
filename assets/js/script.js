const squares = document.querySelector('.square')
const powerStation = document.querySelector('.power-station')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

function randomSquare() {
    for (let i = 0; i <= squares.length; i++) {
        square.classList.remove('powerStation')
    }

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('powerStation')

    hitPosition = randomSquare.id
}

for (let i = 0; i <= squares.length; i++) {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.innerHTML = result
            hitPosition = null
        }
    })
}

// Add timerID to button to start the game here

function movePowerStation() {
    timerId = setInterval(randomSquare, 500)
}

movePowerStation()

// Add alert to game over card

function countDown() {
    currentTime--
    timeLeft.innerHTML = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('You did it! By stopping {$result} Power Stations burning fossil fuels, Earth is saved for another billion years. Remember to promote Renewable Energy and Go Green in everything you do!')
    }
}

let countDownTimerId = setInterval(countDown, 1000)




