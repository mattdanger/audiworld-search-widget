/*
Title: Audiworld.com search widget
Description: Searches Audiworld forum posts via Google
Author: Matt [Danger] West (matt@mattdanger.net)
Date: June 1, 2008
*/

window.onfocus = function () {
	document.getElementById('search-input').focus();
}
 
function setup() {

    gInfoButton = new AppleInfoButton(document.getElementById("info-button"), document.getElementById("front"), "white", "white", showBack);
    gDoneButton = new AppleGlassButton(document.getElementById("done-button"), "Done", showFront);
}

function search () {
	var value = document.getElementById("search-input").value;
    var forum = " site:forums.audiworld.com/" + document.getElementById("search-forum-dropdown").value;
    
	if (value.length > 0) {
		value = encodeURIComponent (value);
        forum = encodeURIComponent (forum);
		var url = "http://www.google.com/search?q=" + value + forum ;
		if (window.widget)
			widget.openURL (url);
	}
}

function keydown (event, input) {
	if (event.keyCode == 13) { // enter or return 
		search (input);
	}
}

function showBack() {
    var front = document.getElementById("front");
    var back = document.getElementById("back");
 
    if (window.widget)
        widget.prepareForTransition("ToBack");
 
    front.style.display="none";
    back.style.display="block";
 
    if (window.widget)
        setTimeout ('widget.performTransition();', 0);
}

function showFront() {
    var front = document.getElementById("front");
    var back = document.getElementById("back");
 
    if (window.widget)
        widget.prepareForTransition("ToFront");
 
    back.style.display="none";
    front.style.display="block";
 
    if (window.widget)
        setTimeout ('widget.performTransition();', 0);
}