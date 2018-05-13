var game = {
	player: {gender: 'f', name: 'Personnage'},
	birth: 0,
	birthFrames: [
		{floater: {speed: 1, l: .05}, bgcolor: 'hsl(262, 41%, 8%)', },
		{floater: {speed: .5, l: .15}, bgcolor: 'hsl(330, 38%, 22%)'},
		{floater: {speed: .2, l: .15}, bgcolor: 'hsl(0, 36%, 36%)'},
		{floater: {speed: 0, l: 3}, bgcolor: 'hsl(10, 0%, 100%)', duration: 10}
	],

	init: function () {
		this.story = {
			passages: passages,
			passage: new Passage()
		};

		floaters.init();
	},

	languageSet: function (lang) {
		this.language = lang;
		$('#language span').removeClass("selected");
		$('#language span.' + lang).addClass("selected");
		if (this.story) {
			this.story.passage.show();
		}
	},

	launch: function () {
		this.load();
		this.init();
		this.story.passage.get('birth');
		this.story.passage.show();
		//this.searchStorage();
//		console.log(window.localStorage);
//		this.story.currentPassageShow();
		requestAnimationFrame(refresh);
	},

	load: function () {
		this.languageSet((navigator.language || navigator.userLanguage) === 'fr' ? 'fr' : 'en');
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