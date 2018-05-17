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
		btn.onclick = function () {
			var href = this.getAttribute('data-href');
			game.story.passage.change(href);
//			document.getElementById('audio').play();
		};
        $('#choices').append(btn);
	}
};
