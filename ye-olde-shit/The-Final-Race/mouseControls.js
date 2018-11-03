function listenMouse(player1, player2) {
	$(document).mousedown(function(e) {	
		var x = e.clientX;
		var y = e.clientY;
		x -= canvas.offsetLeft;
		y -= canvas.offsetTop;
		x = (canvas.width/canvas.scrollWidth) * x;
		y = (canvas.height/canvas.scrollHeight) * y;

		//skip intro video
		if(x >= 1200 && y >= 550 && intro.currentTime > 5) {
			intro.pause();
			menu();
		}
		//play game
		if(x >= 300 && x <= 540 && y >= 450 && y <= 500 && inMenu && !tutorialIsPlaying) {
			cards = cardStorage();
			run();
			inGame = true;
			inMenu = false;
		//play tutorial
		} else if(x >= 700 && x <= 1000 && y >= 450 && y <= 500 && inMenu && !tutorialIsPlaying) {
			tutorialVid.play();
			tutorialIsPlaying = true;
		//skip tutorial video
		} else if(x >= 1200 && y >= 550 && tutorialIsPlaying) {
			tutorialVid.pause();
			tutorialIsPlaying = false;
			tutorialVid.currentTime = 0;
		//player1 is clicked
		} else if(x >= player1.x && x <= player1.x + player1.width && y >= player1.y && y <= player1.y+player1.height && inGame) {
			if(turn == 1) {
				//toggle choose
				player1.chosen = !player1.chosen;
				for(i = 0; i < player1.table.length; i++) {
					player1.table[i].chosen = false;
					player1.chosenCard = null;
				}
			} else if(player2Deal > 0) {
				player1.health -= player2Deal;
				player2Deal = 0;
				msg = "";
			} else if (!player2.attacked && player2.chosen && turn == 2) {
				//player2 attacks with hero
				if(!player1Taunt) {
					player2.doAttack(player1);	
				} else {
					msg = "You must attack the card with taunt";
				}
			} else if (turn == 2 && player2.chosenCard != null && !player2.chosenCard.attacked) {
				//player2 attacks with card
				if(player2.chosenCard.ready && !player1Taunt) {
					player2.chosenCard.doAttack(player1);
					if(player2.chosenCard.health <= 0) {
						//remove card if killed
						player2.table.splice(player2.table.indexOf(player2.chosenCard), 1);
						player2.chosenCard = null;
					}	
				} else if(player1Taunt && !player2.attacked) {
					msg = "You must attack the card with taunt";
				}
			}
		//player2 is clicked
		} else if(x >= player2.x && x <= player2.x + player2.width && y >= player2.y && y <= player2.y+player2.height && inGame) {
			if(turn == 1 && !player1.attacked && player1.chosen && !player2Taunt && player1Deal == 0) {
				player1.doAttack(player2);
			} else if(player1Deal > 0) {
				player2.health -= player1Deal;
				player1Deal = 0;
				msg = "";
			} else if(turn == 1 && player2Taunt && !player1.attacked) {
				msg = "You must attack the card with taunt";
			} else if (turn == 2) {
				//toggle choose
				player2.chosen = !player2.chosen;
				for(i = 0; i < player2.table.length; i++) {
					player2.table[i].chosen = false;
					player2.chosenCard = null;
				}
			
			} else if (turn == 1 && player1.chosenCard != null && !player1.chosenCard.attacked) {
				//player1 attacks with card
				if(player1.chosenCard.ready && !player2Taunt) {
					player1.chosenCard.doAttack(player2);
					if(player1.chosenCard.health <= 0) {
						//remove card if killed
						player1.table.splice(player1.table.indexOf(player1.chosenCard), 1);
						player1.chosenCard = null;
						player1.checkTaunt();
					}	
				} else if(player2Taunt) {
					msg = "You must attack the card with taunt";
				}
			}
		//end turn button is clicked
		} else if(x >= 1145 && x <= 1225 && y >= 260 && y <= 335 && inGame) {
			//change turn and do everything that needs to be done when the turn changes
			msg = "";
			giveAMinion = false;
			if(turn == 1) {
				turn = 2;
				player1.attacked = false;
				player1.chosen = false;
				player1.checkedCard = card_empty;
				player2.updateGas();
				player2.drawCard();
				for(i = 0; i < player1.table.length; i++) {
					player1.table[i].ready = true;
					player1.table[i].attacked = false;
					player1.table[i].chosen = false;
				}
				player1Destroy = false;
				player1.chosenCard = null;
			} else {
				turn = 1
				player2.attacked = false;
				player2.chosen = false;
				player2.checkedCard = card_empty;
				player1.updateGas();
				player1.drawCard();
				for(i = 0; i < player2.table.length; i++) {
					player2.table[i].ready = true;
					player2.table[i].attacked = false;
					player2.table[i].chosen = false;
				}
				player2Destroy = false;
				player2.chosenCard = null;
			}
		//player1 table is clicked
		} else if(x >= 350 && x <= 1020 && y >= 340 && y <= 420 && inGame) {
			player1.checkDestroy();
			var index = Math.floor(((x-350)/670) * 7);
			//player1 is in turn
			if(turn == 1) {
				if(!giveAMinion) {
					if(player1.table.length > index) {
						for(i = 0; i < player1.table.length; i++) {
							player1.chosen = false;
							if(i == index) {
								//toggle choose in cards
								if(player1.table[index].ready) {
									player1.table[index].chosen = !player1.table[index].chosen;
									if(player1.table[index].chosen) {
										player1.chosenCard = player1.table[index];
									} else {
										player1.chosenCard = null;
									}	
								}
							} else {
								//other cards are not chosen
								player1.table[i].chosen = false;
							}
						}
					
					} else {
						//player1 plays a card from hand
						player1.playCard();
						player1.checkedCard = card_empty;
					}
				//giveAMinion is true	
				} else if(giveAMinion) {
					msg = "";
					player1.table[index].attack += giveAMinionAttack;
					player1.table[index].health += giveAMinionHealth;
					giveAMinion = false;
					giveAMinionHealth = 0;
					giveAMinionAttack = 0;
				}
				
			//player2 is in turn
			} else {
				if(!player2Destroy && player2Deal == 0) {
					if(player2.chosen && !player2.attacked) {
						//attack by player2 hero
						if((player1Taunt && player1.table[index].taunt) || (!player1Taunt)) {
							player2.doAttack(player1.table[index]);
						} else if(player1Taunt && !player1.table[index].taunt) {
							msg = "You must attack the card with taunt";
						}

						if(player1.table[index].health <= 0) {
							//remove card if killed
							player1.table.splice(index, 1);
							player1.checkTaunt();
						}
					} else if(player2.chosenCard != null) {
						//attack by player2 card
						if((player2.chosenCard.ready && !player1Taunt && !player2.chosenCard.attacked) || (player2.chosenCard.ready && player1Taunt && player1.table[index].taunt && !player2.chosenCard.attacked)) {
							player2.chosenCard.doAttack(player1.table[index]);
							//remove cards if killed
							if(player1.table[index].health <= 0) {
								player1.table.splice(index, 1);
								player1.checkTaunt();
							}
							if(player2.chosenCard.health <= 0) {
								player2.table.splice(player2.table.indexOf(player2.chosenCard), 1);
								player2.chosenCard = null;
								player2.checkTaunt();
							}
							player2.chosenCard = null;
						} else if(player1Taunt && !player1.table[index].taunt) {
							msg = "You must attack the card with taunt";
						}			
					}
				} else if(player2Deal > 0) {
					player1.table[index].health -= player2Deal;
					player2Deal = 0;
					msg = "";
				//destroy minion	
				} else {
					if(player1.table[index].origHealth > player1.table[index].health) {
						player1.table.splice(index, 1);
						player2Destroy = false;
						fasterVid.play();
						fasterIsPlaying = true;
					}
					msg = "";
				}
			}
				
		//player2 table is clicked
		} else if(x >= 350 && x <= 1020 && y >= 180 && y <= 260 && inGame) {
			player2.checkDestroy();
			var index = Math.floor(((x-350)/670) * 7);
			if(turn == 1) {
				if(!player1Destroy && player1Deal == 0) {
					if(player1.chosen && !player1.attacked) {
						//attack by player1 hero
						if((player2Taunt && player2.table[index].taunt) || !player2Taunt) {
							player1.doAttack(player2.table[index]);
							if(player2.table[index].health <= 0) {
								//remove card if killed
								player2.table.splice(index, 1);
								player2.checkTaunt();
							}	
						} else {
							msg = "You must attack the card with taunt";
						}
						
					} else if(player1.chosenCard != null) {
						//attack by player1 card
						if((player1.chosenCard.ready && !player2Taunt && !player1.chosenCard.attacked) || (player1.chosenCard.ready && player2Taunt && player2.table[index].taunt && !player1.chosenCard.attacked)) {
							if(player2.table.length > index) {
								player1.chosenCard.doAttack(player2.table[index]);
								//remove cards if killed
								if(player2.table[index].health <= 0) {
									player2.table.splice(index, 1);
									player2.checkTaunt();
								}
								if(player1.chosenCard.health <= 0) {
									player1.table.splice(player1.table.indexOf(player1.chosenCard), 1);
									player1.checkTaunt();
								}
								player1.chosenCard = null;
							}	
						} else if(player2Taunt && !player2.table[index].taunt) {
							msg = "You must attack the card with taunt";
						}
					}
				} else if(player1Deal > 0) {
					player2.table[index].health -= player1Deal;
					player1Deal = 0;
					msg = "";
				} else {
					if(player2.table[index].origHealth > player2.table[index].health) {
						player2.table.splice(index, 1);
						player1Destroy = false;
						fasterVid.play();
						fasterIsPlaying = true;
					}
					msg = "";
				}
			//player2 is in turn	
			} else {
				if(!giveAMinion) {
					if(player2.table.length > index) {
						for(i = 0; i < player2.table.length; i++) {
							player2.chosen = false;
							if(i == index) {
								//toggle choose in cards
								if(player2.table[index].ready) {
									player2.table[index].chosen = !player2.table[index].chosen;
									if(player2.table[index].chosen) {
										player2.chosenCard = player2.table[index];
									} else {
										player2.chosenCard = null;
									}	
								}
								
							} else {
								//other cards are not chosen
								player2.table[i].chosen = false;
							}
						}	
					} else {
						//player2 plays card
						player2.playCard();
						player2.checkedCard = card_empty;	
					}
				//giveAMinion is true	
				} else {
					player2.table[index].attack += giveAMinionAttack;
					player2.table[index].health += giveAMinionHealth;
					giveAMinion = false;
					giveAMinionHealth = 0;
					giveAMinionAttack = 0;
					msg = "";
				}
			}
			
		//player1 hand
		} else if(x >= 250 && x <= 570 && y >= 480 && y <= 576 && turn == 1 && inGame) {
			var indexX = Math.floor(((x-245)/320) * 10);
			var indexY = Math.floor(((y-480)/96) * 3);
			var index = indexX+indexY*10;
			if(player1.hand.length > index) {
				//change checkedCard
				player1.checkedCard = player1.hand[index];
				giveAMinion = false;
			}
		//player2 hand	
		} else if(x >= 250 && x <= 570 && y >= 30 && y <= 126 && turn == 2 && inGame) {
			var indexX = Math.floor(((x-245)/320) * 10);
			var indexY = Math.floor(((y-30)/96) * 3);
			var index = indexX+indexY*10;
			if(player2.hand.length > index) {
				//change checkedCard
				player2.checkedCard = player2.hand[index];
				giveAMinion = false;
			}
		} else if(x >= 1150 && Math.abs(x-lastX) < 5 && y >= 400 && Math.abs(y-lastY) < 5 && !easterIsPlaying) {
			easterVid.play();
			easterIsPlaying = true;
			lastX = -10;
			lastY = -10;
		}
		lastX = x;
		lastY = y;
	});		
}
	
