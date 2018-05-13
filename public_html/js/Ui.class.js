var ui = {
	fadein: function () {
		$('#description').add('#gameButtons').animate({opacity: 1}, {duration: 1000});
	},
	
	txt: function (txt) {
		if (typeof (txt) !== 'object') {
			return txt;
		}
		if (game.language === 'fr' && game.player.gender === 'f' && txt[game.language + '_f']) {
			return txt[game.language + '_f'];
		}
		return (txt[game.language] ? txt[game.language] : txt.en);
	},

};
