function en() {
	"use strict";
	$( ":lang(en)").removeClass("hidden");
	$( ":lang(fi)").addClass("hidden");
	$( "#fi").removeClass("active");
	$( "#en").addClass("active");
}

function fi() {
	"use strict";
	$( ":lang(fi)").removeClass("hidden");
	$( ":lang(en)").addClass("hidden");
	$( "#en").removeClass("active");
	$( "#fi").addClass("active");
}