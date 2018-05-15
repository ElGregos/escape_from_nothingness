function Passage() {
}

Passage.prototype = {
	change: function (id) {
		var _this = this;
		$('.main').animate({opacity: 0}, {
			duration: _this.fadeout,
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

	choicesShow: function () {
		$('.choices').empty();
		for (var choiceId in this.choices) {
			var choice = new Choice(this.choices[choiceId]);
			choice.add();
		}
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
		if (!this.id) {
			this.get(game.start);//Nasty...
		}
//        this.interface = this.interface || 'game';
		this.fadein = this.fadein || 500;
		this.fadeout = this.fadeout || 500;
	},

	show: function () {
		if (history.state !== this.id) {
			window.history.pushState(this.id, this.id, "#" + this.id);
		}
		switch (this.interface) {

			case 'setup':
				$('#setup .maintext').html('<div>' + ui.txt(this.text) + '</div>');
				ui.formUpdate();
				this.choicesShow();
				$('html').css('background', 'hsl(18, 20%, 27%)');
				$('#story').hide();
				$('#setup').show();
				break;

			default:
				$('#story .maintext').html('<div>' + ui.txt(this.text) + '</div>');
				this.choicesShow();
				$('html').css('background', 'black');
				$('#story').show();
				$('#setup').hide();
		}
	}
}
;
