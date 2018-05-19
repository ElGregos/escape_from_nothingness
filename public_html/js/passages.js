var sleepTimeout = 3000;
var sleepTimein = 3000;
var passages = [
	{
		id: 'infos',
		phase: 'setup',
		text: {
			en: "This game uses your brower's cookies to save your character.<br><br>For a better game experience, it is recommended to dim the lights and use headphones.",
			fr: "Ce jeu utilise les cookies du navigateur pour mémoriser votre personnage.<br><br>Pour une meilleure expérience, il est recommandé de jouer dans la pénombre en utilisant un casque audio."
		},
		choices: [
			{text: "continue", href: 'title'},
		]
	},
	{
		id: 'title',
		phase: 'setup',
		text: {
			en: "<h1>Escape from Nothingness</h1><br><span class='titleCredits'>Made by Grégory Béal for the AdventureJam&nbsp;2018.<br>Twitter : <a href='https://twitter.com/GregosEl' target='_blank'>@GregosEl</a></span>",
			fr: "<h1>Escape from Nothingness</h1><br><span class='titleCredits'>Créé par Grégory Béal pour l'AdventureJam&nbsp;2018.<br>Twitter : <a href='https://twitter.com/GregosEl' target='_blank'>@GregosEl</a></span>"
		},
		choices: [
			{text: "continue", href: 'setup'},
		]
	},
	{
		id: 'setup',
		phase: 'setup',
		text: {
			en: 'I will play as<br><input type="button" value="a man" data-key="gender" data-value="m"> <input type="button" value="a woman" data-key="gender" data-value="f"><br><br>whom first name will be<br><input name="firstname" type="text" maxlength="50" data-key="firstname" placeholder="mandatory"/>',
			fr: 'Je jouerai<br><input type="button" value="un homme" data-key="gender" data-value="m"> <input type="button" value="une femme" data-key="gender" data-value="f"><br><br>dont le prénom sera<br><input name="firstname" type="text" maxlength="50" data-key="firstname" placeholder="obligatoire"/>'
		},
		choices: [
			{text: {en: "and my adventure may begin", fr: "et mon aventure peut commencer"}, href: 'startGame',
				check: function () {
					return game.vars.firstname;
				}
			}
		]
	},
	{
		id: 'setup2',
		phase: 'setup',
		text: {
			en: 'My character is<br><input type="button" value="A man" data-key="gender" data-value="m"> <input type="button" value="A woman" data-key="gender" data-value="f"><br><br>whom first name is<br><input name="firstname" type="text" maxlength="50" data-key="firstname"/>',
			fr: 'Mon personnage est<br><input type="button" value="un homme" data-key="gender" data-value="m"> <input type="button" value="une femme" data-key="gender" data-value="f"><br><br>dont le prénom est<br><input name="firstname" type="text" maxlength="50" data-key="firstname"/>'
		},
		choices: [
			{text: {en: "and my adventure begins", fr: "et mon aventure commence"}, href: 'startGame'}
		]
	},

	//phase1 : wake up
	{
		id: 'startGame',
		sound: 'phase1',
		text: {
			en: "I'm... waking...<br>waking up?",
			fr: "Je suis... en train... de...<br>de me réveiller ?"
		},
		choices: [
			{text: 'next', href: 'wk9'}
		],
		fadein: 5000
	},
	{
		id: 'wk9',
		sound: 'phase1',
		text: {
			en: "At least, I think so.",
			fr: "Enfin, je crois."
		},
		choices: [
			{text: 'next', href: 'wk11', fadeout: sleepTimeout}
		]
	},
	{
		id: '',
		sound: 'phase1',
		text: {
			fr: "Je me réveille.<br><br>Où suis-je&nbsp;?<br><br><br>Comment suis-je arrivé_/e_ ici&nbsp;?",
		},
		choices: [
			{text: 'next', href: 'wk11'}
		],
		fadein: sleepTimein
	},
	{
		id: 'wk11',
		sound: 'phase1',
		text: {
			en:"I wake up.<br><br>A curious feeling...<br>of déjà vu.<br><br>As if something... already happened before.",
			fr: "Je me réveille.<br><br>Une étrange sensation...<br>de déjà vu.<br><br>Comme si quelque chose... avait déjà eu lieu avant."
		},
		choices: [
			{text: 'next', href: 'wk11_2'}
		],
		fadein: sleepTimein
	},
	{
		id: 'wk11_2',
		sound: 'phase1',
		text: {
			en: "Yes. This looks familiar. I think I already did that before.<br><br>I'm almost sure of that.",
			fr: "Oui. Ça me semble familier. Je pense que j'ai déjà fait ça avant.<br><br>J'en suis presque certain_/e_.",
		},
		choices: [
			{text: 'next', href: 'wk11_3', fadeout: sleepTimeout}
		]
	},
	{
		id: 'wk11_3',
		sound: 'phase1',
		text: {
			en: "I wake up. Now I'm sure. This is not the first time. I DID wake up before. At least once. Maybe twice.",
			fr: "Je me réveille. Maintenant j'en suis s_/ure_. Ce n'est pas la première fois. Je me suis DÉJÀ réveillé_/e_. Au moins une fois. Peut-être deux."
		},
		choices: [
			{text: "next", href: 'wk11_4'},
		],
		fadein: sleepTimein
	},
	{
		id: 'wk11_4',
		sound: 'phase1',
		text: {
			en: "I don't have any other memories though. But now that I have a few of them, I wonder what happened before that. Was there a \"before\"? Or did every awakening meant a new life, as I couldn't recall the last one?",
			fr: "Pourtant, je n'ai aucun autre souvenir. Mais maintenant que j'en ai un peu, je me demande ce qui s'est passé avant. Il y avait un \"avant\" ? Ou bien chaque réveil signifiait une nouvelle vie, puisque je n'avais aucun souvenir de la précédente ?"
		},
		choices: [
			{text: "next", href: 'cordTouched', fadeout: sleepTimeout},
		],
	},

	//The cord
	//The cord looks thinner and thinner as the foetus grows.
	{
		id: 'cordTouched',
		sound: 'phase1',
		text: {
			en: "Something touched me! It was faint, but real.",
			fr: "Quelque chose m'a frôlé_/e_ ! C'était léger, mais bien réel."
		},
		choices: [
			{text: {en: "I'll try to catch it", fr: "Je vais essayer de l'attraper."}, href: 'cordGrab'},
//			{text: {en: "I'll ignore this.", fr: "Je n'y prête pas attention."}, href: 'wallTouched', fadeout: sleepTimeout},
		],
		fadein: 200
	},
	{
		id: 'cordGrab',
		sound: 'phase1',
		text: {
			en: "I could touch the thing, but it's way too wide and long for me to grab it. Touching its smooth surface, I feel warmth and a kind of pulsation, as if it were traversed by a stream of energy. However, it does not seem to have its own will. In fact I do not know whether it is alive or not. <br> <br> In any case, it does not seem to pose any danger. Maybe I can use it to get out of here.",
			fr: "J'ai pu toucher la chose, mais elle est beaucoup trop large et longue pour que je puisse l'agripper. En touchant sa surface lisse, je ressens de la chaleur et une sorte de pulsation, comme si elle était parcourue par un flot d'énergie. Elle ne paraît pourtant pas posséder de volonté propre. En fait je ne parviens pas à savoir si elle est vivante ou pas.<br><br>En tout cas, elle ne semble pas poser de danger. Peut-être pourrai-je l'utiliser pour sortir d'ici."
		},
		choices: [
			{text: {en: "I'll pull it.", fr: "Je vais tirer dessus."}, href: 'cordPull'},
			{text: {en: "I'll push it back.", fr: "Je vais la repousser."}, href: 'cordPush'},
		],
	},
	{
		id: 'cordPush',
		sound: 'phase1',
		text: {
			en: "I easily push the thing back, it poses absolutely no resistance. Its flexibility, despite its width, remains amazing.",
			fr: "Je repousse la chose avec facilité, elle n'oppose absolument aucune résistance. Sa souplesse, malgré sa largeur, reste étonnante."
		},
		choices: [
			{text: {en: "On second thought, I'd like to examine it further.", fr: "Finalement j'aimerais bien l'examiner davantage."}, href: "cordGrab2"},
			{text: {en: "Hopefully I'll find it later.", fr: "Avec un peu de chance je la retrouverai plus tard."}, href: "wallTouched", fadeout: sleepTimeout},
		]
	},
	{
		id: 'cordPull',
		sound: 'phase1',
		text: {
			en: "I manage to pull the thing for a moment, but I have trouble coordinating my limbs and she escapes me before I could reach its end.",
			fr: "Je parviens à tirer la chose un instant, mais j'ai du mal à coordonner mes membres et elle m'échappe avant que je puisse en atteindre le bout."
		},
		choices: [
			{text: {en: "I'll try to get it back.", fr: "Je vais essayer de la récupérer."}, href: "cordGrab2"},
			{text: {en: "Nevermind.", fr: "Bon, tant pis."}, href: "wallTouched", fadeout: sleepTimeout},
		]
	},
	{
		id: 'cordGrab2',
		sound: 'phase1',
		text: {
			en: "I try to catch the nearest loop, but I have awkward movements that push the thing even further. It must be completely out of reach now.",
			fr: "Je tente d'attraper sa boucle la plus proche, mais j'ai des gestes maladroits qui repoussent la chose encore plus loin. Elle doit être complètement hors de portée maintenant."
		},
		choices: [
			{text: {en: "Nevermind.", fr: "Bon, tant pis."}, href: "wallTouched", fadeout: sleepTimeout},
		]
	},
//	{
//		text: {en: "There are too many things I don't understand here. That's the most disorienting. The easiest way to have a grip on this is to name them. Yeah, this way, the unknown will be known."}
//	},

	//1re vision (flash à travers les paupières)
	{
		id: '',
		text: {
			en: "Wow! What was that?", fr: "Hola, c'était quoi ça ?"
		},
		choices: [
			{text: {fr: "J'aimerais bien le savoir."}, href: ""},
			{text: "next", href: "sound1"},
		]
	},
	//1er son (cœur), que les aigus au début. Les sons suivants gagnent en basses.
	{
		id: '',
		text: {fr: "Il y a quelque chose de nouveau."},
		choices: [
			{text: "next", href: "wallTouched"},
		]
	},
	//The wall touched me!
	{
		id: 'wallTouched',
		sound: 'phase2',
		text: {
			en: "I was awakened by a series of contacts on my body. It began with almost imperceptible rustlings. Then these contacts became more insistent, as if someone wanted to catch me through something thick.",
			fr: "J'ai été réveillé_/e_ par une série de contacts sur mon corps. Cela a commencé par des frôlements presque imperceptibles. Puis ces contacts sont devenus plus insistants, comme si quelqu'un voulait m'attraper à travers quelque chose d'épais."
		},
		choices: [
			{text: {en: "I want to know where it comes from.", fr: "Je veux savoir d'où cela vient."}, href: "wallTouchedExam"},
			{text: {en: "I'll remain discreet.", fr: "Je vais rester discr_/ete_."}, href: "wallTouchedWait"},
			{text: {en: "I'll hide and protect myself.", fr: "Je vais me mettre à l'abri."}, href: "wallTouchedRetreat1"},
		],
		fadein: sleepTimein
	},
	{
		id: 'wallTouchedExam',
		sound: 'phase2',
		text: {
			en: "I approach, scanning the void with my hands to look for what is causing these contacts. I can not find anything more than the wall in front of me. It is perfectly smooth. Then a bump forms on it, followed by a second, and a third, which join in a wave deforming its surface. It is the whole wall that tries to touch me!",
			fr: "Je m'approche en balayant le vide de mes mains pour chercher ce qui est à l'origine de ces contacts. Je ne trouve rien de plus que le mur en face de moi. Il est parfaitement lisse. Puis une bosse se forme dessus, suivie d'une deuxième, et d'une troisième, qui se rejoignent en une vague déformant sa surface. C'est le mur tout entier qui cherche à me toucher !"
		},
		choices: [
			{text: {en: "I look for a place to hide.", fr: "Je chercher où me cacher."}, href: "wallTouchedRetreat2"},
			{text: {en: "I don't move.", fr: "Je ne bouge plus."}, href: "wallTouchedWait"},
			{text: {en: "Curiosity pushes me to touch one of these bumps.", fr: "La curiosité me pousse à toucher une de ces bosses."}, href: "wallTouchedPush"},
		]
	},
	{
		id: 'wallTouchedExam2',
		sound: 'phase2',
		text: {
			en: "I grope around the wall, full of apprehension. I can still see the bumps that twist its surface, but now that I could touch them, they are less scary.",
			fr: "J'approche en tâtonnant le mur, plein_/e_ d'appréhension. J'y décèle encore les bosses qui tordent sa surface, mais maintenant que j'ai pu les toucher, elles me font moins peur."
		},
		choices: [
			{text: {en: "I'm going back to hide.", fr: "Je retourne me cacher."}, href: "wallTouchedRetreat2"},
			{text: {en: "I gather my courage and try to squeeze one of these bumps.", fr: "Je rassemble mon courage et tente de presser une de ces bosses."}, href: "wallTouchedPush"},
		]
	},
	{
		id: 'wallTouchedWait',
		sound: 'phase2',
		text: {
			en: "I wait, trying not to react to these contacts. They end up feeling benevolent to me. I can even guess, in their tact, a desire not to hurt me. I wonder if they are not trying to communicate.",
			fr: "J'attend en m'efforçant de ne pas réagir à ces contacts. Ils finissent par me sembler bienveillants. Je peux même deviner, dans leur délicatesse, une volonté de ne pas me blesser. Je me demande s'ils ne cherchent pas à communiquer."
		},
		choices: [
			{text: {en: "Maybe I should exchange this contact.", fr: "Je devrais peut-être échanger ce contact."}, href: "wallTouchedPush"},
			{text: {en: "I prefer to protect myself.", fr: "Je préfère me protéger."}, href: "wallTouchedRetreat2"},
		]
	},
	{
		id: 'wallTouchedRetreat1',
		sound: 'phase2',
		text: {
			en: "I try to go in the opposite direction, but it's almost impossible for me to move. However, I manage to curl up enough to be out of reach.",
			fr: "J'essaie d'aller dans la direction opposée, mais il m'est presque impossible de me déplacer. Je parviens toutefois à me recroqueviller assez pour être hors de portée."
		},
		choices: [
			{text: {en: "I'll stay away.", fr: "Je vais rester à l'écart."}, href: "wallTouchedWaitBack"},
			{text: {en: "I'm still intrigued, I'll get closer.", fr: "Je suis quand même intrigué_/e_, je vais me rapprocher."}, href: "wallTouchedExam"},
		]
	},
	{
		id: 'wallTouchedRetreat2',
		sound: 'phase2',
		text: {
			en: "I can hardly go back, but curl up enough to be out of reach.",
			fr: "Je parviens difficilement à reculer, mais me recroqueville assez pour être hors de portée."
		},
		choices: [
			{text: {en: "I'll stay away.", fr: "Je vais rester à l'écart."}, href: "wallTouchedWaitBack"},
		]
	},
	{
		id: 'wallTouchedWaitBack',
		sound: 'phase2',
		text: {
			en: "I wait, hoping that my anguish fades. I will have to wait anyway, because I have no way of knowing if the thing at the origin of these palpations has moved away. All this tired me.",
			fr: "J'attend en espérant que mon angoisse s'estompe. De toutes façons il va falloir que je patiente, car je n'ai aucun moyen de savoir si la chose à l'origine de ces palpations s'est éloignée. Tout ceci m'a fatigué_/e_."
		},
		choices: [
			{text: {en: "Maybe I should take the opportunity to sleep.", fr: "Je devrais peut-être en profiter pour dormir."}, href: "echo", fadeout: sleepTimeout},
			{text: {en: "I'll still check what it is about.", fr: "Je vais quand même vérifier ce qu'il en est."}, href: "wallTouchedExam2"},
		]
	},
	{
		id: 'wallTouchedPush',
		sound: 'phase2',
		text: {
			en: "The bumps and waves come and go slowly on the surface of the wall. I try to touch one but it has already disappeared. In fact, all the bumps seem to have disappeared the moment my hand landed. The surface of the wall is tense again, as if it were waiting for something. <br> <br> I let my hand slide on its surface. It is incredibly sweet and mellow. I feel its folds forming and stretching while my hand drifts with ease. Lingering on these sensations, it seems to me that there are in fact two walls one on the other: one thin which slips on the second, thicker.",
			fr: "Les bosses et vagues vont et viennent lentement sur la surface du mur. J'essaie d'en toucher une mais elle a déjà disparu. En fait, toutes les bosses semblent avoir disparu à l'instant où ma main s'est posée. La surface du mur est de nouveau tendue, comme s'il était en attente de quelque chose.<br><br>Je laisse ma main glisser sur sa surface. Elle est incroyablement douce et moelleuse. Je sens ses plis se former et se retendre pendant que ma main dérive avec aisance. En m'attardant sur ces sensations, il me semble qu'il y a en fait deux murs l'un sur l'autre : l'un, fin, qui glisse sur le second, plus épais."
		},
		choices: [
			{text: "next", href: "wallTouchedPush2"},
		]
	},
	{
		id: 'wallTouchedPush2',
		sound: 'phase2',
		text: {
			en: "Slowly, I press more and more. My hand almost disappears into the wall. It is hot. Then the wall, at this place, gets harder and harder, pushing my hand away. It is a hump that, slowly, appears just below! I try to push it away. It resists, then finally disappear, leaving the wall back to its flexibility.<br><br> I have the strong feeling that the wall has developed these reliefs for a purpose, maybe to get in contact with me. As to whether I should worry about it... As for the thing, I wonder if it's something alive. Does the wall and the thing form a whole?",
			fr: "Lentement, j'appuie de plus en plus fort. Ma main disparaît presque dans le mur. Il est chaud. Puis le mur à cet endroit devient de plus en plus dur, repoussant ma main. C'est une bosse qui, doucement, apparaît juste en-dessous ! J'essaie de la repousser. Elle résiste, puis finit pas s'estomper, laissant le mur retourner à sa souplesse.<br><br>J'ai la forte impression que le mur a développé ces reliefs dans un but, peut-être d'entrer en contact avec moi. Quant à savoir si je dois m'en inquiéter... Comme pour la chose, je me demande s'il s'agit de quelque chose de vivant. Est-ce que le mur et la chose forment un tout ?"
		},
		choices: [
			{text: "next", href: "echo"},
		]
	},

	//Wall getting closer. Kicking the wall
	//Music
	{
		id: '',
		text: {fr: ""},
		choices: [
			{text: {fr: ""}}
		]
	},

	//Dream
	//Skin is slippy (vernix)
	//Echographie (Medical ultrasound) : he or she?
	/*
	 *  ...sûre... fille...
	 */
	{
		id: 'echo',
		sound: 'phase2',
		text: {
			en: "Something woke me up. Or rather, an impression. The feeling that someone was watching me.",
			fr: "Quelque chose m'a réveillé_/e_. Ou plutôt, une impression. Le sentiment qu'on m'observait. Comme si j'étais surveillé_/e_."
		},
		choices: [
			{text: {en: "I'll examine the surroundings.", fr: "Je vais examiner les environs."}, href: "echoCheck"},
			{text: {en: "I'll wait and try to learn more about this.", fr: "Je vais essayer d'en apprendre plus."}, href: "echoWait"},
		],
		fadein: sleepTimein
	},
	{
		id: 'echoWait',
		sound: 'phase2',
		text: {
			en: "I think something unusual is happening. I manage to get some sounds, but I can not identify them.\n\
<ul class='dialogue far'><li>girl... knew... months... looks like... observe...</li></ul>\n\
But that persuades me that indeed, some are really examining myself. And what is even more unpleasant is that it is one way only.",
			fr: "Je crois qu'il se passe bien quelque chose d'inhabituel. Je parviens à deviner quelques sons, sans pouvoir les identifier.\n\
<ul class='dialogue far'><li>fille... savais... mois... dirait... observe...</li></ul>\n\
Mais cela me persuade que oui, on est bien en train de m'examiner. Et c'est d'autant plus désagréable que c'est à sens unique."
		},
		choices: [
			{text: {en: "I'll examine the surroundings.", fr: "Je vais examiner les environs."}, href: "echoCheck"},
			{text: {en: "I'll wait for it to pass, and go back to sleep.", fr: "Je vais attendre que ça passe, et me rendormir."}, href: "echoSleep"},
		]
	},
	{
		id: 'echoCheck',
		sound: 'phase2',
		text: {
			en: "I extend my hands to feel the wall. It is slightly distorted. It's like a little wave that repels its surface in circular motions, stops suddenly, and then leaves again in quick movements. I am fascinated by these movements, while being plunged into some anxiety.",
			fr: "Je tends les mains pour palper le mur. Il est légèrement déformé. Cela fait comme une petite vague qui repousse sa surface en mouvements circulaires, s'arrête subitement, puis repars en mouvements vifs. Je suis fasciné_/e_ par ces déplacements, tout en étant plongé_/e_ dans une certaine inquiétude."
		},
		choices: [
			{text: {en: "I'll try to learn more about this.", fr: "Je vais essayer d'en apprendre plus."}, href: "echoWait"},
			{text: {en: "I'll wait for it to pass, and go back to sleep.", fr: "Je vais attendre que ça passe, et me rendormir."}, href: "echoSleep"},
		],
	},
	{
		id: 'echoSleep',
		sound: 'phase2',
		text: {
			en: "I am still too tired to be really worried anyway. I'm just about to go back to sleep as easily as I was awake.",
			fr: "Je suis de toutes façons encore trop fatigué_/e_ pour être vraiment inqui_/ete_. Je suis à peu près s_/ure_ de me rendormir aussi facilement que j'ai été réveillé_/e_."
		},
		choices: [
			{text: "next", href: "cord2Touched", fadeout: sleepTimeout},
		],
	},

	//Cord is a friend
	{
		id: 'cord2Touched',
		sound: 'mozart',
		text: {
			en: "The thing came and pet my cheek, which woke me up. I got used to its floating presence near me, always pretending to ignore me, as if it was an invitation to play.",
			fr: "La chose est venue caresser ma joue, ce qui m'a réveillé_/e_. Je me suis habitué_/e_ à sa présence, elle flotte en permanence près de moi en faisant mine de m'ignorer, comme si elle m'invitait à jouer."
		},
		choices: [
			{text: {en: "I'll try to catch and get to know it better.", fr: "Je vais l'attraper pour mieux la connaître."}, href: "cord2Play"},
			{text: {en: "I'll push it away so that I can go back to sleep.", fr: "Je vais la repousser pour pouvoir me rendormir."}, href: "cord2Sleep"},
		],
		fadein: sleepTimein
	},
	{
		id: 'cord2Play',
		sound: 'mozart',
		text: {
			en: "I manage to pull it to me. It got thinner: I once could move it only by placing my arms around, and now I can almost grab it with my both hands. I also seem to control my movements more easily. So, what will I do with the thing?",
			fr: "Je parviens à l'attirer à moi. Sa largeur a diminué : alors qu'avant je ne pouvais la déplacer qu'en l'entourant de mes bras, je parviens maintenant presque à la saisir des deux mains. Il semble aussi que je gagne en agilité.<br><br>Bon, que vais-je faire de la chose ?"
		},
		choices: [
			{text: {en: "I'll pull it down.", fr: "Je vais la tirer vers le bas."}, href: "cord2Down"},
			{text: {en: "I'll pull it up.", fr: "Je vais la tirer vers le haut."}, href: "cord2Up"},
			{text: {en: "I'll hug it.", fr: "Je vais l'entourer de mes bras."}, href: "cord2Hug"},
			{text: {en: "I'll check its taste.", fr: "Je vais voir quel goût elle a."}, href: "cord2Taste"},
		]
	},
	{
		id: 'cord2Down',
		sound: 'mozart',
		text: {
			en: "I firmly grab it with my both hands, which I pull down. I quickly figure this movement needs quite some dexterity, as the thing is slippy and could easily escape. This exercise requires a lot of focus, but I find it rather amusing, and manage to let it down between my feet for quite a moment. Until something holds it at a distance over me.",
			fr: "Je l'entoure fermement de mes mains, que je tire vers le bas. Je comprends rapidement que ce mouvement nécessite une bonne dose de dextérité, car la chose est glissante et a vite fait de s'échapper. C'est un exercice qui demande énormément de concentration, mais que je trouve plutôt amusant, et je parviens à la faire glisser entre mes pieds un bon moment. Jusqu'à ce que quelque chose la retienne au-dessus de moi."
		},
		choices: [
			{text: {en: "I'll try to pull it harder.", fr: "Je vais tirer encore en insistant."}, href: "cord2Down2"},
			{text: {en: "I'll let it go and try something else.", fr: "Je vais la lâcher et essayer autre chose."}, href: "cord2Play2"},
		]
	},
	{
		id: 'cord2Down2',
		sound: 'mozart',
		text: {
			en: "The thing seems securely hooked, and pulling it asks for a large deal of energy, besides agility. But by gathering all my strength, I finally unhook it at once!<br><br>Well... no. I rather think I pulled myself up. And now that I have no support, I just have to let myself slide down.",
			fr: "La chose semble solidement accrochée, et tirer dessus demande énormément d'énergie, en plus de l'agilité. Mais en y mettant toute ma force, j'arrive à la décrocher d'un seul coup !<br><br>Ah... non. Je crois que c'est moi-même que j'ai soulevé_/e_. Et maintenant que je suis sans appui, je n'ai plus qu'à me laisser glisser."
		},
		choices: [
			{text: {en: "I'll keep experimenting on the thing.", fr: "Je vais continuer mes expériences sur la chose."}, href: "cord2Play2"},
			{text: {en: "I'll leave it alone and rest.", fr: "Je vais la laisser tranquille et me reposer."}, href: "cord2Sleep"},
		]
	},
	{
		id: 'cord2Play2',
		sound: 'mozart',
		text: {
			en: "I still hold the thing, and wonder about what kind of research to apply on it now.",
			fr: "J'ai toujours la chose entre les mains, je me demande à quelle sorte de recherche je vais passer maintenant."
		},
		choices: [
			{text: {en: "I'll pull it down.", fr: "Je vais la tirer vers le bas."}, href: "cord2Down"},
			{text: {en: "I'll pull it up.", fr: "Je vais la tirer vers le haut."}, href: "cord2Up"},
			{text: {en: "I'll hug it.", fr: "Je vais l'entourer de mes bras."}, href: "cord2Hug"},
			{text: {en: "I'll check its taste.", fr: "Je vais voir quel goût elle a."}, href: "cord2Taste"},
			{text: {en: "I'll leave it alone and rest.", fr: "Je vais la laisser tranquille et me reposer."}, href: "cord2Sleep"},
		]
	},
	{
		id: 'cord2Up',
		sound: 'mozart',
		text: {
			en: "I grab it with both hands and lift it, which instantly surprises me as I imagined it to be way heavier. Yet, I lift it easily, and let it fall with slowness, as if it was floating. I manage to unroll it for some time, until something holds it.",
			fr: "Je l'attrape des deux mains et la soulève, ce qui me surprend aussitôt, car je l'imaginais beaucoup plus lourde. Pourtant, je la soulève avec facilité, et ne la sens retomber qu'avec lenteur, comme si elle flottait. Je parviens ainsi à dérouler la chose quelque temps, jusqu'à ce qu'elle soit retenue par quelque chose."
		},
		choices: [
			{text: {en: "I'll try to pull it harder.", fr: "Je vais tenter de tirer plus fort."}, href: "cord2Up2"},
			{text: {en: "I'll drop it and try something else.", fr: "Je vais la lâcher et essayer autre chose."}, href: "cord2Play2"},
		]
	},
	{
		id: 'cord2Up2',
		sound: 'mozart',
		text: {
			en: "I grasp the thing the best I can and pull it with all my strength, but a very uncomfortable feeling then runs through my belly. I try again, more slowly, which triggers the same unpleasant feeling. It's strange. Is it its way of making me understand that it has enough? Maybe I should show more sensibility towards the thing. There is not much else here, and I don't want to be suspicious of it.",
			fr: "J'agrippe du mieux la chose et tire dessus de toutes mes forces, mais une sensation très désagréable parcourt alors mon ventre. Je refais une tentative, plus doucement, ce qui déclenche la même sensation déplaisante. C'est étrange. Est-ce sa façon de me faire comprendre qu'elle en a assez ? Je devrais peut-être montrer plus de délicatesse envers la chose. Il n'y a pas grand-chose d'autre ici, et je ne veux pas avoir à m'en méfier."
		},
		choices: [
			{text: {en: "I'll try some other experiences.", fr: "Je vais tenter d'autres expériences."}, href: "cord2Play2"},
			{text: {en: "I'll leave it alone and rest.", fr: "Je vais la laisser tranquille et me reposer."}, href: "cord2Sleep"},
		]
	},
	{
		id: 'cord2Hug',
		sound: 'mozart',
		text: {
			en: "I hug the thing and bring it against me. It is flexible, warm and soft, and to tighten it gives a very pleasant warm feeling. I wonder if it also likes this contact. Anyway, it does not try to flee. We stay like that for a moment, then I gently push it away from me.",
			fr: "Je place mes bras autour de la chose et l'amène contre moi. Elle est souple, chaude et douce, et la serrer ainsi procure une sensation chaleureuse très agréable. Je me demande si elle apprécie aussi ce contact. En tout cas elle ne cherche pas à fuir. Nous restons ainsi un moment, puis je l'écarte doucement de moi."
		},
		choices: [
			{text: {en: "I'll try some other experiences.", fr: "Je vais tenter d'autres expériences."}, href: "cord2Play2"},
			{text: {en: "I'll leave it alone and rest.", fr: "Je vais la laisser tranquille et me reposer."}, href: "cord2Sleep"},
		]
	},
	{
		id: 'cord2Taste',
		sound: 'mozart',
		text: {
			en: "I bring the thing to my mouth, without finding any particular taste for it. Or rather, yes: its taste is a bit like my hands, which I sometimes lick when I'm worried, a rather efficient method to help me not to worry. Somehow, it also has a taste of the emptiness around me. <br> <br>Its texture, which I discovered by nibbling it, is more peculiar. At once soft, slightly rough, and slippery. And the energy that runs through it is clearly noticeable. Which makes me choose to define the thing as alive.",
			fr: "J'amène la chose à ma bouche, sans lui trouver de goût particulier. Ou plutôt, si : elle a un peu le même goût que mes mains, que je lèche parfois quand je suis inqui_/ete_, une méthode qui me rassure assez efficacement. Elle a aussi un peu le goût du vide qui m'entoure.<br><br>Sa texture, que je découvre en la mordillant, est plus particulière. À la fois douce, légèrement rugueuse, et glissante. Et l'énergie qui la parcourt est nettement sensible. Ce qui me fait opter pour définir la chose comme étant vivante."
		},
		choices: [
			{text: {en: "I'll try some other experiences.", fr: "Je vais tenter d'autres expériences."}, href: "cord2Play2"},
			{text: {en: "I'll leave it alone and rest.", fr: "Je vais la laisser tranquille et me reposer."}, href: "cord2Sleep"},
		]
	},
	{
		id: 'cord2Sleep',
		sound: 'mozart',
		text: {
			en: "By the way it slips, I can guess the thing slowly moving away, while I feel the muscles of my tired body relax.",
			fr: "Par ses glissements, je devine la chose qui s'éloigne lentement, tandis que je sens les muscles de mon corps fatigué se relâcher."
		},
		choices: [
			{text: "next", href: "wallClosest", fadeout: sleepTimeout},
		]
	},

	//Dream = memory

	//Remember the taste has changed

	//Eyes opened

	//The wall is a light

	//Cord 3
	/*
	 * La chose a perdu beaucoup de sa largeur. Je la sens lovée sur mon ventre, alors qu'auparavant elle flottait librement, suivant son désir. Maintenant, j'ai le sentiment qu'elle n'a plus envie de jouer. Peut-être a-t-elle aussi besoin de se reposer.
	 */

	// Going upside-down
	{
		id: 'wallClosest',
		sound: 'mozart',
		text: {
			en: "I already noticed that the wall was getting closer to each waking up, each time becoming a little more oppressive. It surrounds me now from all sides. If this continues, I will soon barely be able to move my head. On the other hand, the bottom of my body seems to have a little more space.",
			fr: "J'avais déjà remarqué que le mur se rapprochait légèrement à chaque réveil, devenant chaque fois un peu plus oppressant. Il m'entoure maintenant de toutes parts. Si cela continue, je pourrai bientôt à peine bouger la tête. Par contre, le bas de mon corps semble disposer d'un peu plus de place."
		},
		choices: [
			{text: {en: "I'll try to find a better position.", fr: "Je vais essayer de trouver une meilleure position."}, href: 'wallClosestMove'},
			{text: {en: "I'll wrestle to free up some space.", fr: "Je vais me débattre pour libérer un peu d'espace."}, href: 'wallClosestPush'},
		],
		fadein: sleepTimein
	},
	{
		id: 'wallClosestPush',
		sound: 'mozart',
		text: {
			en: "Helping myself with every part of my body, hand, foot, back, head, I try to push the wall on all sides. That's enough to push it away for a short time, before it comes back quickly to flatten itself against me. But in the maneuver, I feel my body rotating little by little.<br><br>Something curious then happens.",
			fr: "En m'aidant de chaque partie de mon corps, main, pied, dos, tête, je tente de repousser le mur de tout côté. Cela suffit à l'éloigner un court instant, avant qu'il revienne rapidement se plaquer contre moi. Mais dans la manœuvre, je sens mon corps pivoter petit à petit.<br><br>Il se passe alors une chose curieuse."
		},
		choices: [
			{text: "next", href: "wallClosestPush2"},
		]
	},
	{
		id: 'wallClosestPush2',
		sound: 'mozart',
		text: {
			en: "A bump suddenly deforms the wall, as if something pushed it from the other side. I feel that I have already experienced this, and that this experience has been interesting. I think it was linked to an attempt at communication. In the meantime, since I am tackled against this wall, this bump pushes me too.",
			fr: "Une bosse déforme subitement le mur, comme si quelque chose le poussait depuis l'autre côté. J'ai l'impression d'avoir déjà vécu cela, et que cette expérience a été intéressante. Je crois que c'était lié à une tentative de communication. En attendant, puisque je suis plaqué_/e_ contre ce mur, cette bosse me pousse également."
		},
		choices: [
//			{text: {fr: "Je vais à mon tour appuyer sur le mur."}, href: ""},
			{text: {en: "I'll wait and see what's going on.", fr: "Je vais attendre de voir ce qui se passe."}, href: "wallClosestPush3"},
			{text: {en: "I'll try to change my position.", fr: "Je vais tenter de changer de position."}, href: "wallClosestMove"},
		]
	},
	{
		id: 'wallClosestPush3',
		sound: 'mozart',
		text: {
			en: "A second bump appears, opposite to the first, and deforms the wall in a circular motion. The first hump follows the same movement, as if the wall had decided to caress me gently. Then a series of stronger pressures, and wider circular motions, transformed these caresses into a more vigorous massage. I think the wall likes my position as little as I do and tries to relieve his own discomfort.",
			fr: "Une deuxième bosse apparaît, opposée à la première, et déforme le mur dans un mouvement circulaire. La première bosse suit le même mouvement, comme si le mur avait décidé de me caresser doucement. Puis des séries de pressions plus fortes, et de mouvements circulaires plus amples, ont transformé ces caresses en un massage plus vigoureux. Je crois que le mur apprécie aussi peu que moi ma position et tente de soulager son propre inconfort."
		},
		choices: [
			{text: {en: "I'll let it do.", fr: "Je vais le laisser faire."}, href: "wallClosestPush4"},
			{text: {en: "I'll help it.", fr: "Je vais l'aider."}, href: "wallClosestMove"},
		]
	},
	{
		id: 'wallClosestPush4',
		sound: 'mozart',
		text: {
			en: "By dint of movement, I feel my body that rotates, without me even wanting it.",
			fr: "À force de mouvements, je sens mon corps qui pivote, sans même que je le veuille."
		},
		choices: [
			{text: "next", href: "wallClosestFall"},
		]
	},
	{
		id: 'wallClosestMove',
		sound: 'mozart',
		text: {
			en: "I gather my hands under my chin, and try to turn around by moving my shoulders. The wall stretches, but keeps a surprising flexibility, and the maneuver proceeds without too much difficulty. Until my head and the bottom of my body are each sinking into a hollow. The tension of the wall then blocks me in this position, my body uncomfortably compressed from top to bottom.",
			fr: "Je joins les mains sous mon menton, et joue des épaules pour essayer de me retourner. Le mur se tend, mais garde une souplesse étonnante, et la manœuvre se déroule sans trop de difficulté. Jusqu'à ce que ma tête et le bas de mon corps viennent chacun s'enfoncer dans un creux. La tension du mur me bloque alors dans cette position, mon corps désagréablement comprimé de haut en bas."
		},
		choices: [
			{text: {en: "I'll try to curl up.", fr: "Je vais essayer de me recroqueviller."}, href: "wallClosestMove2"},
			{text: {en: "I will stiffen to relax the wall and release my body.", fr: "Je vais me raidir pour détendre le mur et dégager mon corps."}, href: "wallClosestMove3"},
		]
	},
	{
		id: 'wallClosestMove2',
		sound: 'mozart',
		text: {
			en: "I fold back on myself, allowing my head, then my feet, to come out of their hollow.",
			fr: "Je me replie sur moi-même, permettant à ma tête, puis mes pieds, de sortir de leur creux."
		},
		choices: [
			{text: "next", href: "wallClosestFall"},
		]
	},
	{
		id: 'wallClosestMove3',
		sound: 'mozart',
		text: {
			en: "The wall utters a heartbreaking cry that stops my attempt. I wait anxiously for a moment, wondering what will follow, then I pull myself together to free myself before the wall traps me again. I take my head out of its recess, the wall then takes its shape back by expelling my feet.",
			fr: "Le mur lance un cri déchirant qui interrompt ma tentative. J'attends avec appréhension un court instant, me demandant ce qui va suivre, puis je me ressaisis pour me dégager avant que le mur ne me piège à nouveau. Je sors ma tête de son renfoncement, le mur reprend alors sa forme en expulsant mes pieds."
		},
		choices: [
			{text: "next", href: "wallClosestFall"},
		]
	},
	{
		id: 'wallClosestFall',
		sound: 'mozart',
		text: {
			en: "I feel my body slowly sliding along the wall, which turns this fall into a long caress. So much so that I slowly fall asleep.",
			fr: "Je sens alors mon corps glisser lentement le long du mur, ce qui fait de cette chute une longue caresse. Tant et si bien que je m'endors doucement."
		},
		choices: [
			{text: "next", href: "urge", fadeout: sleepTimeout},
		]
	},

	//Urge to go out (eaux, contractions)
	{
		id: 'urge',
		sound: "birth",
		text: {
			en: "I barely slept. My position is very uncomfortable. My head still had a little space, but now the wall has come closer to a point where I can hardly move any part of my body anymore. I have to make senseless efforts for the least displacement, which depletes me, and this precise position prevents me from really resting.",
			fr: "J'ai à peine dormi. Ma position est très inconfortable. Ma tête disposait encore d'un peu d'espace, mais maintenant le mur s'est rapproché à un point où je ne peux quasiment plus bouger la moindre partie de mon corps. Il me faut faire des efforts insensés pour le moindre déplacement, ce qui m'épuise, et justement cette position m'empêche de vraiment me reposer."
		},
		choices: [
			{text: "next", href: "urge2", fadeout: sleepTimeout},
		],
		fadein: sleepTimein
	},
	{
		id: 'urge2',
		sound: "birth",
		text: {
			en: "This is not going well at all. As I woke up, I felt a sliding motion all around my face, as if the emptiness around me was slowly sucked into an issue over my head. At the same time, I feel irritation rising up my legs. It seems that the emptiness around me is being replaced by something else, for which I do not feel ready yet.",
			fr: "Ça ne va pas du tout. En me réveillant, j'ai senti un mouvement de glissement tout autour de mon visage, comme si le vide qui m'entoure était lentement aspiré vers une issue au-dessus de ma tête. Dans le même temps, je sens une irritation monter le long de mes jambes. On dirait que le vide autour de moi est remplacé par autre chose, pour laquelle je ne me sens pas prêt_/e_."
		},
		choices: [
			{text: "next", href: "", fadeout: sleepTimeout},
		],
		fadein: sleepTimein
	},
	/*
	 * 
	 */
	/*
	 *  
	 */

	//Birth
	{
		id: 'birth',
		sound: "birth",
		phase: 'birth',
		text: {
			en: "I don't know how this is going to end. I know I will not be able to stay here any longer. I must go out of there, but I don't think I can do it alone. And I do not see anything that can help me.",
			fr: "Je ne sais pas comment ça va finir. Je sais que je ne pourrai pas rester encore longtemps ici. Il faut absolument que je sorte de là, mais je ne crois pas pouvoir y arriver seul_/e_. Et je ne vois rien qui puisse m'aider."
		},
		choices: [
			{text: 'next', href: 'birth2'},
		],
		fadein: sleepTimein
	},
	{
		id: 'birth2',
		sound: "birth",
		phase: 'birth',
		text: {
			en: "I can't stand being here anymore. The wall around me is fraying and seems to reject me. For some time now, he has been shaking more and more strongly, as if he held me responsible for his condition.",
			fr: "Je ne supporte plus d'être ici. Le mur autour de moi s'effiloche et semble me rejeter. Depuis quelques temps, il est secoué de vibrations, de plus en plus fortes, comme s'il me tenait pour responsable de son état."
		},
		choices: [
			{text: 'next', href: 'birth3'}
		]
	},
	{
		id: 'birth3',
		sound: "birth",
		phase: 'birth',
		text: {
			en: "The vibrations turned to violent shakes. I'll try to use them to get out of here, I absolutely have to run away from this crumbling world. The only possible exit seems to be above my head, I have no choice, I have to take advantage of the tremors of the wall to try to escape.",
			fr: "Les vibrations sont devenues de violentes secousses. Je vais essayer de les utiliser pour sortir d'ici, je dois absolument fuir ce monde qui s'écroule. La seule issue possible semble être au-dessus de ma tête, je n'ai plus le choix, je dois profiter des tremblements du mur pour tenter de m'échapper."
		},
		choices: [
			{text: 'next', href: 'birth4'}
		]
	},
	{
		id: 'birth4',
		sound: "birth",
		phase: 'birth',
		text: {
			en: "What did I do?! It was the worst idea I ever had! I feel something boiling in my chest, a dense ball of fear and anger that tries to escape my throat. I won't be able to contain it. I can not breathe, my skin is burning! PLEASE! SOMEONE! HELP ME!!",
			fr: "Mais qu'est-ce que j'ai fait ?! C'était la pire idée que j'ai jamais eue ! Je sens bouillir quelque chose dans ma poitrine, une boule dense de peur et de colère qui tente de franchir ma gorge. Je ne vais pas pouvoir la contenir. Je ne peux plus respirer, ma peau est en train de brûler ! PAR PITIÉ ! QUE QUELQU'UN M'AIDE !!"
		},
		choices: [
			{text: 'next', href: 'postBirth', fadeout: 5000}
		]
	},

	//Post-birth
	{
		id: "postBirth",
		sound: "birth",
		text: {
			en: "<ul class='dialogue'>\n\
<li>Oh, what a beautiful little _/girl_! How are you going to call _/him_?</li>\n\
<li>_firstname_... _/Her_ dad and I... we really like this name.</li>\n\
<li>_firstname_. What an adorable name. Hello, _firstname_!</li>\n\
</ul>I'm smiling. I don't know why. I can't help myself.",
			fr: "<ul class='dialogue'>\n\
<li>Oh là là, quelle magnifique petit_/e_ _/fille_ ! Comment allez-vous l'appeler&nbsp;?</li>\n\
<li>_firstname_... Son papa et moi... nous aimons beaucoup ce prénom.</li>\n\
<li>_firstname_. Quel prénom adorable. Bonjour, _firstname_ !</li>\n\
</ul>Je souris. Je ne sais pas pourquoi. Je ne peux pas m'en empêcher."
		},
		choices: [
			{text: "next", href: "postBirth2"}
		],
		fadein: 5000
	},
	{
		id: "postBirth2",
		sound: "birth",
		text: {
			en: "<ul class='dialogue'><li>Oh! Look how _/she_'s smiling! It seems _/she_ really likes _/her_ name.</li></ul>\n\
I'm flying again. I feel my body firmly held by something that brings me to the lying down creature. Her hair, her face and her eyes are soaked, but it's her smile that I really notice. Her eyes follow me. Another creature is leaning behind her and stares at me with the same expression.\n\
<ul class='dialogue'><li>It was the name of _/her_ grand_/mother_. At least, _/she_ always wanted us to call _/him_ by that name. I would have liked so much that _/she_ be here.</li></ul>",
			fr: "<ul class='dialogue'><li>Oh ! Regardez comme _/elle_ sourit ! On dirait que son prénom lui plaît.</li></ul>\n\
Je m'envole à nouveau. Je sens mon corps fermement tenu par quelque chose qui m'amène à la créature allongée. Ses cheveux, son visage et ses yeux sont trempés, mais c'est son sourire que je remarque le plus. Son regard ne me quitte pas. Une autre créature se tient penchée derrière elle et me fixe avec la même expression.\n\
<ul class='dialogue'><li>C'était le prénom de _/sa_ grand-_/mere_. Du moins, _/elle_ a toujours voulu qu'on l'appelle comme ça. J'aurais tellement aimé qu'_/elle_ soit là.</li></ul>"
		},
		choices: [
			{text: "next", href: "postBirth3"}
		]
	},
	{
		id: "postBirth3",
		sound: "birth",
		phase: "theend",
		text: {
			en: "I slowly land on this creature, which brings me gently against her skin.<br><br>And I remember.<br><br>I recognize these smells. These sounds. They were there, everywhere inside. Different, but they were the same. I stop crying and focus on these sensations. I'm exhausted. But there is so much to discover. I do not want to find the old warmth again.<ul class='dialogue'><li>Peep-Bo, _firstname_. Hello my baby. I am your mom. Welcome to this world.</li></ul><br><br><br><br>",
			fr: "J'atterris lentement sur cette créature, qui m'amène avec douceur contre sa peau.<br><br>Et je me souviens.<br><br>Je reconnais ces odeurs. Ces sons. Ils étaient là, partout à l'intérieur. Différents, mais c'étaient les mêmes. J'arrête de crier et me concentre sur ces sensations. Je suis épuisé_/e_. Mais il y a tellement à découvrir. Je n'ai plus envie de retrouver l'ancienne chaleur.<ul class='dialogue'><li>Coucou, _firstname_. Bonjour, mon bébé. Je suis ta maman. Bienvenue dans ce monde.</li></ul><br><br><br><br>"
		},
		choices: [
			{text: "next", href: "title", fadeout: 5000}
		]
	},
];