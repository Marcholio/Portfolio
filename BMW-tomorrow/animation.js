/*global window */
/*global $, jQuery*/

var canvas = null;
var context = null;

window.onload = initCanvas();

/*
initializes canvas
*/

function initCanvas() {
	canvas = document.querySelector("canvas");
  	context = canvas.getContext("2d");

  	canvas.width = 1000;
  	canvas.height = 500;

	var music = new Audio("soundtrack.wav"); 
	music.addEventListener('ended', function() {
    	this.currentTime = 0;
    	this.play();
	}, false);
	music.play();

	//if canvas is supported, load player sprite
	var supported = context !== null;
	if (supported) loadPlayerImg(music);
}

function runGame(playerImg, enemyImg, music, mute) {

	//common variables for enemies and player
	var width = 262;		//sprite width
	var height = 72;		//sprite height
	var imgWidth = 100;		//image on canvas
	var imgHeight = 50;
	var active = true;		//all enemies are active
	var muted = mute;

	var background = backgroundSprite({
		canvas: canvas,
		context: context,
		width: 10000,
		height: 500,
		src: "Game_background.png"
	});

	var points = 0;
	var hs1 = 0;
	var hs2 = 0;
	var hs3 = 0;
	var hs4 = 0;
	var hs5 = 0;
	var hs6 = 0;
	var hs7 = 0;
	var hs8 = 0;
	var hs9 = 0;
	var hs10 = 0;

	var highscores = [hs1, hs2, hs3, hs4, hs5, hs6, hs7, hs8, hs9, hs10];

	if(localStorage.getItem("highscores_tyr") !== null) {
		if(localStorage.getItem("highscores_tyr").length == 10) {
			highscores = JSON.parse(localStorage.getItem("highscores_tyr"));
		}
	} else {
		var tmp = JSON.stringify(highscores);
		localStorage.setItem("highscores_tyr", tmp);
	}

	//new player to the center of the canvas
	var player = newPlayer({
		canvas: canvas,
		context: context,
		width: width,
		height: height,
		image: playerImg,
		imgWidth: imgWidth,
		imgHeight: imgHeight,
		x: canvas.width/2,
		y: canvas.height/2,
		speed: 10,
		dirX: 0,
		dirY: 0
	});

	player.x -= player.width/4;
	player.y -= player.height/2;

	//initialize enemies
	var enemy1 = newEnemy({
		canvas: canvas,
		context: context,
		width: width,
		height: height,
		image: enemyImg,
		imgWidth: imgWidth,
		imgHeight: imgHeight,
		x: Math.random()*(canvas.width-imgWidth),
		y: Math.random()*(canvas.height-imgHeight),
		active: active,
		speedX: Math.random()*10-5,
		speedY: Math.random()*10-5
	});

	var enemy2 = newEnemy({
		canvas: canvas,
		context: context,
		width: width,
		height: height,
		image: enemyImg,
		imgWidth: imgWidth,
		imgHeight: imgHeight,
		x: Math.random()*(canvas.width-imgWidth),
		y: Math.random()*(canvas.height-imgHeight),
		active: active,
		speedX: Math.random()*10-5,
		speedY: Math.random()*10-5
	});

	var enemy3 = newEnemy({
		canvas: canvas,
		context: context,
		width: width,
		height: height,
		image: enemyImg,
		imgWidth: imgWidth,
		imgHeight: imgHeight,
		x: Math.random()*(canvas.width-imgWidth),
		y: Math.random()*(canvas.height-imgHeight),
		active: active,
		speedX: Math.random()*10-5,
		speedY: Math.random()*10-5
	});

	var enemy4 = newEnemy({
		canvas: canvas,
		context: context,
		width: width,
		height: height,
		image: enemyImg,
		imgWidth: imgWidth,
		imgHeight: imgHeight,
		x: Math.random()*(canvas.width-imgWidth),
		y: Math.random()*(canvas.height-imgHeight),
		active: active,
		speedX: Math.random()*10-5,
		speedY: Math.random()*10-5
	});

	//set up game
	var enemies = [enemy1, enemy2, enemy3, enemy4];
	
	background.render();
	player.render(player.x, player.y);
	for (var i = 0; i < enemies.length; i++) {
		var nClear = true;
		while (nClear) {
			for(var j = 0; j < enemies.length; j++) {
				if(j !== i) nClear = enemies[i].checkPos(enemies[j]);
			}
			nClear = nClear || enemies[i].checkPos(player);
			if(nClear) {
				enemies[i].x = Math.random()*(canvas.width-imgWidth);
				enemies[i].y = Math.random()*(canvas.height-imgHeight);
			}
		}

		while(Math.sqrt(Math.pow(enemies[i].speedX,2) + Math.pow(enemies[i].speedY, 2)) < 6 ) {
			enemies[i].speedX = Math.random()*10-5;
			enemies[i].speedY = Math.random()*10-5;
		}

		while(Math.abs(enemies[i].x - player.x + player.imgWidth) < 100 || Math.abs(enemies[i].y - player.y + player.imgHeight) < 100 ||
			  Math.abs(enemies[i].x + enemies[i].imgWidth - player.x) < 100 || Math.abs(enemies[i].y + enemies[i].imgHeight - player.y) < 100) {
			enemies[i].x = Math.random()*(canvas.width-imgWidth);
			enemies[i].y = Math.random()*(canvas.height-imgHeight);
		}
		enemies[i].render(enemies[i].x, enemies[i].y);
	}
	drawButtons(muted);
	var animation = window.requestAnimationFrame(gameLoop);
	listenKeys();
	listenMouse();

	//draw speed buttons
	function drawButtons(muted) {
		context.fillStyle = "rgba(17, 23, 22, .6)";
		context.fillRect(630, 5, 995, 35);
		context.fillStyle ="#FFFFFF";
		context.font = "25px Impact";
		context.fillText("Slower", 780, 30, 100, 50);
		context.fillText("Faster", 900, 30, 100, 50);
		if(muted) {
			context.fillText("Unmute", 650, 30, 100, 50);
		} else {
			context.fillText("Mute", 650, 30, 100, 50);
		}
	}

	//main loop
	function gameLoop() {
		points++;
		animation = window.requestAnimationFrame(gameLoop);
		context.clearRect(0, 0, canvas.width, canvas.height);
		background.updateIndex();
		background.render();

		//---player---
		player.updateIndex();
		player.updatePos();
		player.checkPos();
		player.render(player.x, player.y);
		var ended = false;
		for(j = 0; j < enemies.length; j++) {
			ended = ended || player.checkCollision(enemies[j]);
		}

		if(ended) gameOver(muted);

		//---enemies---
		for(var k = 0; k < enemies.length; k++) {
			enemies[k].updateIndex();
			enemies[k].updatePos();
			enemies[k].checkWall();
			for(var l = k+1; l < enemies.length; l++) { 
				if(enemies[k].checkCollision(enemies[l])){
					while(enemies[k].collisionHelper(enemies[l])) {
						enemies[k].updatePos();	
					}
				} 
			}
			if(enemies[k].active) enemies[k].render(enemies[k].x, enemies[k].y);
		}
		
		drawButtons(muted);
	}

	//keyboard controls
	function listenKeys() {
		$(document).keyup(function(e) {
			var left = 37;
			var up = 38;
			var right = 39;
			var down = 40;
			var a = 65;
			var w = 87;
			var d = 68;
			var s = 83;
			if(e.keyCode == left || e.keyCode == right || e.keyCode == a || e.keyCode == d) {
				e.preventDefault();
				player.dirX = 0;
			} else if(e.keyCode == up || e.keyCode == down || e.keyCode == w || e.keyCode == s) {
				e.preventDefault();
				player.dirY = 0;
			}
		});

		$(document).keydown(function(e) {
			var left = 37;
			var up = 38;
			var right = 39;
			var down = 40;
			var a = 65;
			var w = 87;
			var d = 68;
			var s = 83;
			if(e.keyCode == left || e.keyCode == a) {
				e.preventDefault();
				player.dirX = -1;
			} else if(e.keyCode == right || e.keyCode == d) {
				e.preventDefault();
				player.dirX = 1;
			} else if(e.keyCode == up || e.keyCode == w) {
				e.preventDefault();
				player.dirY = -1;
			} else if(e.keyCode == down || e.keyCode == s) {
				e.preventDefault();
				player.dirY = 1;
			}

		});


	}

	//mouse controls
	function listenMouse() {
		$(document).mousedown(function(e) {
			var x = e.pageX;
			var y = e.pageY;
			x -= canvas.offsetLeft;
			y -= canvas.offsetTop;
			x = (1000/700)*x;
			y = (500/400)*y;

			if(x >= enemy1.x && x <= enemy1.x + enemy1.width && y >= enemy1.y && y <= enemy1.y + enemy1.height && (x < 780 || y > 30)) {
				enemy1.active = false;
			} else if(x >= enemy2.x && x <= enemy2.x + enemy2.width && y >= enemy2.y && y <= enemy2.y + enemy2.height && (x < 780 || y > 30)) {
				enemy2.active = false;
			} else if(x >= enemy3.x && x <= enemy3.x + enemy3.width && y >= enemy3.y && y <= enemy3.y + enemy3.height && (x < 780 || y > 30)) {
				enemy3.active = false;
			} else if(x >= enemy4.x && x <= enemy4.x + enemy4.width && y >= enemy4.y && y <= enemy4.y + enemy4.height && (x < 780 || y > 30)) {
				enemy4.active = false;
			} else if(x >= 780 && x < 880 && y <= 30) {
				player.speed -= 5;
			} else if(x > 900 && y <= 30) {
				player.speed += 5;
			} else if(x >= 650 && x < 730 && y <= 30) {
				if(muted) {
					music.play();
				} else {
					music.pause();
				}
				muted = !muted;
			}
		});
	}

	//stops animation and adds text "game over - xxxx points"
	function gameOver() {
		var over = true;
		var score = points;
		highscores = JSON.parse(localStorage.getItem("highscores_tyr"));
		var newHigh = false;
		
		for(j = 0; j < highscores.length; j++) {
			var tmp = highscores[j];
			if(points > highscores[j]) {
				highscores[j] = points;
				points = tmp;
				if(j === 0) newHigh = true;
			}
		}
		var highscoreString = JSON.stringify(highscores);
		localStorage.setItem("highscores_tyr", highscoreString);
		window.cancelAnimationFrame(animation);
		window.setTimeout(function() {
			context.fillStyle = "rgba(17,23,22,.6)";
			context.fillRect(200, 100, 600, 300);
			context.fillStyle = "#FFFFFF";
			context.font = "50px Impact";
			context.fillText("Game Over", 250, 200, 150, 200);
			context.font = "35px Impact";
			context.fillText("Score: " + score, 250, 250, 150, 200);
			context.fillText("New game", 250, 350, 150, 200);
			context.font = "25px Impact";
			context.fillText("Highscores:", 500, 130, 150, 200);
			context.font = "20px Impact";
			for(i = 0; i < highscores.length; i++) {
				context.fillText(i+1 + ":     " + highscores[i], 500, 160+i*25, 150, 200);
			}
			if(newHigh) {
				context.fillText("New highscore!", 250, 280, 150, 200);
			}
			
			newGame(muted);
		}, 10);
		

		function newGame(mute) {
			$(document).mousedown(function(e) {
				var x = e.pageX;
				var y = e.pageY;
				x -= canvas.offsetLeft;
				y -= canvas.offsetTop;
				x = (1000/700)*x;
				y = (500/400)*y;

				if(x >= 250 && x <= 400 && y >= 300 && y <= 370 && over) {
					over = false;
					runGame(playerImg, enemyImg, music, mute);
				}
			});
		}		
	}
}

function backgroundSprite(options) {
	var that = {};
	that.canvas = options.canvas;
	that.context = options.context;
	that.width = options.width;
	that.height = options.height;
	that.src = options.src;
	
	var image = new Image();
	image.src = that.src;
	var index = 0;
	var tickCount = 0;
	var ticksPerFrame = 1;

	that.render = function() {
		that.context.drawImage(image, index*that.width/10, 0, that.width/10, that.height, 0, 0, canvas.width, canvas.height);
	};

	that.updateIndex = function() {
		tickCount++;

		if(tickCount > ticksPerFrame) {
			tickCount = 0;
			index--;
			if(index === -1) {
				index = 9;
			}
		}
	};

	return that;
}