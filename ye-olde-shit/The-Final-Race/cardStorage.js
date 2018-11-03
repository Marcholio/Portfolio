

function cardStorage() {
	var cards = [];
	//----Set up images----
	var screenVisorImg = new Image();
	var screenVisorImgSmall = new Image();
	var turbochargerImg = new Image();
	var turbochargerImgSmall = new Image();
	var hydrogen_fuel_cellsImg = new Image();
	var hydrogen_fuel_cellsImgSmall = new Image();
	var titanium_gearsImg = new Image();
	var titanium_gearsImgSmall = new Image();
	var spiked_wheelsImg = new Image();
	var spiked_wheelsImgSmall = new Image();
	var magnetic_bearingImg = new Image();
	var magnetic_bearingImgSmall = new Image();
	var quantum_computerImg = new Image();
	var quantum_computerImgSmall = new Image();
	var nitrous_oxideImg = new Image();
	var nitrous_oxideImgSmall = new Image();
	var rolls_royce_100EXImg = new Image();
	var rolls_royce_100EXImgSmall = new Image();
	var fast_cashImg = new Image();
	var bavarian_engineeringImg = new Image();
	var fasterpieceImg = new Image();
	var dogfighting_pastImg = new Image();
	var smooth_silhouetteImg = new Image();
	var sharp_dressed_manImg = new Image();

	//image sources
	screenVisorImg.src  = "./icons/Screen_Visor.jpg";
	screenVisorImgSmall.src = "./icons/Screen_Visor_s.jpg";
	turbochargerImg.src  = "./icons/Turbocharger.jpg";
	turbochargerImgSmall.src = "./icons/Turbocharger_s.jpg";
	hydrogen_fuel_cellsImg.src  = "./icons/Hydrogen_Fuel_Cells.jpg";
	hydrogen_fuel_cellsImgSmall.src = "./icons/Hydrogen_Fuel_Cells_s.jpg";
	titanium_gearsImg.src  = "./icons/Titanium_Gears.jpg";
	titanium_gearsImgSmall.src = "./icons/Titanium_Gears_s.jpg";
	spiked_wheelsImg.src  = "./icons/Spiked_Wheels.jpg";
	spiked_wheelsImgSmall.src = "./icons/Spiked_Wheels_s.jpg";
	magnetic_bearingImg.src  = "./icons/Magnetic_Bearing.jpg";
	magnetic_bearingImgSmall.src = "./icons/Magnetic_Bearing_s.jpg";
	quantum_computerImg.src  = "./icons/Quantum_Computer.jpg";
	quantum_computerImgSmall.src = "./icons/Quantum_Computer_s.jpg";
	nitrous_oxideImg.src  = "./icons/Nitrous_Oxide.jpg";
	nitrous_oxideImgSmall.src = "./icons/Nitrous_Oxide_s.jpg";
	rolls_royce_100EXImg.src  = "./icons/Rolls_Royce_100EX.jpg";
	rolls_royce_100EXImgSmall.src = "./icons/Rolls_Royce_100EX_s.jpg";
	fast_cashImg.src  = "./icons/Fast_Cash.jpg";
	bavarian_engineeringImg.src  = "./icons/Bavarian_Engineering.jpg";
	fasterpieceImg.src  = "./icons/Fasterpiece.jpg";
	dogfighting_pastImg.src  = "./icons/Dogfighting_Past.jpg";
	smooth_silhouetteImg.src  = "./icons/Smooth_Silhouette.jpg";
	sharp_dressed_manImg.src  = "./icons/Sharp_Dressed_Man.jpg";
	

	//---set up cards-----
	var card1  = newCard({canvas: canvas, context: context, cost: 2, attack: 3, health: 2, image: screenVisorImg,		   smallImg: screenVisorImgSmall, 		  name: "Screen Visor", 	    isSpell: false, charge: false, taunt: false, description: ""								});
	var card2  = newCard({canvas: canvas, context: context, cost: 2, attack: 3, health: 2, image: screenVisorImg, 		   smallImg: screenVisorImgSmall, 		  name: "Screen Visor", 	    isSpell: false, charge: false, taunt: false, description: ""								});
	var card3  = newCard({canvas: canvas, context: context, cost: 2, attack: 2, health: 1, image: turbochargerImg,		   smallImg: turbochargerImgSmall, 		  name: "Turbocharger", 	    isSpell: false, charge: true,  taunt: false, description: "Charged"							});
	var card4  = newCard({canvas: canvas, context: context, cost: 2, attack: 2, health: 1, image: turbochargerImg,		   smallImg: turbochargerImgSmall, 		  name: "Turbocharger", 	    isSpell: false, charge: true,  taunt: false, description: "Charged"							});
	var card5  = newCard({canvas: canvas, context: context, cost: 3, attack: 3, health: 2, image: hydrogen_fuel_cellsImg,  smallImg: hydrogen_fuel_cellsImgSmall, name: "Hydrogen Fuel Cells",  isSpell: false, charge: false, taunt: false, description: "Give a minion +1/+1"				});
	var card6  = newCard({canvas: canvas, context: context, cost: 3, attack: 3, health: 2, image: hydrogen_fuel_cellsImg,  smallImg: hydrogen_fuel_cellsImgSmall, name: "Hydrogen Fuel Cells",  isSpell: false, charge: false, taunt: false, description: "Give a minion +1/+1"				});
	var card7  = newCard({canvas: canvas, context: context, cost: 4, attack: 4, health: 5, image: titanium_gearsImg,	   smallImg: titanium_gearsImgSmall, 	  name: "Titanium Gears",       isSpell: false, charge: false, taunt: false, description: ""								});
	var card8  = newCard({canvas: canvas, context: context, cost: 4, attack: 4, health: 5, image: titanium_gearsImg,	   smallImg: titanium_gearsImgSmall, 	  name: "Titanium Gears",       isSpell: false, charge: false, taunt: false, description: ""								});
	var card9  = newCard({canvas: canvas, context: context, cost: 4, attack: 4, health: 3, image: spiked_wheelsImg,	 	   smallImg: spiked_wheelsImgSmall, 	  name: "Spiked Wheels", 	    isSpell: false, charge: true,  taunt: false, description: "Charged"							});
	var card10 = newCard({canvas: canvas, context: context, cost: 4, attack: 4, health: 3, image: spiked_wheelsImg,		   smallImg: spiked_wheelsImgSmall, 	  name: "Spiked Wheels", 	    isSpell: false, charge: true,  taunt: false, description: "Charged"							});
	var card11 = newCard({canvas: canvas, context: context, cost: 4, attack: 3, health: 5, image: magnetic_bearingImg,	   smallImg: magnetic_bearingImgSmall, 	  name: "Magnetic Bearing",     isSpell: false, charge: false, taunt: true,  description: "Taunt"							});
	var card12 = newCard({canvas: canvas, context: context, cost: 4, attack: 3, health: 5, image: magnetic_bearingImg,	   smallImg: magnetic_bearingImgSmall, 	  name: "Magnetic Bearing",     isSpell: false, charge: false, taunt: true,  description: "Taunt"							});
	var card13 = newCard({canvas: canvas, context: context, cost: 4, attack: 2, health: 4, image: quantum_computerImg,	   smallImg: quantum_computerImgSmall, 	  name: "Quantum Computer",     isSpell: false, charge: false, taunt: false, description: "Draw a Card"						});
	var card14 = newCard({canvas: canvas, context: context, cost: 4, attack: 2, health: 4, image: quantum_computerImg,	   smallImg: quantum_computerImgSmall, 	  name: "Quantum Computer",     isSpell: false, charge: false, taunt: false, description: "Draw a Card"						});
	var card15 = newCard({canvas: canvas, context: context, cost: 6, attack: 6, health: 5, image: nitrous_oxideImg,		   smallImg: nitrous_oxideImgSmall, 	  name: "Nitrous Oxide", 	    isSpell: false, charge: false, taunt: false, description: ""								});
	var card16 = newCard({canvas: canvas, context: context, cost: 6, attack: 6, health: 5, image: nitrous_oxideImg,		   smallImg: nitrous_oxideImgSmall,   	  name: "Nitrous Oxide", 	    isSpell: false, charge: false, taunt: false, description: ""								});
	var card17 = newCard({canvas: canvas, context: context, cost: 8, attack: 7, health: 7, image: rolls_royce_100EXImg,	   smallImg: rolls_royce_100EXImgSmall,   name: "Rolls Royce 100EX",    isSpell: false, charge: false, taunt: true,  description: "Taunt"							});
	var card18 = newCard({canvas: canvas, context: context, cost: 8, attack: 7, health: 7, image: rolls_royce_100EXImg,	   smallImg: rolls_royce_100EXImgSmall,   name: "Rolls Royce 100EX",    isSpell: false, charge: false, taunt: true,  description: "Taunt"							});
	var card19 = newCard({canvas: canvas, context: context, cost: 0, attack: 0, health: 0, image: fast_cashImg,			   smallImg: fast_cashImg, 	 			  name: "Fast Cash", 		    isSpell: true,  charge: false, taunt: false, description: "Gain 2 money for this turn"		});
	var card20 = newCard({canvas: canvas, context: context, cost: 0, attack: 0, health: 0, image: fast_cashImg,			   smallImg: fast_cashImg, 				  name: "Fast Cash", 		    isSpell: true,  charge: false, taunt: false, description: "Gain 2 money for this turn"		});
	var card21 = newCard({canvas: canvas, context: context, cost: 3, attack: 0, health: 0, image: bavarian_engineeringImg, smallImg: bavarian_engineeringImg, 	  name: "Bavarian Engineering", isSpell: true,  charge: false, taunt: false, description: "Draw 2 cards"					});
	var card22 = newCard({canvas: canvas, context: context, cost: 3, attack: 0, health: 0, image: bavarian_engineeringImg, smallImg: bavarian_engineeringImg, 	  name: "Bavarian Engineering", isSpell: true,  charge: false, taunt: false, description: "Draw 2 cards"					});
	var card23 = newCard({canvas: canvas, context: context, cost: 1, attack: 0, health: 0, image: fasterpieceImg,		   smallImg: fasterpieceImg, 			  name: "Fasterpiece", 			isSpell: true,  charge: false, taunt: false, description: "Destroy a damaged enemy minion"	});
	var card24 = newCard({canvas: canvas, context: context, cost: 1, attack: 0, health: 0, image: fasterpieceImg,		   smallImg: fasterpieceImg, 			  name: "Fasterpiece", 			isSpell: true,  charge: false, taunt: false, description: "Destroy a damaged enemy minion"	});
	var card25 = newCard({canvas: canvas, context: context, cost: 4, attack: 0, health: 0, image: dogfighting_pastImg,	   smallImg: dogfighting_pastImg, 		  name: "Dogfighting Past", 	isSpell: true,  charge: false, taunt: false, description: "Deal 6 damage"					});
	var card26 = newCard({canvas: canvas, context: context, cost: 4, attack: 0, health: 0, image: dogfighting_pastImg,	   smallImg: dogfighting_pastImg, 		  name: "Dogfighting Past", 	isSpell: true,  charge: false, taunt: false, description: "Deal 6 damage"					});
	var card27 = newCard({canvas: canvas, context: context, cost: 7, attack: 0, health: 0, image: smooth_silhouetteImg,	   smallImg: smooth_silhouetteImg, 		  name: "Smooth Silhouette", 	isSpell: true,  charge: false, taunt: false, description: "Deal 5 damage to everything"		});
	var card28 = newCard({canvas: canvas, context: context, cost: 7, attack: 0, health: 0, image: smooth_silhouetteImg,	   smallImg: smooth_silhouetteImg, 		  name: "Smooth Silhouette", 	isSpell: true,  charge: false, taunt: false, description: "Deal 5 damage to everything"		});
	var card29 = newCard({canvas: canvas, context: context, cost: 4, attack: 0, health: 0, image: sharp_dressed_manImg,	   smallImg: sharp_dressed_manImg, 		  name: "Sharp Dressed Man", 	isSpell: true,  charge: false, taunt: false, description: "Give a minion +4/+4"				});
	var card30 = newCard({canvas: canvas, context: context, cost: 4, attack: 0, health: 0, image: sharp_dressed_manImg,	   smallImg: sharp_dressed_manImg, 		  name: "Sharp Dressed Man", 	isSpell: true,  charge: false, taunt: false, description: "Give a minion +4/+4"				});
	//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	var card31 = newCard({canvas: canvas, context: context, cost: 2, attack: 3, health: 2, image: screenVisorImg,		   smallImg: screenVisorImgSmall, 		  name: "Screen Visor", 	    isSpell: false, charge: false, taunt: false, description: ""								});
	var card32 = newCard({canvas: canvas, context: context, cost: 2, attack: 3, health: 2, image: screenVisorImg, 		   smallImg: screenVisorImgSmall, 		  name: "Screen Visor", 	    isSpell: false, charge: false, taunt: false, description: ""								});
	var card33 = newCard({canvas: canvas, context: context, cost: 2, attack: 2, health: 1, image: turbochargerImg,		   smallImg: turbochargerImgSmall, 		  name: "Turbocharger", 	    isSpell: false, charge: true,  taunt: false, description: "Charged"							});
	var card34 = newCard({canvas: canvas, context: context, cost: 2, attack: 2, health: 1, image: turbochargerImg,		   smallImg: turbochargerImgSmall, 		  name: "Turbocharger", 	    isSpell: false, charge: true,  taunt: false, description: "Charged"							});
	var card35 = newCard({canvas: canvas, context: context, cost: 3, attack: 3, health: 2, image: hydrogen_fuel_cellsImg,  smallImg: hydrogen_fuel_cellsImgSmall, name: "Hydrogen Fuel Cells",  isSpell: false, charge: false, taunt: false, description: "Give a minion +1/+1"				});
	var card36 = newCard({canvas: canvas, context: context, cost: 3, attack: 3, health: 2, image: hydrogen_fuel_cellsImg,  smallImg: hydrogen_fuel_cellsImgSmall, name: "Hydrogen Fuel Cells",  isSpell: false, charge: false, taunt: false, description: "Give a minion +1/+1"				});
	var card37 = newCard({canvas: canvas, context: context, cost: 4, attack: 4, health: 5, image: titanium_gearsImg,	   smallImg: titanium_gearsImgSmall, 	  name: "Titanium Gears",       isSpell: false, charge: false, taunt: false, description: ""								});
	var card38 = newCard({canvas: canvas, context: context, cost: 4, attack: 4, health: 5, image: titanium_gearsImg,	   smallImg: titanium_gearsImgSmall, 	  name: "Titanium Gears",       isSpell: false, charge: false, taunt: false, description: ""								});
	var card39 = newCard({canvas: canvas, context: context, cost: 4, attack: 4, health: 3, image: spiked_wheelsImg,	 	   smallImg: spiked_wheelsImgSmall, 	  name: "Spiked Wheels", 	    isSpell: false, charge: true,  taunt: false, description: "Charged"							});
	var card40 = newCard({canvas: canvas, context: context, cost: 4, attack: 4, health: 3, image: spiked_wheelsImg,		   smallImg: spiked_wheelsImgSmall, 	  name: "Spiked Wheels", 	    isSpell: false, charge: true,  taunt: false, description: "Charged"							});
	var card41 = newCard({canvas: canvas, context: context, cost: 4, attack: 3, health: 5, image: magnetic_bearingImg,	   smallImg: magnetic_bearingImgSmall, 	  name: "Magnetic Bearing",     isSpell: false, charge: false, taunt: true,  description: "Taunt"							});
	var card42 = newCard({canvas: canvas, context: context, cost: 4, attack: 3, health: 5, image: magnetic_bearingImg,	   smallImg: magnetic_bearingImgSmall, 	  name: "Magnetic Bearing",     isSpell: false, charge: false, taunt: true,  description: "Taunt"							});
	var card43 = newCard({canvas: canvas, context: context, cost: 4, attack: 2, health: 4, image: quantum_computerImg,	   smallImg: quantum_computerImgSmall, 	  name: "Quantum Computer",     isSpell: false, charge: false, taunt: false, description: "Draw a Card"						});
	var card44 = newCard({canvas: canvas, context: context, cost: 4, attack: 2, health: 4, image: quantum_computerImg,	   smallImg: quantum_computerImgSmall, 	  name: "Quantum Computer",     isSpell: false, charge: false, taunt: false, description: "Draw a Card"						});
	var card45 = newCard({canvas: canvas, context: context, cost: 6, attack: 6, health: 5, image: nitrous_oxideImg,		   smallImg: nitrous_oxideImgSmall, 	  name: "Nitrous Oxide", 	    isSpell: false, charge: false, taunt: false, description: ""								});
	var card46 = newCard({canvas: canvas, context: context, cost: 6, attack: 6, health: 5, image: nitrous_oxideImg,		   smallImg: nitrous_oxideImgSmall,   	  name: "Nitrous Oxide", 	    isSpell: false, charge: false, taunt: false, description: ""								});
	var card47 = newCard({canvas: canvas, context: context, cost: 8, attack: 7, health: 7, image: rolls_royce_100EXImg,	   smallImg: rolls_royce_100EXImgSmall,   name: "Rolls Royce 100EX",    isSpell: false, charge: false, taunt: true,  description: "Taunt"							});
	var card48 = newCard({canvas: canvas, context: context, cost: 8, attack: 7, health: 7, image: rolls_royce_100EXImg,	   smallImg: rolls_royce_100EXImgSmall,   name: "Rolls Royce 100EX",    isSpell: false, charge: false, taunt: true,  description: "Taunt"							});
	var card49 = newCard({canvas: canvas, context: context, cost: 0, attack: 0, health: 0, image: fast_cashImg,			   smallImg: fast_cashImg, 	 			  name: "Fast Cash", 		    isSpell: true,  charge: false, taunt: false, description: "Gain 2 money for this turn"		});
	var card50 = newCard({canvas: canvas, context: context, cost: 0, attack: 0, health: 0, image: fast_cashImg,			   smallImg: fast_cashImg, 				  name: "Fast Cash", 		    isSpell: true,  charge: false, taunt: false, description: "Gain 2 money for this turn"		});
	var card51 = newCard({canvas: canvas, context: context, cost: 3, attack: 0, health: 0, image: bavarian_engineeringImg, smallImg: bavarian_engineeringImg, 	  name: "Bavarian Engineering", isSpell: true,  charge: false, taunt: false, description: "Draw 2 cards"					});
	var card52 = newCard({canvas: canvas, context: context, cost: 3, attack: 0, health: 0, image: bavarian_engineeringImg, smallImg: bavarian_engineeringImg, 	  name: "Bavarian Engineering", isSpell: true,  charge: false, taunt: false, description: "Draw 2 cards"					});
	var card53 = newCard({canvas: canvas, context: context, cost: 1, attack: 0, health: 0, image: fasterpieceImg,		   smallImg: fasterpieceImg, 			  name: "Fasterpiece", 			isSpell: true,  charge: false, taunt: false, description: "Destroy a damaged enemy minion"	});
	var card54 = newCard({canvas: canvas, context: context, cost: 1, attack: 0, health: 0, image: fasterpieceImg,		   smallImg: fasterpieceImg, 			  name: "Fasterpiece", 			isSpell: true,  charge: false, taunt: false, description: "Destroy a damaged enemy minion"	});
	var card55 = newCard({canvas: canvas, context: context, cost: 4, attack: 0, health: 0, image: dogfighting_pastImg,	   smallImg: dogfighting_pastImg, 		  name: "Dogfighting Past", 	isSpell: true,  charge: false, taunt: false, description: "Deal 6 damage"					});
	var card56 = newCard({canvas: canvas, context: context, cost: 4, attack: 0, health: 0, image: dogfighting_pastImg,	   smallImg: dogfighting_pastImg, 		  name: "Dogfighting Past", 	isSpell: true,  charge: false, taunt: false, description: "Deal 6 damage"					});
	var card57 = newCard({canvas: canvas, context: context, cost: 7, attack: 0, health: 0, image: smooth_silhouetteImg,	   smallImg: smooth_silhouetteImg, 		  name: "Smooth Silhouette", 	isSpell: true,  charge: false, taunt: false, description: "Deal 5 damage to everything"		});
	var card58 = newCard({canvas: canvas, context: context, cost: 7, attack: 0, health: 0, image: smooth_silhouetteImg,	   smallImg: smooth_silhouetteImg, 		  name: "Smooth Silhouette", 	isSpell: true,  charge: false, taunt: false, description: "Deal 5 damage to everything"		});
	var card59 = newCard({canvas: canvas, context: context, cost: 4, attack: 0, health: 0, image: sharp_dressed_manImg,	   smallImg: sharp_dressed_manImg, 		  name: "Sharp Dressed Man", 	isSpell: true,  charge: false, taunt: false, description: "Give a minion +4/+4"				});
	var card60 = newCard({canvas: canvas, context: context, cost: 4, attack: 0, health: 0, image: sharp_dressed_manImg,	   smallImg: sharp_dressed_manImg, 		  name: "Sharp Dressed Man", 	isSpell: true,  charge: false, taunt: false, description: "Give a minion +4/+4"				});

	//push cards to array and return it
	cards.push(card1,  card2,  card3,  card4,  card5,  card6,  card7,  card8,  card9,  card10,
			   card11, card12, card13, card14, card15, card16, card17, card18, card19, card20,
			   card21, card22, card23, card24, card25, card26, card27, card28, card29, card30,
			   card31, card32, card33, card34, card35, card36, card37, card38, card39, card40,
			   card41, card42, card43, card44, card45, card46, card47, card48, card49, card50,
			   card51, card52, card53, card54, card55, card56, card57, card58, card59, card60);

	return cards;
}