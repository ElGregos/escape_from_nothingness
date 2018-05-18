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
			fr: "Enfin, je crois."
		},
		choices: [
			{text: 'next', href: 'wk10', fadeout: sleepTimeout}
		]
	},
	{
		id: 'wk10',
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
			fr: "Je me réveille.<br><br>Une étrange sensation<br>de déjà vu.<br><br>Comme si quelque chose... avait déjà eu lieu avant."
		},
		choices: [
			{text: 'next', href: 'wk11_2'}
		]
	},
	{
		id: 'wk11_2',
		sound: 'phase1',
		text: {
			en: "I wake up.<br>This looks familiar. I think I already did that before.<br>Yes. I'm almost sure of that."
		},
		choices: [
			{text: 'next', href: 'wk11_3'}
		]
	},
	{
		id: 'wk11_3',
		sound: 'phase1',
		text: {
			en: "I wake up. Now I'm sure. This is not the first time. I DID wake up before. At least once. Maybe twice.<br><br>I don't have any other memories though. But now that I have a few of them, I wonder what happened before that. Was there a life? Or did every awakening meant a new life, as I couldn't recall the last one?",
		},
		choices: [
			{text: "next", href: 'cordTouched', fadeout: sleepTimeout},
		],
	},

	//The cord
	//The cord looks thinner and thinner as the foetus grows.
	{
		id: 'cordTouched',
		sound: 'phase2',
		text: {
			en: "Something touched me! It was faint, but real.",
			fr: "Quelque chose m'a frôlé_/e_ ! C'était léger, mais bien réel."
		},
		choices: [
			{text: {en: "I'll try to catch it", fr: "Je vais essayer de l'attraper."}, href: 'cordGrab'},
			{text: {en: "I'll ignore this.", fr: "Je n'y prête pas attention."}, href: 'wallTouched', fadeout: sleepTimeout},
		],
		fadein: sleepTimein
	},
	{
		id: 'cordGrab',
		sound: 'phase2',
		text: {
			en: "I managed to grab the thing. It's rather thin, warm and soft but firm. It is kind of pulsating. It doesn't seem to have any will of its own though. I can't decide whether it's alive or not.<br><br>At least it doesn't seem harmful. Maybe I can use it to get out.",
			fr: "J'ai pu toucher la chose, mais elle est beaucoup trop large et longue pour que je puisse l'agripper. En touchant sa surface lisse, je ressens de la chaleur et une sorte de pulsation, comme si elle était parcourue par un flot d'énergie. Elle ne paraît pourtant pas posséder de volonté propre. En fait je ne parviens pas à savoir si elle est vivante ou pas.<br><br>En tout cas, elle ne semble pas poser de danger. Peut-être pourrai-je l'utiliser pour sortir d'ici."
		},
		choices: [
			{text: {fr: "Je vais tirer dessus."}, href: 'cordPull'},
			{text: {fr: "Je vais la repousser."}, href: 'cordPush'},
		],
	},
	{
		id: 'cordPush',
		sound: 'phase2',
		text: {fr: "Je repousse la chose avec facilité, elle n'oppose absolument aucune résistance. Sa souplesse, malgré sa largeur, reste étonnante."},
		choices: [
			{text: {fr: "Finalement j'aimerais bien l'examiner davantage."}, href: "cordGrab2"},
			{text: {fr: "Avec un peu de chance je la retrouverai plus tard."}, href: "wallTouched", fadeout: sleepTimeout},
		]
	},
	{
		id: 'cordPull',
		sound: 'phase2',
		text: {fr: "Je parviens à tirer la chose un instant, mais j'ai du mal à coordonner mes membres et elle m'échappe avant que je puisse en atteindre le bout."},
		choices: [
			{text: {fr: "Je vais essayer de la récupérer."}, href: "cordGrab2"},
			{text: {fr: "Bon, tant pis."}, href: "wallTouched", fadeout: sleepTimeout},
		]
	},
	{
		id: 'cordGrab2',
		sound: 'phase2',
		text: {fr: "Je tente d'attraper sa boucle la plus proche, mais j'ai des gestes maladroits qui repoussent la chose encore plus loin. Elle doit être complètement hors de portée maintenant."},
		choices: [
			{text: {fr: "Bon, tant pis."}, href: "wallTouched", fadeout: sleepTimeout},
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
		text: {en: "I approach, scanning the void with my hands to look for what is causing these contacts. I can not find anything more than the wall in front of me. It is perfectly smooth. Then a bump forms on it, followed by a second, and a third, which join in a wave deforming its surface. It is the whole wall that tries to touch me!",
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
		text: {fr: "J'approche en tâtonnant le mur, plein_/e_ d'appréhension. J'y décèle encore les bosses qui tordent sa surface, mais maintenant que j'ai pu les toucher, elles me font moins peur."},
		choices: [
			{text: {fr: "Je retourne me cacher."}, href: "wallTouchedRetreat2"},
			{text: {fr: "Je rassemble mon courage et tente de presser une de ces bosses."}, href: "wallTouchedPush"},
		]
	},
	{
		id: 'wallTouchedWait',
		text: {fr: "J'attend en m'efforçant de ne pas réagir à ces contacts. Ils finissent par me sembler bienveillants. Je peux même deviner, dans leur délicatesse, une volonté de ne pas me blesser. Je me demande s'ils ne cherchent pas à communiquer."},
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
			{text: {fr: "Je devrais peut-être en profiter pour dormir."}, href: "echo", fadeout: sleepTimeout},
			{text: {fr: "Je vais quand même vérifier ce qu'il en est."}, href: "wallTouchedExam2"},
		]
	},
	{
		id: 'wallTouchedPush',
		text: {fr: "Les bosses et vagues vont et viennent lentement sur la surface du mur. J'essaie d'en toucher une mais elle a déjà disparu. En fait, toutes les bosses semblent avoir disparu à l'instant où ma main s'est posée. La surface du mur est de nouveau tendue, comme s'il était en attente de quelque chose.<br><br>Je laisse ma main glisser sur sa surface. Elle est incroyablement douce et moelleuse. Je sens ses plis se former et se retendre pendant que ma main dérive avec aisance. En m'attardant sur ces sensations, il me semble qu'il y a en fait deux murs l'un sur l'autre : l'un, fin, qui glisse sur le second, plus épais."},
		choices: [
			{text: "next", href: "wallTouchedPush2"},
		]
	},
	{
		id: 'wallTouchedPush2',
		text: {fr: "Lentement, j'appuie de plus en plus fort. Ma main disparaît presque dans le mur. Il est chaud. Puis le mur à cet endroit devient de plus en plus dur, repoussant ma main. C'est une bosse qui, doucement, apparaît juste en-dessous ! J'essaie de la repousser. Elle résiste, puis finit pas s'estomper, laissant le mur retourner à sa souplesse.<br><br>J'ai la forte impression que le mur a développé ces reliefs dans un but, peut-être d'entrer en contact avec moi. Quant à savoir si je dois m'en inquiéter... Comme pour la chose, je me demande s'il s'agit de quelque chose de vivant. Est-ce que le mur et la chose forment un tout ?"},
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
		text: {fr: "Quelque chose m'a réveillé_/e_. Ou plutôt, une impression. Le sentiment qu'on m'observait. Comme si j'étais surveillé_/e_."},
		choices: [
			{text: {fr: "Je vais examiner les environs."}, href: "echoCheck"},
			{text: {fr: "Je vais attendre et essayer d'en apprendre plus."}, href: "echoWait"},
			{text: {fr: "Je suis encore fatigué_/e_, je vais me rendormir."}, href: "echoSleep"},
		],
		fadein: sleepTimein
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
			fr: "J'avais déjà remarqué que le mur se rapprochait légèrement à chaque réveil, devenant chaque fois un peu plus oppressant. Il m'entoure maintenant de toutes parts. Si cela continue, je pourrai bientôt à peine bouger la tête. Par contre, le bas de mon corps semble disposer d'un peu plus de place."
		},
		choices: [
			{text: {fr: "Je vais essayer de trouver une meilleure position."}, href: 'wallClosestMove'},
			{text: {fr: "Je vais me débattre pour libérer un peu d'espace."}, href: 'wallClosestPush'},
		],
		fadein: sleepTimein
	},
	{
		id: 'wallClosestPush',
		sound: 'mozart',
		text: {
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
			fr: "Une bosse déforme subitement le mur, comme si quelque chose le poussait depuis l'autre côté. J'ai l'impression d'avoir déjà vécu cela, et que cette expérience a été intéressante. Je crois que c'était lié à une tentative de communication. En attendant, puisque je suis plaqué_/e_ contre ce mur, cette bosse me pousse également."
		},
		choices: [
//			{text: {fr: "Je vais à mon tour appuyer sur le mur."}, href: ""},
			{text: {fr: "Je vais attendre de voir ce qui se passe."}, href: "wallClosestPush3"},
			{text: {fr: "Je vais tenter de changer de position."}, href: "wallClosestMove"},
		]
	},
	{
		id: 'wallClosestPush3',
		sound: 'mozart',
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
		sound: 'mozart',
		text: {
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
			fr: "Je joins les mains sous mon menton, et joue des épaules pour essayer de me retourner. Le mur se tend, mais garde une souplesse étonnante, et la manœuvre se déroule sans trop de difficulté. Jusqu'à ce que ma tête et le bas de mon corps viennent chacun s'enfoncer dans un creux. La tension du mur me bloque alors dans cette position, mon corps désagréablement comprimé de haut en bas."
		},
		choices: [
			{text: {fr: "Je vais essayer de me recroqueviller."}, href: "wallClosestMove2"},
			{text: {fr: "Je vais me raidir au maximum pour détendre le mur et dégager mon corps."}, href: "wallClosestMove3"},
		]
	},
	{
		id: 'wallClosestMove2',
		sound: 'mozart',
		text: {
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