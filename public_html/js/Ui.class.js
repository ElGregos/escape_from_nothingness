var ui = {
	defaultTexts: {
		continue: {en: "Continue", fr: "Continuer"},
		explore: {en: "Explore", fr: "Examiner"},
		ignore: {en: "Ignore", fr: "Ignorer"},
		next: {en: "Next", fr: "Suivant"},
		ok: {en: "Ok", fr: "D'accord"},
		pick: {en: "Pick", fr: "Attraper"},
		wait: {en: "Wait", fr: "Attendre"},
	},

	fadein: function () {
		$('#main').animate({opacity: 1}, {duration: game.story.passage.fadein});
	},

	formUpdate: function () {
		//Init inputs so they reflect game.vars.
		$('.setup #maintext input').each(function () {
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
						game.save();
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
						game.save();
					};
					break;
			}
		});
	},

	txt: function (txt) {
		if (typeof (txt) !== 'object') {
			txt = this.defaultTexts[txt];
		}
		if (game.language === 'fr' && game.vars.gender === 'f' && txt[game.language + '_f']) {
			txt = txt[game.language + '_f'];
		} else {
			txt = (txt[game.language] ? txt[game.language] : (txt.en ? txt.en : txt.fr));
		}

		for (var key in game.vars) {
			var regex = new RegExp('_' + key + '_', 'g');
//			var regex = '_' + key + '_';
			txt = txt.replace(regex, game.vars[key]);
		}
		return txt;
	},

};
