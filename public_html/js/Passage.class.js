function Passage() {
	this.choice = new Choice();
}

Passage.prototype = {

	change: function (id) {
		objectClone(this, game.story.passagePrev);
		if (!this.id) {
			this.get(id);
			this.show();
			ui.fadein();
		} else if (id !== this.id) {
			var passageNext = new Passage();
			passageNext.get(id);
			if (this.sound !== passageNext.sound) {
				$('#audio').animate({volume: 0}, {
					duration: this.choice.fadeout,
					complete: function () {
						$('#audio')[0].pause();
					}
				});
			}
			var _this = this;

			$('#main').animate({opacity: 0}, {
				duration: this.choice.fadeout,
				complete: function () {
					_this.get(id);
					_this.show();
					switch (_this.phase) {

						case '_birth':
							//Animate floaters
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
		}
	},

	choicesShow: function () {
		$('#choices').empty();
		for (var choiceId in this.choices) {
			var choice = new Choice(this.choices[choiceId]);
			choice.add();
		}
	},

	get: function (id) {
		objectDelete(this);
		for (var passage of game.story.passages) {
			if (passage.id == id) {
				objectClone(passage, this);
				break;
			}
		}
		this.choice = new Choice();
		if (!this.id) {
			this.get(game.start);//Nasty...
		}
		this.fadein = this.fadein || 500;
	},

	show: function ( checkSound) {
		checkSound = typeof(checkSound) === 'undefined' ? true : checkSound;
		if (history.state !== this.id) {
			window.history.pushState(this.id, this.id, "#" + this.id);
		}
		$('#maintext').html('<div>' + ui.txt(this.text) + '</div>');
		this.choicesShow();

		if (checkSound && this.sound != game.story.passagePrev.sound) {
			if (this.sound) {
				$('#audio').attr('src', "sounds/" + this.sound + ".ogg");
				$('#audio')[0].volume = 0;
				$('#audio')[0].play();
				$('#audio').animate({volume: 1}, {duration: game.story.passage.fadein});
			}
		}

		switch (this.phase) {

			case 'setup':
				$('html').attr('class', 'setup');
				ui.formUpdate();
				break;

			case 'theend':
				$('html').attr('class', 'story theend');
				break;

			default:
				$('html').attr('class', 'story');

		}
	},

};
