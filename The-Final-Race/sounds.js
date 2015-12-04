//sounds for minions
var hydrogenFuelCells_sound = new Audio("./sounds/hydrogenfuelcells.mp3");
var magneticBearing_sound = new Audio("./sounds/magneticbearing.mp3");
var nitrousOxide_sound = new Audio("./sounds/nitrousoxide.mp3");
var quantumComputer_sound = new Audio("./sounds/quantumcomputer.mp3");
var rollsRoyce100EX_sound = new Audio("./sounds/rollsroyce100ex.mp3");
var screenVisor_sound = new Audio("./sounds/screenvisor.mp3");
var spikedWheels_sound = new Audio("./sounds/spikedwheels.mp3");
var titaniumGears_sound = new Audio("./sounds/titaniumgears.mp3");
var turbocharger_sound = new Audio("./sounds/turbocharger.mp3");

//plays a sound
function playSound(card) {
	if(card.indexOf("Hydrogen") == 0) hydrogenFuelCells_sound.play();
	else if(card.indexOf("Magnetic") == 0) magneticBearing_sound.play();
	else if(card.indexOf("Nitrous") == 0) nitrousOxide_sound.play();
	else if(card.indexOf("Quantum") == 0) quantumComputer_sound.play();
	else if(card.indexOf("Rolls") == 0) rollsRoyce100EX_sound.play();
	else if(card.indexOf("Screen") == 0) screenVisor_sound.play();
	else if(card.indexOf("Spiked") == 0) spikedWheels_sound.play();
	else if(card.indexOf("Titanium") == 0) titaniumGears_sound.play();
	else if(card.indexOf("Turbo") == 0) turbocharger_sound.play();
}