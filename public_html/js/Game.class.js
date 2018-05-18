var game = {
	start: 'infos',
	vars: {
		gender: 'f',
		firstname: '',
		'/e': function () {
			return game.vars.gender === 'f' ? 'e' : '';
		},
		'/ete': function () {
			return game.vars.gender === 'f' ? 'ète' : 'et';
		},
		'/fille': function () {
			return game.vars.gender === 'f' ? 'fille' : 'garçon';
		},
		'/elle': function () {
			return game.vars.gender === 'f' ? 'elle' : 'il';
		},
		'/mere': function () {
			return game.vars.gender === 'f' ? 'mère' : 'père';
		},
		'/sa': function () {
			return game.vars.gender === 'f' ? 'sa' : 'son';
		},
		'/ure': function () {
			return game.vars.gender === 'f' ? 'ûre' : 'ur';
		},
		'/she': function () {
			return game.vars.gender === 'f' ? 'she' : 'he';
		},
		'/her': function () {
			return game.vars.gender === 'f' ? 'her' : 'his';
		},
		'/Her': function () {
			return game.vars.gender === 'f' ? 'Her' : 'His';
		},
		'/him': function () {
			return game.vars.gender === 'f' ? 'her' : 'him';
		},
		'/mother': function () {
			return game.vars.gender === 'f' ? 'mother' : 'father';
		},
		'/girl': function () {
			return game.vars.gender === 'f' ? 'girl' : 'boy';
		},
	},
	birth: 0,
	birthFrames: [
		{floater: {speed: 1, l: .05}, bgcolor: 'hsl(262, 41%, 8%)', },
		{floater: {speed: .5, l: .15}, bgcolor: 'hsl(330, 38%, 22%)'},
		{floater: {speed: .2, l: .15}, bgcolor: 'hsl(0, 36%, 36%)'},
		{floater: {speed: 0, l: 3}, bgcolor: 'hsl(10, 0%, 100%)', duration: 10}
	],

	init: function () {
		this.language = (navigator.language || navigator.userLanguage) === 'fr' ? 'fr' : 'en';
		this.story = {
			passages: passages,
			passage: new Passage(),
			passagePrev: new Passage(),
			choice: {}
		};
		audio = new Audio();
		storage = localStorage;
		floaters.init();
	},

	languageSet: function (lang) {
		this.language = lang;
		this.save();
		this.languageShow();
		this.story.passage.show(false);
	},

	languageShow: function () {
		$('#language span').removeClass("selected");
		$('#language span.' + this.language).addClass("selected");
	},

	launch: function () {
		this.init();
		this.load();
		var url = window.location.hash.substr(1).trim();
		this.story.passage.change(url);
//		this.story.passage.get(url);
//		this.story.passage.show();
//		ui.fadein();
		requestAnimationFrame(refresh);
	},

	load: function () {
		this.vars.gender = storage.getItem('gender') ? storage.getItem('gender') : this.vars.gender;
		this.vars.firstname = storage.getItem('firstname') ? storage.getItem('firstname') : this.vars.firstname;
		this.language = storage.getItem('language') ? storage.getItem('language') : this.language;
		this.languageShow();
	},

	save: function () {
		storage.setItem('gender', this.vars.gender);
		storage.setItem('firstname', this.vars.firstname);
		storage.setItem('language', this.language);
	}

};