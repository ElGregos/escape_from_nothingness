var passages = [
	{
		id: 'infos',
		phase: 'setup',
		text: {
			en: "This game uses your brower's cookies and history to save your progression.<br><br>For a better game experience, it is recommended to dim the lights and use headphones.",
			fr: "Ce jeu utilise les cookies et l'historique du navigateur pour mémoriser votre progression.<br><br>Pour une meilleure expérience, il est recommandé de jouer dans l'obscurité en utilisant un casque audio."
		},
		choices: [
			{text: {en: "Continue", fr: "Continuer"}, href: 'title'},
		]
	},
	{
		id: 'title',
		phase: 'setup',
		text: {
			en: "<h1>Escape from Nothingness</h1><br><span class='titleCredits'>Made by Grégory Béal for the AdventureJam 2018.<br>Twitter : <a href='https://twitter.com/GregosEl' target='_blank'>@GregosEl</a></span>",
			fr: "<h1>Escape from Nothingness</h1><br><span class='titleCredits'>Créé par Grégory Béal pour l'AdventureJam 2018.<br>Twitter : <a href='https://twitter.com/GregosEl' target='_blank'>@GregosEl</a></span>"
		},
		choices: [
			{text: {fr: "Continuer"}, href: 'setup'},
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
	{
		id: '',
		text: {
			en: "I have no memories. I don't even have words.",
		}
	},
	{
		id: 'startGame',
		text: {
			en: "I'm... waking... up...?",
			fr: "Je suis...<br>en train...<br>de....<br><br>me réveiller...?"
		},
		choices: [
			{text: 'wait', href: 'wk9'}
		],
		fadein: 2000
	},
	{
		id: 'wk9',
		text: {
			en: "I wake... up. Some... thing. Thoughts?",
			fr: "je me<br><br>réveille quelque<br>chose<br><br>pensées ?"
		},
		choices: [
			{text: 'wait', href: 'wk10'}
		]
	},
	{
		id: 'wk10',
		text: {
			en: "I wake up. How did I get here? Since how long?",
			fr: "Je me réveille.<br><br>Où suis-je ?<br><br><br>Comment suis-je arrivé_fe_ ici ?",
		},
		choices: [
			{text: 'wait', href: 'wk11'}
		]
	},
	{
		id: '',
		text: {
			en: "I wake up, still dizzy. What's happening to me? What am I doing here?"
		}
	},
	{
		id: 'wk11',
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
		text: {
			en: "I wake up.<br>This looks familiar. I think I already did that before.<br>Yes. I'm almost sure of that."
		},
		choices: [
			{text: 'wait', href: 'wk11_3'}
		]
	},
	{
		id: 'wk11_3',
		text: {
			en: "I wake up. Now I'm sure. This is not the first time. I DID wake up before. At least once. Maybe twice.<br><br>I don't have any other memories though. But now that I have a few of them, I wonder what happened before that. Was there a life? Or did every awakening meant a new life, as I couldn't recall the last one?"
		}
	},
	{
		id: '',
		text: {
			en: "Something pushed me. It was faint, but real."
		},
	},

	//The cord
	//The cord looks thinner and thinner as the foetus grows.
	{
		id: 'touched',
		text: {
			en: "Something touched me! "
		},
		choices: [
			{text: {en: "Try to catch it", fr: "Essayer de l'attraper"}, href: 'cordGrab'},
			{text: 'ignore', href: 'cordGrab'},
		],
	},
	{
		id: 'cordGrab',
		text: {
			en: "I managed to grab the thing. It's rather thin, warm and soft but firm. It is kind of pulsating. It doesn't seem to have any will of its own though. I can't decide whether it's alive or not.<br><br>At least it doesn't seem harmful. Maybe I can use it to get out."
		},
		choices: [
			{text: {en: "I should give it a name.", fr: "Je devrais lui donner un nom"}, href: 'cordInert'},
		],
	},
	{
		id: 'cordInert',
		text: {en: "|cord| is quite surprising. It is absolutely inert, yet looks like it's filled with energy."},
		choices: [
			{text: {en: "I'll rename it"}},
			{text: {en: "I need to test it more"}},
		]
	},
	{
		text: {en: "There are too many things I don't understand here. That's the most disorienting. The easiest way to have a grip on this is to name them. Yeah, this way, the unknown will be known."}
	},

	//1re vision (flash à travers les paupières)
	{
		id: 'floater1',
		text: {
			en: "Wow! What was that?"
		},
		choices: [
			{text: {en: "Nothing to fear"}},
			{text: {en: "I'd like to know"}},
		]
	},
	//1er son, que les aigus au début. Les sons suivants gagnent en basses.
	{
		id: 'sound1',
		text: {en: "There is something new. "},
	},
	//The wall touched me!
	{
		id: 'wallTouched',
		text: {fr: "J'ai été réveillé_fe_ par une série de contacts sur mon corps. Cela a commencé par des frôlements presque imperceptibles. Puis ces contacts sont devenus plus insistants, comme si quelqu'un voulait m'attraper à travers quelque chose d'épais."},
		choices: [
			{text: {fr: "Je dois trouver d'où cela vient !"}, href: "wallTouchedExam"},
			{text: {fr: "Je vais rester discr_fète_."}, href: "wallTouchedWait"},
			{text: {fr: "Je ne suis pas du tout rassuré_fe_."}, href: "wallTouchedRetreat"},
		]
	},
	{
		id: 'wallTouchedExam',
		text: {fr: "Je m'approche en balayant l'espace de mes mains pour chercher ce qui est à l'origine de ces contacts. Je ne trouve rien de plus que le mur en face de moi. Il est parfaitement lisse. Puis une bosse se forme dessus, ainsi qu'une deuxième, une troisième, qui se rejoignent en une vague déformant sa surface. C'est le mur tout entier qui cherche à me toucher !"},
		choices: [
			{text: {fr: "Je dois me cacher !"}, href: "wallTouchedRetreat"},
			{text: {fr: "Je ne bouge plus."}, href: "wallTouchedWait"},
			{text: {fr: "La curiosité me pousse à toucher ces bosses."}, href: "wallTouchedPush"},
		]
	},
	{
		id: 'wallTouchedWait',
		text: {fr: "J'attend en m'efforçant de ne pas réagir à ces contacts. Ils finissent par me sembler bienveillants. Je vois même dans leur délicatesse une volonté de tester ma présence sans me blesser. Cherchent-ils à communiquer ?"},
		choices: [
			{text: {fr: "Je devrais peut-être échanger ce contact."}, href: "wallTouchedPush"},
			{text: {fr: "Je préfère me protéger."}, href: "wallTouchedRetreat"},
		]
	},
	{
		id: 'wallTouchedRetreat',
		text: {fr: "J'essaie d'aller dans la direction opposée, mais il m'est presque impossible de me déplacer. Je parviens toutefois à me recroqueviller assez pour être hors de portée."},
		choices: [
			{text: {fr: "Je vais rester à l'écart."}, href: "wallTouchedWaitBack"},
			{text: {fr: "Je suis quand même intrigué_fe_, je vais me rapprocher."}, href: "wallTouchedExam"},
		]
	},
	{
		id: 'wallTouchedWaitBack',
		text: {fr: "J'attend en espérant que mon inquiétude disparaisse. De toutes façons il va falloir que je patiente, car je n'ai aucun moyen de savoir quand cet palpations vont s'arrêter. Tout ceci m'a fatigué_fe_."},
		choices: [
			{text: {fr: "Je devrais peut-être en profiter pour dormir."}, href: "wallTouchedSleep"},
			{text: {fr: "Je vais quand même vérifier ce qu'il en est."}, href: "wallTouchedExam"},
		]
	},
	{
		id: 'wallTouchedPush',
		text: {fr: "Contact !"},
		choices: [
			{text: {fr: "J'appuie plus fort."}, href: "wallTouchedSleep"},
			{text: {fr: "Je suis rassuré_fe_. Je pense que je vais dormir."}, href: "wallTouchedExam"},
		]
	},

	//Wall getting closer. Kicking the wall
	//Music
	{
		id: 'music1',
		text: {en: ""},
	},
	//Dream
	//Skin is slippy (vernix)
	//Echographie (Medical ultrasound) : he or she?
	//Cord is a friend
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
			fr: "Une bosse déforme subitement le mur, comme si quelque chose le poussait depuis l'autre côté. J'ai l'impression d'avoir déjà vécu cela, et que cette expérience a été intéressante. Je crois que c'était lié à une tentative de communication. En attendant, puisque je suis plaqué_fe_ contre ce mur, cette bosse me pousse également."
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
			{text: {fr: "... que je me suis endormi_fe_."}, href: ""},
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
	 * J'ai réussi à passer à travers le mur, mais ma joie ne dure pas : un autre mur se trouve derrière !
	 * Mais qu'est-ce que j'ai fait ?! C'était la pire idée que j'ai jamais eue !
	 * Je suis complètement sonné_fe_ par ces bouleversements.
	 * Je sens bouillir quelque chose dans ma poitrine, une boule dense de peur et de colère qui tente de franchir ma gorge.
	 * Par pitié, que quelqu'un m'aide !
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
			en: "I'm pushed forward 3."
		},
		choices: [
			{text: 'wait', href: 'birth4'}
		]
	},
	{
		id: 'birth4',
		phase: 'birth',
		text: {
			en: "I'm pushed forward 4."
		},
		choices: [
			{text: 'wait', href: 'postBirth'}
		]
	},
	{
		id: 'postBirth',
		phase: 'birth',
		text: {
			en: "I'm born!"
		}
	},
	{
		id: '',
		text: {
			en: ""
		}
	}
];