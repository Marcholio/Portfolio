/*
 * yql is based on FeedEk plugin by Engin Kizil
*/

var sources = [{name: "HS", url: "http://www.hs.fi/uutiset/rss/"}, {name: "YLE", url: "http://yle.fi/uutiset/rss/uutiset.rss"}, {name: "IS", url:"http://www.iltasanomat.fi/rss/tuoreimmat.xml"}, {name: "IL", url: "http://www.iltalehti.fi/rss.xml"}, {name: "BBC", url:"http://feeds.bbci.co.uk/news/rss.xml"}, {name: "NY Times", url: "http://rss.nytimes.com/services/xml/rss/nyt/World.xml"}];
	headlines = [],
	d = new Date(),
	hours = d.getHours(),
	mins = d.getMinutes(),
	secs = d.getSeconds();

if (d.getHours() < 10) {hours = "0" + hours;}
if (d.getMinutes() < 10) {mins = "0" + mins;}
if (d.getSeconds() < 10) {secs = "0" + secs;}
$('.container-fluid').prepend('<div class="row"><h1>Tuoreimmat uutiset ' + hours + ":" + mins + ":" + secs + '</h1></div>');

function getFeed(name, from) {
	var yql = 'SELECT channel.item FROM feednormalizer WHERE output="rss_2.0" AND url ="' + from + '"';
	
	$.ajax({
		url: "https://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent(yql) + "&format=json&diagnostics=false&callback=?",
		dataType: "json",
		success: function (data) {
			pushFeed(name, data);
		}
	});
}

function pushFeed(name, data) {
	for (i = 0; i < data.query.count; i++) {
		var feed = data.query.results.rss,
			timeStr = "",
			sortTime = 0,
			pubTime = new Date(feed[i].channel.item.date),
			diff = d-pubTime,
			sortTime = diff,
			hh = Math.floor(diff / 1000 / 60 / 60);
		diff -= hh * 1000 * 60 * 60;
		var mm = Math.floor(diff / 1000 / 60);
		diff -= mm * 1000 * 60;
			
		if (hh == 0) {
			timeStr = mm + "min";
		} else if (hh > 23) {
			timeStr = Math.floor(hh/24) + "d";
		} else {
			timeStr = hh + "h " + mm + "min";
		}
			
		headlines.push({src: name, title: feed[i].channel.item.title, link: feed[i].channel.item.link, time: pubTime, timeStr: timeStr, sortTime: sortTime});
		console.log(headlines)
	}
}

function start() {
	for (i = 0; i < sources.length; i++) {
		getFeed(sources[i].name, sources[i].url);
	}
	window.setTimeout(sorting, 2000);
}


function sorting() {
	headlines.sort(function(a,b) {return (a.sortTime > b.sortTime) ? 1 : ((b.sortTime > a.sortTime) ? -1 : 0);});
	appendHeadlines();
}


function appendHeadlines () {
	$('#load').addClass("hidden");
	for(i = 0; i < headlines.length; i++) {
		$('#News').append('<li class="headline">' + headlines[i].src + ': <a href="' + headlines[i].link + '" target ="_blank">' + headlines[i].title + ' </a><p class="time"> - ' + headlines[i].timeStr + '</p></li>');
	}
}

start();
