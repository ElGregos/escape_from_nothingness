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

    txt: function (txt) {
        if (typeof (txt) !== 'object') {
            txt = this.defaultTexts[txt].text;
        }
        if (game.language === 'fr' && game.vars.gender === 'f' && txt[game.language + '_f']) {
            return txt[game.language + '_f'];
        }
        return (txt[game.language] ? txt[game.language] : txt.en);
    },

};
