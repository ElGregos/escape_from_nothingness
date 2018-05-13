window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

function refresh(now) {
	floaters.move();
	requestAnimationFrame(refresh);
}


window.onload = function () {
	game.launch();

	//Change language.
	$('#language .fr').click(function () {
		game.languageSet('fr');
	});
	$('#language .en').click(function () {
		game.languageSet('en');
	});

};
