function Button(btn) {
	if (!this.defaults) {
		this.init();
	}
	for (var prop in btn) {
		this[prop] = btn[prop];
	}
	if (!this.text) {
		this.text = this.defaults[this.id].text;
	}
}

Button.prototype = {
	init: function () {
		this.defaults = {
			explore:{text:{en:"Explore",fr:"Examiner"}},
			ignore:{text:{en:"Ignore",fr:"Ignorer"}},
			next: {text: {en: "Next", fr: "Suivant"}},
			ok: {text: {en: "Ok", fr: "D'accord"}},
			pick: {text: {en: "Pick", fr: "Attraper"}},
			wait: {text: {en: "Wait", fr: "Attendre"}},
		};

	},

	add: function () {
		var btn = newEl('li');
		btn.setAttribute('data-href', this.href);
		btn.innerHTML = ui.txt(this.text);
		btn.onclick = function () {
			var href = this.getAttribute('data-href');
			game.story.passage.change(href);
//			document.getElementById('audio').play();
		};
		$('#gameButtons').append(btn);
	}
};
