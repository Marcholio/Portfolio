
//Constructor for hero/player
function newHero(options) {
	var hero = {
		canvas: options.canvas,
		context: options.context,
		name: options.name,
		src: options.src,
		x: options.x,
		y: options.y,
		width: options.width,
		height: options.height
	}

	//other general variables
	hero.health = 30;
	hero.attack = 0;
	hero.attacked = false;
	hero.chosen = false;
	hero.maxGas = 0;
	hero.curGas = 0;
	hero.deck = [];
	hero.hand = [];
	hero.table = [];
	hero.checkedCard = {};
	hero.chosenCard = null;

	//initialize hero stats
	hero.initialize = function() {
		hero.health = 30;
		hero.attack = 0;
		hero.attacked = false;
		hero.maxGas = 0;
		hero.curGas = 0;
		hero.deck = [];
		hero.hand = [];
		hero.table = [];
		hero.checkedCard = {};
		hero.chosenCard = {};
	}

	//render hero to canvas
	hero.render = function(x, y, img, chosen) {
		//Hero
		if(chosen) {
			hero.context.fillStyle = "#00FF00";
			hero.context.fillRect(x-5, y-5, hero.width+10, hero.height+10);
		}
		if(hero.attacked) {
			hero.context.fillStyle = "#0095FF"
			hero.context.fillRect(x-5, y-5, hero.width+10, hero.height+10);
		}

		hero.context.drawImage(img, x, y, hero.width, hero.height);
		//health-box
		hero.context.fillStyle = "#5D4EB5";
		hero.context.fillRect(x+hero.width-20, y+hero.height-20, 30, 30);
		//attack-box
		hero.context.fillStyle = "#F53134";
		hero.context.fillRect(x-10, y+hero.height-20, 30, 30);
		hero.context.fillStyle = "#FFFFFF";
		hero.context.font = "20px Arial";
		//health
		hero.context.fillText(hero.health, x+hero.width-15, y+hero.height+5);
		//attack
		hero.context.fillText(hero.attack, x-5, y+hero.height+5)

		//Gas-meter
		hero.context.fillStyle = "#BFBFBF";
		for(i = 0; (i < hero.maxGas && i < 5); i++) {
			hero.context.drawImage(gasEmpty, hero.x + hero.width + 50 + i*42, hero.y + hero.height - 90);
		}
		for(i = 0; i < hero.maxGas-5; i++) {
			hero.context.drawImage(gasEmpty, hero.x + hero.width + 50 + i*42, hero.y + hero.height - 48);
		}

		hero.context.fillStyle = "#CF8E17";
		for(j = 0; (j < hero.curGas && j < 5); j++) {
			hero.context.drawImage(gasFull, hero.x + hero.width + 50 + j*42, hero.y + hero.height - 90);
		}
		for(j = 0; j < hero.curGas-5; j++) {
			hero.context.drawImage(gasFull, hero.x + hero.width + 50 + j*42, hero.y + hero.height - 48);
		}
	}

	//render table cards
	hero.renderTable = function() {
		for(i = 0; i < hero.table.length; i++) {
			hero.table[i].render(i, hero.name);
		}
	}

	//render deck cards
	hero.renderDeck = function(img) {
		if(hero.deck.length > 0) {
			if(hero.name == "player1") {
				hero.context.drawImage(img, 1150, 400);
			} else {
				hero.context.drawImage(img, 1150, 60);
			}
		}
	}

	//render hand cards
	hero.renderHand = function() {
		hero.context.font = "20px Arial";
		if(hero.name == "player1") {
			//player1 hand
			//first row
			for(i = 0; i < Math.min(10, hero.hand.length); i++) {
				hero.context.drawImage(handImg, 250 + i*32, 480);
				hero.context.fillStyle = "#FFFFFF";
				hero.context.fillText(hero.hand[i].cost, 260 + i*32, 505);
			}
			//second row
			for(j = 0; j < Math.min(10, hero.hand.length-10); j++) {
				hero.context.drawImage(handImg, 250 + j*32, 512);
				hero.context.fillStyle = "#FFFFFF";
				hero.context.fillText(hero.hand[j + 10].cost, 260 + j*32, 537);
			}
			//third row
			for(k = 0; k < Math.min(10, hero.hand.length-20); k++) {
				hero.context.drawImage(handImg, 250 + k*32, 544);
				hero.context.fillStyle = "#FFFFFF";
				hero.context.fillText(hero.hand[k + 20].cost, 260 + k*32, 569);
			}
		} else {
			//player2 hand
			//first row
			for(i = 0; i < Math.min(10, hero.hand.length); i++) {
				hero.context.drawImage(handImg, 250 + i*32, hero.y + 10);
				hero.context.fillStyle = "#FFFFFF";
				hero.context.fillText(hero.hand[i].cost, 260 + i*32, hero.y + 35);
			}
			//second row
			for(j = 0; j < Math.min(10, hero.hand.length-10); j++) {
				hero.context.drawImage(handImg, 250 + j*32, hero.y + 42);
				hero.context.fillStyle = "#FFFFFF";
				hero.context.fillText(hero.hand[j + 10].cost, 260 + j*32, hero.y + 65);
			}
			//third row
			for(k = 0; k < Math.min(10, hero.hand.length-20); k++) {
				hero.context.drawImage(handImg, 250 + k*32, hero.y + 74);
				hero.context.fillStyle = "#FFFFFF";
				hero.context.fillText(hero.hand[k + 20].cost, 260 + k*32, hero.y + 100);
			}
		}
	}

	//update gas meter
	hero.updateGas = function() {
		hero.maxGas++;
		if(hero.maxGas > 10) {
			hero.maxGas = 10;
		}
		hero.curGas = hero.maxGas;0
	}

	//draw a card from deck
	hero.drawCard = function() {
		if(hero.deck.length > 0) {
			var card = hero.deck[0]
			hero.deck.splice(0, 1);
			hero.hand.push(card);
		}
	}

	//play card from hand
	hero.playCard = function() {
		msg = "";
		var card = hero.checkedCard;
		if(hero.curGas >= card.cost && hero.checkedCard.name != "empty") {
			//minion-card
			if(!card.isSpell) {
				hero.hand.splice(hero.hand.indexOf(card), 1);
				hero.table.push(card);
				hero.curGas -= card.cost;
				//card has "Give a minion" -battlecry
				if(card.description.indexOf("Give a minion") == 0) {
					giveAMinion = true;
					giveAMinionAttack = 1;
					giveAMinionHealth = 1;
					msg = "Click a friendly minion";
				}
				hero.checkTaunt();
				//"Draw x cards" -battlecry
				if(card.description.indexOf("Draw") == 0) {
					if(card.description[5] == "a") {
						hero.drawCard();
					} else {
						drawedCards = parseInt(card.description[5]);
						for(i = 0; i < drawedCards; i++) {
							hero.drawCard();
						}
						drawedCards = 0;
					}
				}
				playSound(card.name);
			//spell card
			} else {
				hero.hand.splice(hero.hand.indexOf(card), 1);
				hero.curGas -= card.cost;
				//Gain x money
				if(card.description.indexOf("Gain") == 0) {
					cashVid.play();
					cashIsPlaying = true;
					hero.curGas += parseInt(card.description[5]);
					if(hero.curGas > 10) {
						hero.curGas = 10;
					}
 				}

 				//"Draw x cards"
				if(card.description.indexOf("Draw") == 0) {
					bavarianVid.play();
					bavarianIsPlaying = true;
					if(card.description[5] == "a") {
						hero.drawCard();
					} else {
						drawedCards = parseInt(card.description[5]);
						for(i = 0; i < drawedCards; i++) {
							hero.drawCard();
						}
						drawedCards = 0;
					}
				}

				//"Destroy a damaged enemy minion"
				if(card.description.indexOf("Destroy") == 0) {
					msg = "Click a damaged enemy minion to destroy it";
					if(hero.name == "player1") {
						player1Destroy = true;
					} else {
						player2Destroy = true;
					}
				}

				//"Deal x damage"
				if(card.description.indexOf("Deal") == 0) {
					var amount = parseInt(card.description[5]);
					if(card.description.indexOf("to everything") == -1) {
						dogfightingVid.play();
						dogfightingIsPlaying = true;
						msg = "Click minion or hero to deal damage";
						if(hero.name == "player1") {
							player1Deal = amount;
						} else {
							player2Deal = amount;
						}
					} else {
						smoothVid.play();
						smoothIsPlaying = true;
						toEverything = amount;
					}
				}

				//"Give a minion..."
				if(card.description.indexOf("Give a") == 0) {
					sharpVid.play();
					sharpIsPlaying = true;
					giveAMinion = true;
					giveAMinionHealth = 4;
					giveAMinionAttack = 4;
					msg = "Click a friendly minion";
				}
			}
		} else if(card.name != "empty") {
			msg = "Not enough money";
		}
	}

	//render card that is checked
	hero.renderHandCard = function() {
		if(hero.name == "player1") {
			hero.context.drawImage(hero.checkedCard.image, 25, hero.y-135, hero.checkedCard.image.width, hero.checkedCard.image.height);
			if(hero.checkedCard.name != "empty") {
				//cost-box
				hero.context.fillStyle = "#CF8E17";
				hero.context.fillRect(10, hero.y-145, 30, 30);
				//health-box
				hero.context.fillStyle = "#5D4EB5";
				hero.context.fillRect(170, hero.y+85, 30, 30);
				//attack-box
				hero.context.fillStyle = "#F53134";
				hero.context.fillRect(10, hero.y+85, 30, 30);

				hero.context.fillStyle = "#FFFFFF";
				hero.context.font = "20px Arial";
			
				//cost
				hero.context.fillText(hero.checkedCard.cost, 20, hero.y-120);
				//health
				hero.context.fillText(hero.checkedCard.health, 180, hero.y+105);
				//attack
				hero.context.fillText(hero.checkedCard.attack, 20, hero.y+105);	

				//description
				hero.context.fillText(hero.checkedCard.description, 230, 460);
			}
		} else {
			//player2
			hero.context.drawImage(hero.checkedCard.image, 25, hero.y+10, hero.checkedCard.image.width, hero.checkedCard.image.height);
			if(hero.checkedCard.name != "empty") {
				//cost-box
				hero.context.fillStyle = "#CF8E17";
				hero.context.fillRect(10, hero.y-5, 30, 30);
				//health-box
				hero.context.fillStyle = "#5D4EB5";
				hero.context.fillRect(170, hero.y+235, 30, 30);
				//attack-box
				hero.context.fillStyle = "#F53134";
				hero.context.fillRect(10, hero.y+235, 30, 30);

				hero.context.fillStyle = "#FFFFFF";
				hero.context.font = "20px Arial";
			
				//cost
				hero.context.fillText(hero.checkedCard.cost, 20, hero.y+20);
				//health
				hero.context.fillText(hero.checkedCard.health, 180, hero.y+255);
				//attack
				hero.context.fillText(hero.checkedCard.attack, 20, hero.y+255);

				//description
				hero.context.fillText(hero.checkedCard.description, 230, 160);	
			}
			
		}
	}

	//xx cards left -text
	hero.deckInfo = function() {
		hero.context.fillStyle = "#FFFFFF";
		hero.context.font = "20px Arial";
		if(hero.name == "player1") {
			hero.context.fillText(hero.deck.length + " cards left", 1150, 580);
		} else {
			hero.context.fillText(hero.deck.length + " cards left", 1150, 40);
		}
	}

	//attack with hero
	hero.doAttack = function(target) {
		hero.chosen = false;
		hero.attacked = true;
		target.health -= hero.attack;
		hero.health -= target.attack;
		msg = "";
	}

	//shuffle deck cards
	hero.shuffleDeck = function() {
		var tmp = hero.deck[0];
		var index = 0;
		for(i = 0; i < hero.deck.length; i++) {
			index = Math.floor(Math.random()*hero.deck.length)
			tmp = hero.deck[i];
			hero.deck[i] = hero.deck[index];
			hero.deck[index] = tmp;
		}
	}

	//update playerXTaunt value to match current state
	hero.checkTaunt = function() {
		if(hero.name == "player1") {
			player1Taunt = false;
			for(i = 0; i < hero.table.length; i++) {
				player1Taunt = player1Taunt || hero.table[i].taunt;
			}
		} else {
			player2Taunt = false;
			for(j = 0; j < hero.table.length; j++) {
				player2Taunt = player2Taunt || hero.table[j].taunt;
			}
		}
	}

	//clear dead minions off table
	hero.clearDead = function() {
		var index = -1;
		do {
			index = -1;
			for(i = 0; i < hero.table.length; i++) {
				if(hero.table[i].health <= 0) {
					index = i;
				}
			}
			if(index >= 0) {
				hero.table.splice(index, 1);
			}
		} while(index >= 0);
		hero.checkTaunt();

	}

	//update playerXDestroy value to match current state
	hero.checkDestroy = function() {
		var tmp = false;
		for(i = 0; i < hero.table.length; i++) {
			tmp = tmp || hero.table[i].health < hero.table[i].origHealth;
		}
		if(hero.name == "player1") {
			if(player2Destroy) {
				player2Destroy = tmp;
			}
		} else {
			if(player1Destroy) {
				player1Destroy = tmp;
			}
		}
		
	}

	return hero;
}