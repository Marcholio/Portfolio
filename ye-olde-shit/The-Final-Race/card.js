
//Constructor for card object
function newCard(options) {
	var card = {
		canvas: options.canvas,
		context: options.context,
		cost: options.cost,
		attack: options.attack,
		health: options.health,
		image: options.image,
		smallImg: options.smallImg,
		name: options.name,
		isSpell: options.isSpell,
		charge: options.charge,
		taunt: options.taunt,
		description: options.description
	};

	//general variables
	card.chosen = false;
	card.attacked = false;
	card.ready = card.charge;
	card.origHealth = card.health;
	card.origAttack = card.attack;

	//render card to canvas
	card.render = function(position, player) {
		if(player == "player1") {
			//player1 cards
			if(card.taunt) {
				card.context.fillStyle = "#787878";
				card.context.fillRect(340 + position*100, 330, 80, 100);
			}
			if(card.chosen) {
				card.context.fillStyle = "#00FF00";
				card.context.fillRect(345 + position * 100, 335, 70, 90);
			}
			if(card.attacked) {
				card.context.fillStyle = "#0095FF";
				card.context.fillRect(345 + position * 100, 335, 70, 90);
			}
			if(!card.ready) {
				card.context.fillStyle = "#F2F250";
				card.context.fillRect(345 + position * 100, 335, 70, 90);
			}
			card.context.drawImage(card.smallImg, 350 + position * 100, 340);
			//cost-box
			card.context.fillStyle = "#CF8E17";
			card.context.fillRect(340 + position * 100, 330, 25, 25);
			//health-box
			if(card.health < card.origHealth) {
				card.context.fillStyle = "#F53134";
				card.context.fillRect(395 + position * 100, 410, 25, 25);
				card.context.fillStyle = "#5D4EB5";
				card.context.fillRect(397 + position * 100, 412, 21, 21);
			} else {
				card.context.fillStyle = "#5D4EB5";
				card.context.fillRect(395 + position * 100, 410, 25, 25);
			}
			//attack-box
			card.context.fillStyle = "#F53134";
			card.context.fillRect(340 + position * 100, 410, 25, 25);

			card.context.fillStyle = "#FFFFFF";
			card.context.font = "15px Arial";
			
			//cost
			card.context.fillText(card.cost, 350 + position * 100, 350);
			//health
			card.context.fillText(card.health, 400 + position * 100, 430);
			//attack
			card.context.fillText(card.attack, 346 + position * 100, 430);
		} else {
			//player2 cards
			if(card.taunt) {
				card.context.fillStyle = "#787878";
				card.context.fillRect(340 + position*100, 170, 80, 100);
			}
			if(card.chosen) {
				card.context.fillStyle = "#00FF00";
				card.context.fillRect(345 + position * 100, 175, 70, 90);
			}
			if(card.attacked) {
				card.context.fillStyle = "#0095FF";
				card.context.fillRect(345 + position * 100, 175, 70, 90);
			}
			if(!card.ready) {
				card.context.fillStyle = "#F2F250";
				card.context.fillRect(345 + position * 100, 175, 70, 90);
			}
			card.context.drawImage(card.smallImg, 350 + position * 100, 180);
			//cost-box
			card.context.fillStyle = "#CF8E17";
			card.context.fillRect(340 + position * 100, 170, 25, 25);
			//health-box
			if(card.health < card.origHealth) {
				card.context.fillStyle = "#F53134";
				card.context.fillRect(395 + position * 100, 250, 25, 25);
				card.context.fillStyle = "#5D4EB5";
				card.context.fillRect(397 + position * 100, 252, 21, 21);
			} else {
				card.context.fillStyle = "#5D4EB5";
				card.context.fillRect(395 + position * 100, 250, 25, 25);
			}
			//attack-box
			card.context.fillStyle = "#F53134";
			card.context.fillRect(340 + position * 100, 250, 25, 25);

			card.context.fillStyle = "#FFFFFF";
			card.context.font = "15px Arial";
			
			//cost
			card.context.fillText(card.cost, 350 + position * 100, 190);
			//health
			card.context.fillText(card.health, 400 + position * 100, 270);
			//attack
			card.context.fillText(card.attack, 346 + position * 100, 270);
		}
	}

	//attack with card
	card.doAttack = function(target) {
		card.chosen = false;
		card.attacked = true;
		target.health -= card.attack;
		card.health -= target.attack;
		msg = "";
	}

	return card;
}