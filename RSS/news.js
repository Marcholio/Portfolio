$.ajax({
	url: "https://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent('url ="http://www.hs.fi/uutiset/rss/"') + "&format=json&diagnostics=false&callback=?",
	dataType: "json",
	success: function (data) {
		console.log(data);
	}
});