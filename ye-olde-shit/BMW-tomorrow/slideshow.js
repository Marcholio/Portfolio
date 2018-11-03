/*
 * a simple slideshow with mediaelements
 */

/*global window */
/*global $, jQuery*/
/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */
/*global localStorage: false*/
/*global document: false */

window.onload = function () {
    "use strict";
    $.getJSON("https://tyrkkom1.firebaseio.com/.json",
                function (data) {
            var key = null;
            console.log(data);
            for (key in data.articles) {
                if (data.articles.hasOwnProperty(key)) {
                    $("#News").append("<li class=News_article id=" + key + " style='display: none;'><img src=" + data.articles[key].img_url + " alt='kuva'</img><p>" + data.articles[key].text + "</p></li>");
                }

            }

        }
            );
};

var articleNumber = 1;

if (localStorage.getItem("number") !== null) {
    articleNumber = localStorage.getItem("number");
}

function toggle(articleNumber) {
    "use strict";
    var previousNumber = articleNumber - 1;

    if (previousNumber < 0) {
        previousNumber = 3;
    }

    var current = document.getElementById(articleNumber.toString());
    var previous = document.getElementById(previousNumber.toString());


    $(previous).fadeOut(400, function () {$(previous).removeClass("current"); });
    window.setTimeout(function () {$(current).fadeIn(400, function () {$(current).addClass("current"); }); }, 400);

    localStorage.setItem("number", articleNumber);

    switch (articleNumber) {
    case 0:
        $(document.getElementById("3")).removeClass("current");
        break;
    case 1:
        $(document.getElementById("0")).removeClass("current");
        break;
    case 2:
        $(document.getElementById("1")).removeClass("current");
        break;
    case 3:
        $(document.getElementById("2")).removeClass("current");
        break;
    }

}

var slideshow = function () {
    "use strict";
    toggle(articleNumber);

    articleNumber++;

    if (articleNumber >= 4) {
        articleNumber = 0;
    }

};

var slideshow2 = window.setInterval(function () {"use strict"; slideshow(); }, 3000);

var paused = false;

function pause() {
    "use strict";
    window.clearInterval(slideshow2);
    paused = true;
    $(document.getElementById("Pause")).addClass("hidden");
    $(document.getElementById("Play")).removeClass("hidden");
}

function play() {
    "use strict";
    slideshow2 = window.setInterval(function () { slideshow(); }, 3000);
    paused = false;
    $(document.getElementById("Play")).addClass("hidden");
    $(document.getElementById("Pause")).removeClass("hidden");
}

function next() {
    "use strict";
    $("#Right").attr("disabled", "disabled");
    pause();
    toggle(articleNumber);
    articleNumber++;

    if (articleNumber >= 4) {
        articleNumber = 0;
    }

    window.setTimeout(function () {$("#Right").removeAttr("disabled"); }, 450);
}

function prev() {
    "use strict";
    $("#Left").attr("disabled", "disabled");
    pause();

    var previousNumber = 0;
    var currentNumber = 0;

    previousNumber = articleNumber;
    currentNumber = articleNumber - 1;

    if (currentNumber === -1) {
        currentNumber = 3;
    }

    var previous = document.getElementById(previousNumber.toString());
    var current = document.getElementById(currentNumber.toString());

    $(previous).fadeOut(400, function () {$(previous).removeClass("current"); });
    window.setTimeout(function () {$(current).fadeIn(400, function () {$(current).addClass("current"); }); }, 400);

    localStorage.setItem("number", currentNumber);

    articleNumber = currentNumber;

    window.setTimeout(function () {$("#Left").removeAttr("disabled"); }, 450);

}