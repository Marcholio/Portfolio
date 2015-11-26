
/*
 * REST API script
 */

/*global window */
/*global $, jQuery*/
/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */
/*global localStorage: false*/
/*global document: false */



var reittiopas = function () {
    "use strict";
	$.getJSON("http://api.reittiopas.fi/hsl/prod/?user=<Marcholio>&pass=<Re1tt10pas>&request=<reverse_geocode>", function (data) {
		console.log(data);
	}
			 );
};


$(document).ready(reittiopas());