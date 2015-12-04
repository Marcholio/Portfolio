
/*
 * REST API script
 */

/*global window */
/*global $, jQuery*/
/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */
/*global localStorage: false*/
/*global document: false */



var BMW_Motorrad = function () {
    "use strict";
    $.getJSON("http://graph.facebook.com/BMWMotorrad", function (data) {
             $("#facebook").append("<li class=fb_item id=Motorrad><a href=" + data.link + ">BMW Motorrad</a><p>" + data.likes + " tykkää tästä</p></li>");
             $(document.getElementById("Motorrad")).css("background-image", "url(" + data.cover.source + ")");
        }
               
            );
};

var BMW_Finland = function () {
    "use strict";
    $.getJSON("https://graph.facebook.com/BMW.Suomi", function (data) {
             $("#facebook").append("<li class=fb_item id=Finland><a id=Finland_link href=" + data.link + ">BMW Suomi</a><p>" + data.likes + " tykkää tästä</p></li>");
             $(document.getElementById("Finland")).css("background-image", "url(" + data.cover.source + ")");
             $(document.getElementById("Finland_link")).css("background-color", "rgba(54,83,224,.3)");
        }
               
            );
};

var NY_times = function() {
    "use strict";
    $.getJSON("http://api.nytimes.com/svc/search/v2/articlesearch.json?[q=new+york+times&fq=bmw&api-key=49196f2f293d8a17e133ec1fa382bf5f:11:71523045", function (data) {
            for (var key = 0; key < 4; key++) {
                if (data.response.docs.hasOwnProperty(key)) {
                    $("#News").append("<li class=headline><a href=" + data.response.docs[key].web_url + ">" + data.response.docs[key].headline.main + "</a></li>");
                }

            }
    });
};


$(document).ready(BMW_Motorrad());
$(document).ready(BMW_Finland());
$(document).ready(NY_times());