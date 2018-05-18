var floaters = {
	init: function () {
		for (fln = 0; fln < 200; fln++) {
			var data = {
				x: rnd(100), y: rnd(100), radius: 9 + rnd(3), color: rnd(1),
				angle: rnd(), speed: rnd(.03) + .01
			};
			var floater = new Floater(data);
			floater.add();
		}
	},

	move: function () {
		$('#background').children().each(function (fltn, flt) {
			var angle = parseFloat(flt.getAttribute('data-angle'));
			var speed = parseFloat(flt.getAttribute('data-speed')) * game.birthFrames[game.birth].floater.speed;
			angle += rnd(.01) - .005;
			var left = addPercent(flt.style.left, Math.cos(Math.PI * 2 * angle) * speed);
			left = mod(left, 100);
			var top = addPercent(flt.style.top, Math.sin(Math.PI * 2 * angle) * speed);
			top = mod(top, 100);
			flt.style.left = left;
			flt.style.top = top;
			flt.setAttribute('data-angle', angle);
		});

	},

};

function Floater(data) {
	for (var prop in data) {
		this[prop] = data[prop];
	}
}

Floater.prototype = {
	add: function () {
		var floater = newEl('div');
		floater.className = 'floater';
		var color = 'hsla(' + (308 + rnd(40) - 20) + ',27%,' + (8 + this.color * 10) + '%,.5)';
		var style = '';
//		style += 'position: absolute; border-radius: 50%;';
		style += 'width:' + (this.radius * 3) + 'px;';
		style += 'height:' + (this.radius * 3) + 'px;';
		style += 'background-color: ' + color + ';';
//		style += 'box-shadow: 0 0 10px 5px ' + color + ';';
		style += 'left: ' + (this.x) + '%;';
		style += 'top: ' + (this.y) + '%;';
		floater.style = style;
		floater.setAttribute('data-angle', this.angle);
		floater.setAttribute('data-speed', this.speed);
		$('#background').append(floater);
	},

};
