function newPlayer (options) {
	var that = {};
	that.canvas = options.canvas;
	that.context = options.context;
	that.width = options.width;
	that.height = options.height;
	that.image = options.image;
	that.imgWidth = options.imgWidth;
	that.imgHeight = options.imgHeight;
	that.x = options.x;
	that.y = options.y;
	that.speed = options.speed;
	that.dirX = options.dirX;
	that.dirY = options.dirY;

	var index = 0;
	var tickCount = 0;
	var ticksPerFrame = 30;

	//draw player to position (x,y)
	that.render = function(x, y) {
		that.context.drawImage(that.image, index*that.width/2, 0, that.width/2, that.height, x, y, that.imgWidth, that.imgHeight);
	};

	//update tick counter, update sprite frame if necessary
	that.updateIndex = function() {
		tickCount++;

		if(tickCount > ticksPerFrame) {
			tickCount = 0;
			index ++;
			if (index === 2) index = 0;
		}
			
	};

	//update position
	that.updatePos = function() {
		that.x += that.dirX * that.speed;
		that.y += that.dirY * that.speed;
	};

	//check if player is out of canvas
	that.checkPos = function() {
		if (that.x < 0) that.x = 0;
		if (that.x + that.imgWidth > that.canvas.width) that.x = that.canvas.width-that.imgWidth;
		if (that.y < 0) that.y = 0;
		if (that.y + that.imgHeight > that.canvas.height) that.y = that.canvas.height-that.imgHeight;
	};

	//check if player collided with enemy
	that.checkCollision = function(enemy) {
		if ((that.collisionHelper(enemy)) && enemy.active) {
			return true;
		} else {
			return false;
		}
	};

	//helper function to check collisions, return true if collision occurred
	that.collisionHelper = function(enemy) {
		if(	
			(
				( //enemy from right
				that.x + that.imgWidth >= enemy.x &&
				that.x + that.imgWidth <= enemy.x + enemy.imgWidth
				) && 
				(
					( //enemy from above
					that.y >= enemy.y &&
					that.y <= enemy.y + enemy.imgHeight
					) ||
					( //enemy from below
					that.y + that.imgHeight >= enemy.y &&
					that.y + that.imgHeight <= enemy.y + enemy.imgHeight
					)
				)
			) ||
			(
				( //enemy from left
				that.x >= enemy.x && 
				that.x <= enemy.x + enemy.imgWidth
				) && 
				(
					( //enemy from above
					that.y >= enemy.y &&
					that.y <= enemy.y + enemy.imgHeight
					) ||
					( //enemy from below
					that.y + that.imgHeight >= enemy.y &&
					that.y + that.imgHeight <= enemy.y + enemy.imgHeight
					)
				)
			)
		) {
			return true;
		} else {
			return false;
		}

	};

	return that;
}

/*
loads player sprite
*/
function loadPlayerImg(music) {
	var playerImg = new Image();

	//when playerImg is loaded, load enemy sprite
	playerImg.onload = function() { 
		loadEnemyImg(playerImg, music);
	};

	playerImg.src = "player_icon.png";
	return playerImg;
}