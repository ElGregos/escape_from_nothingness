var ui = {
	defaultTexts: {
		explore: {text: {en: "Explore", fr: "Examiner"}},
		ignore: {text: {en: "Ignore", fr: "Ignorer"}},
		next: {text: {en: "Next", fr: "Suivant"}},
		ok: {text: {en: "Ok", fr: "D'accord"}},
		pick: {text: {en: "Pick", fr: "Attraper"}},
		wait: {text: {en: "Wait", fr: "Attendre"}},
	},

	fadein: function () {
		$('#story').animate({opacity: 1}, {duration: game.story.passage.fadein});
	},

	formUpdate: function () {
		//Init inputs so they reflect game.vars.
		$('#setup .maintext input').each(function () {
			var key = this.getAttribute('data-key');
			var value = this.getAttribute('data-value');
			var gameValue = game.vars[key];
			switch (this.getAttribute('type')) {
				case 'button':
					if (value == gameValue) {
						$(this).addClass('selected');
					}
					this.onclick = function () {
						var key = this.getAttribute('data-key');
						var value = this.getAttribute('data-value');
						game.vars[key] = value;
						($('input[type=button][data-key=' + this.getAttribute('data-key') + ']')).each(function () {
							if (this.getAttribute('data-value') == value) {
								$(this).addClass('selected');
							} else {
								$(this).removeClass('selected');
							}
						});
					};
					break;
				case 'text':
					if (typeof (gameValue) !== 'undefined') {
						this.value = gameValue;
					}
					this.oninput = function () {
						var name = this.value.trim();
						game.vars[key] = name.charAt(0).toUpperCase() + name.slice(1);
//                        game.vars[key] = name;
					};
					break;
			}
		});
	},

	txt: function (txt) {
		if (typeof (txt) !== 'object') {
			txt = this.defaultTexts[txt].text;
		}
		if (game.language === 'fr' && game.vars.gender === 'f' && txt[game.language + '_f']) {
			return txt[game.language + '_f'];
		}
		return (txt[game.language] ? txt[game.language] : (txt.en ? txt.en : txt.fr));
	},

};
