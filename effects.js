/*global $, jQuery, alert, console*/

function en() {
	"use strict";
	$(':lang(en)').removeClass("hidden");
	$(':lang(fi)').addClass("hidden");
	$('#fi').removeClass("active");
	$('#en').addClass("active");
}

function fi() {
	"use strict";
	$(':lang(fi)').removeClass("hidden");
	$(':lang(en)').addClass("hidden");
	$('#en').removeClass("active");
	$('#fi').addClass("active");
}

function welcomeText() {
	'use strict';

	var today = new Date(),
		year = today.getFullYear(),
		month = today.getMonth(),
		day = today.getDate(),
		age = year - 1994,
		studyYear = year - 2014;

	if (month < 3 || (3 === month && day < 18)) {
		age -= 1;
	}
	
	if (month > 7) {
		studyYear += 1;
	}
	
	$("#intro").prepend("<p lang='fi' class='col-md-6 intro-text'>Hei, olen " + age + "-vuotias teekkari Espoosta. Opiskelen kolmatta vuotta informaatioverkostoja Aallossa. Olen koonnut tälle sivulle muutamia koulu- ja vapaa-ajan projektejani. Lähdekoodiin voi käydä tutustumassa <a href='https://github.com/Marcholio'>GitHubin puolella</a>.</p>");
	
	$("#intro").prepend("<p lang='en' class='col-md-6 intro-text hidden'>Hi, I'm a " + age + "-year-old technology student from Espoo, Finland. I'm studying my third year in Aalto University with Information Networks major. I've gathered some of my school and free-time projects to this site. Source code is available in <a href='https://github.com/Marcholio'>GitHub</a>.</p>");
}

$(document).ready(welcomeText());