/*
 *
 * The number guessing game, user tries to guess random number
 * and computer tells if it's greater or less than guessed number
 *
 */

function getRandomInteger(min, max) {
	return Math.floor(Math.random()*(max+1-min) + min);
}

var number = 0;

window.onload = function() {
	number = getRandomInteger(1,10);
};

function guessTheNumber(guess) {
	if(guess === number) {
		console.log("Right answer!");
	} else if(guess < number) {
		console.log("Greater");
	} else {
		console.log("Less");
	}
}