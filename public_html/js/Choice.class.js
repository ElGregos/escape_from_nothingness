function Choice(btn) {
	for (var prop in btn) {
		this[prop] = btn[prop];
	}
}

Choice.prototype = {
	add: function () {
		var btn = newEl('li');
		btn.setAttribute('data-href', this.href);
		btn.innerHTML = ui.txt(this.text);
		var _this = this;
		btn.onclick = function () {
			objectClone( _this, game.story.passage.choice);
			var href = this.getAttribute('data-href');
			if (typeof (_this.check) === 'function') {
				if (_this.check()) {
					game.story.passage.change(href);
				}
			} else {
				game.story.passage.change(href);
			}
//			document.getElementById('audio').play();
		};
		$('#choices').append(btn);
	}
};
