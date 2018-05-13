function Passage() {
}

Passage.prototype = {
	buttonsShow: function () {
		$('#gameButtons').empty();
		for (var buttonId in this.buttons) {
			var btn = new Button(this.buttons[buttonId]);
			btn.add();
		}
	},

	change: function (id) {
		var _this = this;
		$('#gameButtons').animate({opacity: 0}, {duration: 1000});
		$('#description').animate({opacity: 0}, {
			duration: 1000,
			complete: function () {
				_this.get(id);
				_this.show();
				switch (_this.phase) {

					case 'birth':
						var frame = game.birthFrames[game.birth];
						var duration = frame.duration || 2;
						d3.select('html').transition()
						  .duration(1000 * duration).ease(d3.easeBackOut)
						  .style('background-color', frame.bgcolor)
						  .on('end', function () {
							  ui.fadein();
						  })
						  ;
						d3.selectAll('.floater').each(function () {
							var hsl = d3.hsl(this.style.backgroundColor);
							hsl.l += frame.floater.l;
							hsl.h += 15;
							d3.select(this)
							  .transition().duration(1000 * duration).ease(d3.easeBackOut)
							  .style('background-color', hsl)
							  .style('top', addPercent(this.style.top, (10 + rnd(4)) * duration))
							  .style('left', addPercent(this.style.left, 2 + rnd(.8) * duration))
							  ;
						})
						  ;
						game.birth++;
						break;

					default:
						ui.fadein();
				}
			}
		});
	},

	get: function (id) {
		for (var prop in this) {
			delete this[prop];
		}
		for (var passage of game.story.passages) {
			if (passage.id == id) {
				for (var prop in passage) {
					this[prop] = passage[prop];
				}
				break;
			}
		}
	},

	show: function () {
		var desc = ui.txt(this.text);
		var div = 'div';
		if (this.class) {
			div += ' class="' + this.class + '"';
		}
		$('#description').html('<' + div + '>' + desc + '</div>');
		this.buttonsShow();
	}
};
