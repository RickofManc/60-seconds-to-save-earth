// Declarations for manipulating the DOM
const squares = document.querySelectorAll('.square');
const coal = document.querySelector('.coal');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
const startButton = document.querySelector('.start-button');
const modal = document.querySelector('.modal');
const windTurbine = document.querySelector('.wind-turbine');

let result = 0;
let hitPosition;
let currentTime = 20;
let timerId = null;

let hit = new Audio('assets/sounds/score.wav');
let swipe = new Audio('assets/sounds/swipe.wav');

// Credit to Ania Kubow for providing the learning for game play functionality

// Credit to Kod Aktif for the flash and sound effects that provides user feedback on a successful hit
/** 
 * In-game function following a hit on a Power Station
 * Feedback on the hit is provided by a screen 'flash' and a 'hit' sound
 * Sound times reset to zero to ensure each hit has a sound
 * The wind turbine icon rotates to imitate a hitting action
 * User score is incremented by 1
 */
squares.forEach(square => {
	square.addEventListener('mousedown', () => {
		windTurbine.style.transform = 'rotateZ(50deg) rotateY (-180deg)';
        swipe.play();
        swipe.currentTime = 0;
        setTimeout(() => {
            windTurbine.style.transform ='rotateZ(-45deg) rotateY(-180deg)';
        }, 40);
        
        if (square.id == hitPosition) {
			setTimeout(() => {
				document.body.classList.toggle('flash');
			}, 50);
			document.body.classList.toggle('flash');
            hit.play();
            hit.currentTime = 0;
			result++;
			score.textContent = result;
			hitPosition = null;
		}
	});
});
// Credit to Sweet Alert 2 for providing the 'Swal' customisable alert code
/* 
 * In-game timer countdown function
 * From 60 seconds to 0
 * At 0 timer is cleared
 * At 0 Sweet Alert triggers informing of final score
 */
function countDown() {
	currentTime--;
	timeLeft.textContent = currentTime;
	if (currentTime == 0) {
		clearInterval(countDownTimerId);
		clearInterval(timerId);
		Swal.fire({
			title: 'Yes!! You prevented ' + result + ' power stations from being built.',
			text: 'Earth is saved for 50 years, play again to give us more time!',
			confirmButtonText: 'Play Again',
			allowOutsideClick: false,
			allowEscapeKey: false
		}).then(function() {
			window.location = 'index.html';
		});
	}
}
/*
 * Start game function
 * Awaits the user clicking 'Start Game' button
 * Modal opening screen disappears
 * Game starts with a Power Station appearing randomly every 700ms
 */
startButton.addEventListener('click', () => {
	modal.classList.add('modalclose');
	let countDownTimerId = setInterval(countDown, 1000);
	function moveCoal() {
		timerId = setInterval(randomSquare, 700);
	}
	moveCoal();
});
/** 
 * In-game function randomising which square the Power Station appears
 */
 function randomSquare() {
	squares.forEach(square => {
		square.classList.remove('coal');
	});
	let randomSquare = squares[Math.floor(Math.random() * 9)];
	randomSquare.classList.add('coal');
	hitPosition = randomSquare.id;
}