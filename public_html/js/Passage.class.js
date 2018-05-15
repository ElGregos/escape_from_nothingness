function Passage() {
}

Passage.prototype = {
    buttonsShow: function () {
        $('.gameButtons').empty();
        for (var buttonId in this.buttons) {
            var btn = new Button(this.buttons[buttonId]);
            btn.add();
        }
    },
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
                        var name = this.value;
//                        game.vars[key] = name.charAt(0).toUpperCase() + name.slice(1);
                        game.vars[key] = name;
                    };
                    break;
            }
        });
        //Add events.
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
        this.fadein = this.fadein || 500;
        this.fadeout = this.fadeout || 500;
    }
    ,

    show: function () {
        switch (this.id) {

            case 'setup':
                $('#setup .maintext').html('<div>' + ui.txt(this.text) + '</div>');
                this.formUpdate();
                this.buttonsShow();
                $('#story').hide();
                $('#setup').show();
                break;

            default:
                $('#story .maintext').html('<div>' + ui.txt(this.text) + '</div>');
                this.buttonsShow();
                $('#story').show();
                $('#setup').hide();
        }
    }
}
;
