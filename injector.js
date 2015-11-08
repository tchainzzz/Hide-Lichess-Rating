console.log("we in lichess!");


// names seen on left column, above chat box
var whitePlayer = $("div.player.color-icon.is.white");
var blackPlayer = $("div.player.color-icon.is.black");
hideRank(whitePlayer);
hideRank(blackPlayer);

// names seen on right column, with clock and game move history
var white_user = $("div.username.white.on-game");
var black_user = $("div.username.black.on-game");
hideRank(white_user);
hideRank(black_user);

// element is an element returned from jquery selector
// if element has text "GabbaGoole (1663)" ,
// the element will have its text changed to "GabbaGoole"
function hideRank(element) {
	var sliced = removeTextInParan(element.text());
	element.text(sliced);
}

// GabbaGoole (1663)
// return GabbaGoole
function removeTextInParan(text) {
	var openIdx = text.indexOf("(");
	var result = text.slice(0, openIdx);
	return result;
}