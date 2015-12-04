/*
 * Video effects with html canvas
 */

/*global window */
/*global $, jQuery*/
/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */
/*global localStorage: false*/
/*global document: false */

var rotated = false,
   video = $(document).getElementById("v");

// Handle button click
function rotate() {

   rotated = !rotated;

   if( !rotated ){
      video.removeClass("rotate"); 
   } else {
      video.addClass("rotate");
   }
});