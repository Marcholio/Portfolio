function newEnemy (options) {
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
	that.active = options.active;
	that.speedX = options.speedX;
	that.speedY = options.speedY;

	var index = 0;
	var tickCount = 0;
	var ticksPerFrame = 30;

	//draw enemy to canvas
	that.render = function(x,y) {
		that.context.drawImage(that.image, index*that.width/2, 0, that.width/2, that.height, x, y, that.imgWidth, that.imgHeight);
	};

	//return false if position is clear
	that.checkPos = function(other) {
		if (that.collisionHelper(other)) { return true; }
		else { return false; }
	};

	//update sprite frame if necessary
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
		that.x += that.speedX;
		that.y += that.speedY;
	};

	//change direction if wall is encountered
	that.checkWall = function() {
		if (that.x < 0) { 
			that.x = 0;
			that.speedX = -that.speedX;
		}
		if (that.x + that.imgWidth > that.canvas.width) {
			that.x = that.canvas.width-that.imgWidth;
			that.speedX = -that.speedX;	
		} 
		if (that.y < 0) {
			that.y = 0;
			that.speedY = -that.speedY;
		}
		if (that.y + that.imgHeight > that.canvas.height) {
			that.y = that.canvas.height-that.imgHeight;
			that.speedY = -that.speedY;
		}
	};

	//change direction if collides with other enemy, returns true if collision occurred
	that.checkCollision = function(other) {
		if((that.collisionHelper(other) || other.collisionHelper(that)) && other.active && that.active) {
			that.bounce(other);
			return true;
		} else { return false; }
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

	//helper function to calculate bounce
	that.bounce = function(other) {
		/*
		d   e    f
		 \  |  /
		c--	   --  g
		 /  |  \
		b	a    h
		
		aT = that a
		aO = other a etc
		*/
		var aT = that.speedX  === 0 && that.speedY   <  0;
		var aO = other.speedX === 0 && other.speedY  <  0;
		var bT = that.speedX   >  0 && that.speedY   <  0;
		var bO = other.speedX  >  0 && other.speedY  <  0;
		var cT = that.speedX   >  0 && that.speedY  === 0;
		var cO = other.speedX  >  0 && other.speedY === 0;
		var dT = that.speedX   >  0 && that.speedY   >  0;
		var dO = other.speedX  >  0 && other.speedY  >  0;
		var eT = that.speedX  === 0 && that.speedY   >  0;
		var eO = other.speedX === 0 && other.speedY  >  0;
		var fT = that.speedX   <  0 && that.speedY   >  0;
		var fO = other.speedX  <  0 && other.speedY  >  0;
		var gT = that.speedX   <  0 && that.speedY  === 0;
		var gO = other.speedX  <  0 && other.speedY === 0;
		var hT = that.speedX   <  0 && that.speedY   <  0;
		var hO = other.speedX  <  0 && other.speedY  <  0;

		if(that.active && other.active) {
			if((aT && aO) || (bT && bO) || (cT && cO) || (dT && dO) || (eT && eO) || (fT && fO) || (gT && gO) || (hT && hO)) {
				if((Math.pow(that.speedX, 2) + Math.pow(that.speedY, 2)) > (Math.pow(that.speedX, 2) + Math.pow(that.speedY, 2)) ) {
					var tmp1 = that.speedX;
					var tmp2 = that.speedY;
					that.speedX  = -other.speedX;
					that.speedY  = -other.speedY;
					other.speedX =  tmp1;
					other.speedY =  tmp2;
				} else {
					var tmp3 = that.speedX;
					var tmp4 = that.speedY;
					that.speedX  =  other.speedX;
					that.speedY  =  other.speedY;
					other.speedX = -tmp3;
					other.speedY = -tmp4;
				}
			} else {
				var tmp5 = that.speedX;
				var tmp6 = that.speedY;
				that.speedX = other.speedX;
				that.speedY = other.speedY;
				other.speedX = tmp5;
				other.speedY = tmp6;
			}
		}
	};

	return that;
}

/*
loads enemy sprite
*/

function loadEnemyImg(playerImg, music) {
	var enemyImg = new Image();
	enemyImg.src = "enemy_icon.png";

	//when sprite has loaded, run game
	enemyImg.onload = function() {
		runGame(playerImg, enemyImg, music, false);
	};

}