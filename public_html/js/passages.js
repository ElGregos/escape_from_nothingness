var sleepTimeout = 100;
var passages = [
	{
		id: 'infos',
		phase: 'setup',
		text: {
			en: "This game uses your brower's cookies to save your progress.<br><br>For a better game experience, it is recommended to dim the lights and use headphones.",
			fr: "Ce jeu utilise les cookies du navigateur pour mémoriser votre progression.<br><br>Pour une meilleure expérience, il est recommandé de jouer dans la pénombre en utilisant un casque audio."
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
			en: "I'm... waking... up...?",
			fr: "Je suis...<br>en train...<br>de...<br><br>me réveiller...?"
		},
		choices: [
			{text: 'wait', href: 'wk9'}
		],
		fadein: 5000
	},
	{
		id: 'wk9',
		sound: 'phase1',
		text: {
			en: "I wake... up. Some... thing. Thoughts?",
			fr: "je me<br><br>réveille quelque<br>chose<br><br>pensées&nbsp;?"
		},
		choices: [
			{text: 'wait', href: 'wk10'}
		]
	},
	{
		id: 'wk10',
		sound: 'phase1',
		text: {
			en: "I wake up. How did I get here? Since how long?",
			fr: "Je me réveille.<br><br>Où suis-je&nbsp;?<br><br><br>Comment suis-je arrivé_/e_ ici&nbsp;?",
		},
		choices: [
			{text: 'wait', href: 'wk11'}
		]
	},
	{
		id: '',
		sound: 'phase1',
		text: {
			en: "I wake up, still dizzy. What's happening to me? What am I doing here?"
		}
	},
	{
		id: 'wk11',
		sound: 'phase1',
		text: {
			en: "I wake up, with... a curious feeling of déjà vu. As if something... already happened before.",
			fr: "Je me réveille.<br><br>Une étrange sensation<br>de déjà vu.<br><br>Comme si quelque chose... avait déjà eu lieu avant."
		},
		choices: [
			{text: 'wait', href: 'wk11_2'}
		]
	},
	{
		id: 'wk11_2',
		sound: 'phase1',
		text: {
			en: "I wake up.<br>This looks familiar. I think I already did that before.<br>Yes. I'm almost sure of that."
		},
		choices: [
			{text: 'wait', href: 'wk11_3'}
		]
	},
	{
		id: 'wk11_3',
		sound: 'phase1',
		text: {
			en: "I wake up. Now I'm sure. This is not the first time. I DID wake up before. At least once. Maybe twice.<br><br>I don't have any other memories though. But now that I have a few of them, I wonder what happened before that. Was there a life? Or did every awakening meant a new life, as I couldn't recall the last one?"
		},
		choices: [
			{text: {fr: "&nbsp;"}, href: 'cordTouched'},
		],
	},
	//The cord
	//The cord looks thinner and thinner as the foetus grows.
	{
		id: 'cordTouched',
		text: {
			en: "Something touched me! It was faint, but real.",
			fr: "Quelque chose m'a frôlé_/e_ ! C'était léger, mais bien réel."
		},
		choices: [
			{text: {en: "I'll try to catch it", fr: "Je vais essayer de l'attraper."}, href: 'cordGrab'},
			{text: {en: "I'll ignore this.", fr: "Je n'y prête pas attention."}, href: 'floater1', fadeout: sleepTimeout},
		],
	},
	{
		id: 'cordGrab',
		text: {
			en: "I managed to grab the thing. It's rather thin, warm and soft but firm. It is kind of pulsating. It doesn't seem to have any will of its own though. I can't decide whether it's alive or not.<br><br>At least it doesn't seem harmful. Maybe I can use it to get out.",
			fr: "J'ai attrapé la chose. Elle est aussi large que mon bras mais semble beaucoup plus longue. En touchant sa surface lisse, je ressens de la chaleur et une sorte de pulsation, comme si elle était parcourue par un flot d'énergie. Elle ne paraît pourtant pas posséder de volonté propre. En fait je ne parviens pas à savoir si elle est vivante ou pas.<br><br>En tout cas, elle ne semble pas poser de danger. Peut-être pourrai-je l'utiliser pour sortir d'ici."
		},
		choices: [
			{text: {fr: "Je vais tirer dessus."}, href: 'cordPull'},
			{text: {fr: "Je vais la repousser."}, href: 'cordPush'},
		],
	},
	{
		id: 'cordPush',
		text: {fr: "Je repousse la chose avec facilité, elle n'oppose absolument aucune résistance. Sa souplesse, malgré sa largeur, reste étonnante."},
		choices: [
			{text: {fr: "Finalement j'aimerais bien l'examiner davantage."}, href: "cordGrab2"},
			{text: {fr: "Avec un peu de chance je la retrouverai plus tard."}, href: "floater1", fadeout: sleepTimeout},
		]
	},
	{
		id: 'cordPull',
		text: {fr: "Je parviens à tirer la chose un instant, mais j'ai du mal à coordonner mes membres et elle m'échappe avant que je puisse en atteindre le bout."},
		choices: [
			{text: {fr: "Je vais essayer de la récupérer."}, href: "cordGrab2"},
			{text: {fr: "Bon, tant pis."}, href: "floater1", fadeout: sleepTimeout},
		]
	},
	{
		id: 'cordGrab2',
		text: {fr: "Je tente d'attraper sa boucle la plus proche, mais j'ai des gestes maladroits qui repoussent la chose encore plus loin. Elle doit être complètement hors de portée maintenant."},
		choices: [
			{text: {fr: "Bon, tant pis."}, href: "floater1", fadeout: sleepTimeout},
		]
	},
//	{
//		text: {en: "There are too many things I don't understand here. That's the most disorienting. The easiest way to have a grip on this is to name them. Yeah, this way, the unknown will be known."}
//	},

	//1re vision (flash à travers les paupières)
	{
		id: 'floater1',
		text: {
			en: "Wow! What was that?", fr: "Hola, c'était quoi ça ?"
		},
		choices: [
			{text: {fr: "J'aimerais bien le savoir."}, href: ""},
			{text: {fr: "&nbsp;"}, href: "sound1"},
		]
	},
	//1er son (cœur), que les aigus au début. Les sons suivants gagnent en basses.
	{
		id: 'sound1',
		text: {fr: "Il y a quelque chose de nouveau."},
		choices: [
			{text: {fr: "&nbsp;"}, href: "wallTouched"},
		]
	},
	//The wall touched me!
	{
		id: 'wallTouched',
		text: {fr: "J'ai été réveillé_/e_ par une série de contacts sur mon corps. Cela a commencé par des frôlements presque imperceptibles. Puis ces contacts sont devenus plus insistants, comme si quelqu'un voulait m'attraper à travers quelque chose d'épais."},
		choices: [
			{text: {fr: "Je veux savoir d'où cela vient."}, href: "wallTouchedExam"},
			{text: {fr: "Je vais rester discr_/ete_."}, href: "wallTouchedWait"},
			{text: {fr: "Je vais me mettre à l'abri."}, href: "wallTouchedRetreat1"},
		]
	},
	{
		id: 'wallTouchedExam',
		text: {fr: "Je m'approche en balayant l'espace de mes mains pour chercher ce qui est à l'origine de ces contacts. Je ne trouve rien de plus que le mur en face de moi. Il est parfaitement lisse. Puis une bosse se forme dessus, ainsi qu'une deuxième, une troisième, qui se rejoignent en une vague déformant sa surface. C'est le mur tout entier qui cherche à me toucher !"},
		choices: [
			{text: {fr: "Je veux me cacher."}, href: "wallTouchedRetreat2"},
			{text: {fr: "Je ne bouge plus."}, href: "wallTouchedWait"},
			{text: {fr: "La curiosité est plus forte, je vais toucher une de ces bosses."}, href: "wallTouchedPush"},
		]
	},
	{
		id: 'wallTouchedExam2',
		text: {fr: "J'approche en tâtonnant le mur, plein_/e_ d'appréhension. J'y décèle encore les bosses qui tordent sa surface, mais maintenant que j'ai pu les toucher, elles me font moins peur."},
		choices: [
			{text: {fr: "Je retourne me cacher."}, href: "wallTouchedRetreat2"},
			{text: {fr: "Je rassemble mon courage et tente de presser une de ces bosses."}, href: "wallTouchedPush"},
		]
	},
	{
		id: 'wallTouchedWait',
		text: {fr: "J'attend en m'efforçant de ne pas réagir à ces contacts. Ils finissent par me sembler bienveillants. Je peux même deviner, dans leur délicatesse, une volonté de ne pas me blesser. Cherchent-ils à communiquer&nbsp;?"},
		choices: [
			{text: {fr: "Je devrais peut-être échanger ce contact."}, href: "wallTouchedPush"},
			{text: {fr: "Je préfère me protéger."}, href: "wallTouchedRetreat2"},
		]
	},
	{
		id: 'wallTouchedRetreat1',
		text: {fr: "J'essaie d'aller dans la direction opposée, mais il m'est presque impossible de me déplacer. Je parviens toutefois à me recroqueviller assez pour être hors de portée."},
		choices: [
			{text: {fr: "Je vais rester à l'écart."}, href: "wallTouchedWaitBack"},
			{text: {fr: "Je suis quand même intrigué_/e_, je vais me rapprocher."}, href: "wallTouchedExam"},
		]
	},
	{
		id: 'wallTouchedRetreat2',
		text: {fr: "Je parviens difficilement à reculer, mais me recroqueville assez pour être hors de portée."},
		choices: [
			{text: {fr: "Je vais rester à l'écart."}, href: "wallTouchedWaitBack"},
		]
	},
	{
		id: 'wallTouchedWaitBack',
		text: {fr: "J'attend en espérant que mon angoisse s'estompe. De toutes façons il va falloir que je patiente, car je n'ai aucun moyen de savoir si la chose à l'origine de ces palpations s'est éloignée. Tout ceci m'a fatigué_/e_."},
		choices: [
			{text: {fr: "Je devrais peut-être en profiter pour dormir."}, href: "music1", fadeout: sleepTimeout},
			{text: {fr: "Je vais quand même vérifier ce qu'il en est."}, href: "wallTouchedExam2"},
		]
	},
	{
		id: 'wallTouchedPush',
		text: {fr: "Contact !"},
		choices: [
			{text: {fr: "J'appuie plus fort."}, href: ""},
			{text: {fr: "Je suis rassuré_/e_. Je pense que je vais dormir."}, href: "music1"},
		]
	},
	//Wall getting closer. Kicking the wall
	//Music
	{
		id: 'music1',
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
		text: {fr: "Quelque chose m'a réveillé_/e_. Ou plutôt, une impression. Le sentiment qu'on m'observait. Comme si j'étais surveillé_/e_."},
		choices: [
			{text: {fr: "Je vais examiner les environs."}, href: "echoCheck"},
			{text: {fr: "Je vais attendre et essayer d'en apprendre plus."}, href: "echoWait"},
			{text: {fr: "Je suis encore fatigué_/e_, je vais me rendormir."}, href: "echoSleep"},
		]
	},
	{
		id: 'echoWait',
		text: {fr: "Je crois qu'il se passe bien quelque chose d'inhabituel. Je parviens à deviner quelques sons, sans pouvoir les identifier.\n\
<ul class='dialogue far'><li>fille... savais... mois... dirait... observe...</li></ul>\n\
Mais cela me persuade que oui, on est bien en train de m'examiner. Et c'est d'autant plus désagréable que c'est à sens unique."},
		choices: [
			{text: {fr: ""}, href: ""},
			{text: {fr: "Je vais attendre que ça passe, et me rendormir."}, href: "echoSleep"},
		]
	},
	{
		id: 'echoCheck',
		text: {fr: "Je tends les mains pour palper le mur. Il est légèrement déformé. Cela fait comme une petite vague qui repousse sa surface en mouvements circulaires, s'arrête subitement, puis repars en mouvements vifs. Je suis fasciné_/e_ par ces déplacements, tout en étant plongé_/e_ dans une certaine inquiétude."},
		choices: [
			{text: {fr: "Je vais attendre que ça passe, et me rendormir."}, href: "echoSleep"},
		],
	},
	{
		id: 'echoSleep',
		text: {fr: "Je suis de toutes façons encore trop fatigué_/e_ pour être vraiment inqui_/ete_. Je suis à peu près s_/ure_ de me rendormir aussi facilement que j'ai été réveillé_/e_."},
		choices: [
			{text: {fr: "&nbsp;"}, href: "", fadeout: sleepTimeout},
		],
	},
	{
		id: 'echo',
		text: {fr: ""},
		choices: [
			{text: {fr: ""}, href: ""},
		]
	},
	//Cord is a friend
	{
		id: 'cord2Touched',
		text: {fr: "Je "},
		choices: [
			{text: {fr: ""}, href: ""},
		]
	},
	//Dream = memory
	//Remember the taste has changed
	//Eyes opened
	//The wall is a light
	//Wall too close, need for upside down

	{
		id: 'wallClosest',
		text: {
			fr: "J'avais déjà remarqué que le mur se rapprochait légèrement à chaque réveil, devenant chaque fois un peu plus oppressant. Il m'entoure maintenant de toutes parts. Si cela continue, je pourrai bientôt à peine bouger la tête. Le bas de mon corps semble avoir un peu plus de place."
		},
		choices: [
			{text: {fr: "Je vais essayer de trouver une meilleure position."}, href: 'wallClosestMove'},
			{text: {fr: "Je vais me débattre pour libérer un peu d'espace."}, href: 'wallClosestPush'},
		]
	},
	{
		id: 'wallClosestPush',
		text: {
			fr: "En m'aidant de chaque partie de mon corps, main, pied, dos, tête, je tente de repousser le mur de tout côté. Cela suffit à l'éloigner un court instant, avant qu'il revienne rapidement se plaquer contre moi. Mais dans la manœuvre, je sens mon corps pivoter petit à petit."
		},
		choices: [
			{text: {fr: "Il se passe alors une chose curieuse."}, href: "wallClosestPush2"},
		]
	},
	{
		id: 'wallClosestPush2',
		text: {
			fr: "Une bosse déforme subitement le mur, comme si quelque chose le poussait depuis l'autre côté. J'ai l'impression d'avoir déjà vécu cela, et que cette expérience a été intéressante. Je crois que c'était lié à une tentative de communication. En attendant, puisque je suis plaqué_/e_ contre ce mur, cette bosse me pousse également."
		},
		choices: [
			{text: {fr: "Je vais à mon tour appuyer sur le mur."}, href: ""},
			{text: {fr: "Je vais attendre de voir ce qui se passe."}, href: "wallClosestPush3"},
			{text: {fr: "Je vais tenter de changer de position."}, href: "wallClosestMove"},
		]
	},
	{
		id: 'wallClosestPush3',
		text: {
			fr: "Une deuxième bosse apparaît, opposée à la première, et déforme le mur dans un mouvement circulaire. La première bosse suit le même mouvement, comme si le mur avait décidé de me caresser doucement. Puis des séries de pressions plus fortes, et de mouvements circulaires plus amples, ont transformé ces caresses en un massage plus vigoureux. Je crois que le mur apprécie aussi peu que moi ma position et tente de soulager son propre inconfort."
		},
		choices: [
			{text: {fr: "Je vais le laisser faire."}, href: "wallClosestPush4"},
			{text: {fr: "Je vais l'aider."}, href: "wallClosestMove"},
		]
	},
	{
		id: 'wallClosestPush4',
		text: {
			fr: "À force de mouvements, "
		},
		choices: [
			{text: {fr: "Je vais le laisser faire."}, href: "wallClosestPush4"},
		]
	},
	{
		id: 'wallClosestMove',
		text: {
			fr: "Je joins les mains sous mon menton, et joue des épaules pour essayer de me retourner. Le mur se tend, mais garde une souplesse étonnante, et la manœuvre se déroule sans trop de difficulté. Jusqu'à ce que ma tête et le bas de mon corps viennent chacun s'enfoncer dans un creux. La tension du mur me bloque alors dans cette position, mon corps désagréablement comprimé de haut en bas."
		},
		choices: [
			{text: {fr: "Je vais essayer de me recroqueviller."}, href: "wallClosestMove2"},
			{text: {fr: "Je vais me tendre au maximum pour dégager mon corps."}, href: "wallClosestMove3"},
		]
	},
	{
		id: 'wallClosestMove2',
		text: {
			fr: "Je me replie sur moi-même, permettant à ma tête, puis mes pieds, de sortir de leur creux. Je sens alors mon corps glisser lentement le long du mur, ce qui fait de cette chute une interminable caresse. Tant et si bien..."
		},
		choices: [
			{text: {fr: "... que je me suis endormi_/e_."}, href: ""},
		]
	},
	{
		id: 'wallClosestMove3',
		text: {
			fr: ""
		},
		choices: [
			{text: {fr: ""}, href: ""},
		]
	},
	//Urge to go out
	//Birth
	/*
	 * J'ai réussi à passer à travers le mur ! Mais ma joie ne dure pas : un autre mur se trouve derrière !
	 * 
	 * Je suis complètement sonné_/e_ par ces bouleversements.
	 * 
	 * Par pitié, que quelqu'un m'aide !!
	 */
	{
		id: 'birth',
		phase: 'birth',
		text: {
			en: "I'm pushed forward."
		},
		choices: [
			{text: 'wait', href: 'birth2'},
		]
	},
	{
		id: 'birth2',
		phase: 'birth',
		text: {
			en: "I'm pushed forward 2."
		},
		choices: [
			{text: 'wait', href: 'birth3'}
		]
	},
	{
		id: 'birth3',
		phase: 'birth',
		text: {
			fr: "Mais qu'est-ce que j'ai fait ?! C'était la pire idée que j'ai jamais eue !"
		},
		choices: [
			{text: 'wait', href: 'birth4'}
		]
	},
	{
		id: 'birth4',
		phase: 'birth',
		text: {
			fr: "Je sens bouillir quelque chose dans ma poitrine, une boule dense de peur et de colère qui tente de franchir ma gorge."
		},
		choices: [
			{text: 'wait', href: 'postBirth'}
		]
	},
	//Post-birth
	{
		id: "postBirth",
		text: {
			fr: "<ul class='dialogue'>\n\
<li>Oh là là, quelle magnifique petit_/e_ _/fille_ ! Comment allez-vous l'appeler&nbsp;?</li>\n\
<li>_firstname_... Son papa et moi... nous aimons beaucoup ce prénom.</li>\n\
<li>_firstname_. quel prénom adorable. Bonjour, _firstname_ !</li>\n\
</ul>Je souris. Je ne sais pas pourquoi. Je ne peux pas m'en empêcher."
		},
		choices: [
			{text: {fr: "&nbsp;"}, href: "postBirth2"}
		]
	},
	{
		id: "postBirth2",
		text: {
			fr: "<ul class='dialogue'><li>Oh ! Regardez comme _/elle_ sourit ! On dirait que son prénom lui plaît.</li></ul>\n\
Je m'envole à nouveau. Je sens mon corps fermement tenu par quelque chose qui m'amène à la créature allongée. Ses cheveux, son visage et ses yeux sont trempés, mais c'est son sourire que je remarque le plus. Son regard ne me quitte pas. Une autre créature se tient penchée derrière elle et me fixe avec la même expression.\n\
<ul class='dialogue'><li>C'était le prénom de _/sa_ grand-_/mere_. Du moins, _/elle_ a toujours voulu qu'on l'appelle comme ça. J'aurais tellement aimé qu'_/elle_ soit là.</li></ul>\n\
"
		},
		choices: [
			{text: {fr: "&nbsp;"}, href: "postBirth3"}
		]
	},
	{
		id: "postBirth3",
		phase: "theend",
		text: {
			fr: "J'atterris lentement sur cette créature, qui m'amène avec douceur contre sa peau.<br><br>Et je me souviens.<br><br>Je reconnais ces odeurs. Ces sons. Ils étaient là, partout à l'intérieur. Différents, mais c'étaient les mêmes. J'arrête de crier et me concentre sur ces sensations. Je suis épuisé_/e_. Mais il y a tellement à découvrir. Je n'ai plus envie de retrouver l'ancienne chaleur.\n\
<ul class='dialogue'><li>Coucou, _firstname_. Bonjour, mon bébé. Je suis ta maman. Bienvenue dans ce monde.</li></ul><br><br><br><br>"
		},
		choices: [
			{text: {fr: "&nbsp;"}, href: "title"}
		]
	},
];