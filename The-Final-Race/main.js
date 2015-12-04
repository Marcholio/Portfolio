/*global window */
/*global $, jQuery*/

//--global variables
var canvas = null;
var context = null;
var giveAMinion = false;
var giveAMinionHealth = 0;
var giveAMinionAttack = 0;
var player1Taunt = false;
var player2Taunt = false;
var drawedCards = 0;
var player1Destroy = false;
var player2Destroy = false;
var toEverything = 0;
var player1Deal = 0;
var player2Deal = 0;
var msg = "";
var lastX = -10;
var lastY = -10;

//---video variables
var intro = null;
var tutorialVid = null;
var bavarianVid = null;
var blueVid = null;
var dogfightingVid = null;
var cashVid = null;
var fasterVid = null;
var redVid = null;
var sharpVid = null;
var smoothVid = null;
var easterVid = null;

var tutorialIsPlaying = false;
var bavarianIsPlaying = false;
var blueIsPlaying = false;
var dogfightingIsPlaying = false;
var cashIsPlaying = false;
var fasterIsPlaying = false;
var redIsPlaying = false;
var sharpIsPlaying = false;
var smoothIsPlaying = false;
var easterIsPlaying = false;

//determines the player in turn, player1 goes first
var turn = 1

//empty card to be used in checked card position
var emptycard_img = new Image();
var card_empty = newCard({
	canvas: canvas,
	context: context,
	cost: 0,
	attack: 0,
	health: 0,
	image: emptycard_img,
	name: "empty",
	isSpell: false,
	description: ""
});
emptycard_img.src = "./icons/emptycard.png";

//---variables to determine state of the game
var inGame = false;
var inMenu = false;
var inGameOver = false;

var cards = cardStorage();

var background = new Image();
background.src = "./icons/Background.jpg";

//---set up players---
var image1 = new Image();
var deck1_img = new Image();
var player1 = newHero({
	canvas: canvas,
	context: context,
	name: "player1",
	src: "./icons/hero1.jpg",
	x: 625,
	y: 450,
	width: 200,
	height: 125
});
image1.src = player1.src;
player1.updateGas();
deck1_img.src = "./icons/deck.jpg";

var image2 = new Image();
var player2 = newHero({
	canvas: canvas,
	context: context,
	name: "player2",
	src: "./icons/hero2.jpg",
	x: 625,
	y: 20,
	width: 200,
	height: 125
});
image2.src = player2.src;

//---rest of images
var gameLogo = new Image();
gameLogo.src = "Logo.jpg";

var gasFull = new Image();
gasFull.src = "./icons/moneyFull.png";
var gasEmpty = new Image();
gasEmpty.src = "./icons/moneyEmpty.png";

var handImg = new Image();
handImg.src = "./icons/hand.png";

//---initialize canvas when window is loaded
window.onload = initCanvas();


//initialize canvas
function initCanvas() {
	listenMouse(player1, player2);
	canvas = document.querySelector("canvas");
  	context = canvas.getContext("2d");
  	canvas.width = 1300;
  	canvas.height = 600;

  	document.getElementById('game').style.marginTop = (document.querySelector("html").clientHeight - canvas.offsetHeight)/2
  	
  	//---initialize videos
  	intro = document.getElementById("Intro");
  	tutorialVid = document.getElementById("Tutorial");
  	bavarianVid = document.getElementById("Bavarian");
  	blueVid = document.getElementById("Blue-end");
  	dogfightingVid = document.getElementById("Dogfighting");
  	cashVid = document.getElementById("Cash");
  	fasterVid = document.getElementById("Faster");
  	redVid = document.getElementById("Red-end");
  	sharpVid = document.getElementById("Sharp");
  	smoothVid = document.getElementById("Smooth");
  	easterVid = document.getElementById("Easter");


  	intro.preload = true;
  	tutorialVid.preload = true;
  	bavarianVid.preload = true;
  	blueVid.preload = true;
  	dogfightingVid.preload = true;
  	cashVid.preload = true;
  	fasterVid.preload = true;
  	redVid.preload = true;
  	sharpVid.preload = true;
  	smoothVid.preload = true;
  	easterVid.preload = true;

  	player1.canvas = canvas;
  	player2.canvas = canvas;
  	player1.context = context;
  	player2.context = context;

	var supported = context !== null;

	//---play intro video
	intro.play();
	var animate = window.requestAnimationFrame(videoLoop);
	function videoLoop() {
		animate = window.requestAnimationFrame(videoLoop);
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.drawImage(intro, 0, 0, canvas.width+20, canvas.height+10);
		if(intro.currentTime > 5) {
			context.fillStyle = "#FFFFFF";
			context.font = "15px Arial";
			context.fillText("Skip", 1200, 580);
		}
		if(intro.ended && supported) {
			window.cancelAnimationFrame(animate);
			menu();
		}
	}
}


