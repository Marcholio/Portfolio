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

function eqHeight() {
	"use strict";
	var i = 0,
		projects = $(".row").children("[class*=project]"),
		heights = null;
	for (i = 0; i < projects.length; i += 1) {
		$(projects[i]).height("auto");
	}
	heights = projects.map(function (obj) {
		return $(projects[obj]).height();
	});
	for (i = 0; i < projects.length; i += 1) {
		$(projects[i]).height(Math.max.apply(null, heights));
	}
}

$(document).ready(function () {
	"use strict";
	setInterval(function () { eqHeight(); }, 10);
});