//main menu view
function menu() {
	player1.initialize();
	player2.initialize();
	msg = "";
	inMenu = true;
	inGame = false;
	inGameOver = false;

	var animate = window.requestAnimationFrame(videoLoop);
	function videoLoop() {
		animate = window.requestAnimationFrame(videoLoop);
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.fillStyle = "#000000";
		context.fillRect(0, 0, canvas.width, canvas.height);
		context.drawImage(gameLogo, 0, 0, canvas.width, canvas.height);
		context.fillStyle = "#FFFFFF";
		context.font = "50px Arial";
		context.fillText("Play game", 300, 500);
		context.fillText("Watch tutorial", 700, 500);
		//tutorial video
		if(tutorialIsPlaying) {
			context.drawImage(tutorialVid, 0, 0, canvas.width, canvas.height);
			tutorialIsPlaying = !tutorialVid.ended;
			context.fillStyle = "#FFFFFF"
			context.font = "20px Arial"
			context.fillText("Menu", 1200, 580)
		}
	}
}


//run game
function run() {
	inGame = true;
	inMenu = false;

	//---end turn button---
	var endTurn1 = new Image();
	endTurn1.src = "./icons/endturn1.png";
	var endTurn2 = new Image();
	endTurn2.src = "./icons/endturn2.png";

	endTurn1.onload = function() {
		context.drawImage(endTurn1, 1080, 250);
	}

	player1.checkedCard = card_empty;
	player2.checkedCard = card_empty;

	//fill both decks
	player1.deck.push(cards[0], cards[1], cards[2], cards[3], cards[4], cards[5], cards[6], cards[7], cards[8], cards[9], cards[10], cards[11], cards[12], cards[13], cards[14], cards[15], cards[16], cards[17], cards[18], cards[19], cards[20], cards[21], cards[22], cards[23], cards[24], cards[25], cards[26], cards[27], cards[28], cards[29]);
	player2.deck.push(cards[30], cards[31], cards[32], cards[33], cards[34], cards[35], cards[36], cards[37], cards[38], cards[39], cards[40], cards[41], cards[42], cards[43], cards[44], cards[45], cards[46], cards[47], cards[48], cards[49], cards[50], cards[51], cards[52], cards[53], cards[54], cards[55], cards[56], cards[57], cards[58], cards[59]);
	player1.shuffleDeck();
	player2.shuffleDeck();

	//draw starting cards
	for(i = 0; i < 5; i++) {
		player1.drawCard();
	}
	for(j = 0; j < 5; j++) {
		player2.drawCard();
	}
	player1.maxGas += 1;
	player1.curGas = player1.maxGas;
	

	//main loop
	var game = window.requestAnimationFrame(gameLoop);
	function gameLoop() {
		game = window.requestAnimationFrame(gameLoop);
		context.clearRect(0, 0, canvas.width, canvas.height);
		//---background---
		context.drawImage(background, 0, 0, canvas.width, canvas.height);
		//---players---
		player1.render(player1.x, player1.y, image1, player1.chosen);
		player2.render(player2.x, player2.y, image2, player2.chosen);
		//---end turn -button---
		if(turn == 1) context.drawImage(endTurn1, 1160, 260);
		else context.drawImage(endTurn2, 1160, 260);
		
		//---cards on table---
		player1.renderTable();
		player2.renderTable();
		//---deck image---
		player1.renderDeck(deck1_img);
		player2.renderDeck(deck1_img);
		//---hand cards---
		player1.renderHand();
		player2.renderHand();
		//---xx cards left---
		player1.deckInfo();
		player2.deckInfo();
		//---big card on the left---
		player1.renderHandCard();
		player2.renderHandCard();
		//---message to help player---
		context.font = "20px Arial";
		context.fillText(msg, 500, 300);
		//---check if game is over---
		if(player1.health <= 0) gameOver(2);
		else if(player2.health <= 0) gameOver(1);
		//---render video---
		if(bavarianIsPlaying) {
			context.drawImage(bavarianVid, 100, 50, 1100, 500);
			bavarianIsPlaying = !bavarianVid.ended;
		} else if(dogfightingIsPlaying) {
			context.drawImage(dogfightingVid, 100, 50, 1100, 500);
			dogfightingIsPlaying = !dogfightingVid.ended;
		} else if(cashIsPlaying) {
			context.drawImage(cashVid, 100, 50, 1100, 500);
			cashIsPlaying = !cashVid.ended;
		} else if(fasterIsPlaying) {
			context.drawImage(fasterVid, 100, 50, 1100, 500);
			fasterIsPlaying = !fasterVid.ended;
		} else if(sharpIsPlaying) {
			context.drawImage(sharpVid, 100, 50, 1100, 500);
			sharpIsPlaying = !sharpVid.ended;
		} else if(smoothIsPlaying) {
			context.drawImage(smoothVid, 100, 50, 1100, 500);
			smoothIsPlaying = !smoothVid.ended;
		} else if(easterIsPlaying) {
			context.drawImage(easterVid, 100, 50, 1100, 500);
			easterIsPlaying = !easterVid.ended;
		}
		//---deal damage to everything---
		if(toEverything > 0) {
			player1.health -= toEverything;
			player2.health -= toEverything;
			for(i = 0; i < player1.table.length; i++) {
				player1.table[i].health -= toEverything;
			}
			for(j = 0; j < player2.table.length; j++) {
				player2.table[j].health -= toEverything;
			}
			toEverything = 0;
		}
		//---clear dead minions off table---
		player1.clearDead();
		player2.clearDead();
	}
	

	//game over screen
	function gameOver(winner) {
		//---initialize variables---
		inGame = false;
		inGameOver = true;
		giveAMinion = false;
		giveAMinionHealth = 0;
		giveAMinionAttack = 0;
		player1Taunt = false;
		player2Taunt = false;
		drawedCards = 0;
		player1Destroy = false;
		player2Destroy = false;
		toEverything = 0;
		player1Deal = 0;
		player2Deal = 0;
		msg = "";
		turn = 1
		player1.chosen = false;
		player2.chosen = false;

		window.cancelAnimationFrame(game);
		
		//---ending video---
		if(winner == 1) {
			blueVid.play();
			blueIsPlaying = true;
		} else {
			redVid.play();
			redIsPlaying = true;
		}

		var animate = window.requestAnimationFrame(videoLoop);
		function videoLoop() {
			animate = window.requestAnimationFrame(videoLoop);
			context.clearRect(0, 0, canvas.width, canvas.height);
			if(winner == 1) {
				context.drawImage(blueVid, 0, 0);
				if(blueVid.ended) {
					blueIsPlaying = false;
					menu();
					window.cancelAnimationFrame(animate);
				}	
			} else {
				context.drawImage(redVid, 0, 0);
				if(redVid.ended) {
					redIsPlaying = false;
					menu();
					window.cancelAnimationFrame(animate);
				}
			}
			
		}
	}
}