var passages = [
	{
		id: 'noSave',
//		class:'systemUi',
//		text: {en: "To automatically save your game progression, you must allow the use of your browser cookies.|OK|No way!", fr: "Pour enregistrer automatiquement votre progression dans le jeu, vous devez autoriser l'utilisation des cookies du navigateur.|D'accord|Non merci"},
		text: {
			en: "To automatically save your game progression, you must allow the use of your browser cookies.|OK|No way!",
			fr: "Voulez-vous enregistrer automatiquement votre progression dans le jeu ?|Oui|Non"
		},
		state: ''
	},
	{
		id: 'here',
		text: {
			en: "For a better game experience, it is recommended to use headphones and dim the lights.",
			fr: "Pour une meilleure expérience de ce jeu, il est recommandé d'utiliser un casque audio et d'atténuer les lumières."
		},
		choices: [
			{text: 'wait', href: 'wk8'},
		]
	},
	{
		id: 'setup',
		interface: 'setup',
		text: {
			en: 'I will play as<br><input type="button" value="A man" data-key="gender" data-value="m"> <input type="button" value="A woman" data-key="gender" data-value="f"><br><br>whom first name will be<br><input name="firstname" type="text" maxlength="50" data-key="firstname"/>',
			fr: 'Je jouerai<br><input type="button" value="un homme" data-key="gender" data-value="m"> <input type="button" value="une femme" data-key="gender" data-value="f"><br><br>dont le prénom sera<br><input name="firstname" type="text" maxlength="50" data-key="firstname"/>'
		},
		choices: [
			{text: {en: "and my adventure may begin", fr: "et mon aventure peut commencer"}, href: 'startGame'}
		]
	},
	{
		id: 'setup2',
		interface: 'setup',
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
		text: {fr: "J'ai été réveillé_fe_ par une série de contacts sur mon corps. Cela a commencé par des frôlements presque imperceptibles. Puis ces contacts sont devenus plus insistants, comme si quelqu'un voulait me palper à travers quelque chose d'épais."},
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
			{text: {fr: "La curiosité me pousse à toucher ces bosses."}, href:"wallTouchedPush"},
		]
	},
	{
		id: 'wallTouchedWait',
		text: {fr: "J'attend en m'efforçant de ne pas réagir à ces contacts. Ils finissent par me sembler bienveillants. Je vois même dans leur délicatesse une volonté de tester ma présence sans me blesser. Cherchent-ils à communiquer ?"},
		choices: [
			{text: {fr: "Je devrais peut-être échanger ce contact."}, href:"wallTouchedPush"},
			{text: {fr: "Je préfère me protéger."}, href: "wallTouchedRetreat"},
		]
	},
	{
		id: 'wallTouchedRetreat',
		text: {fr: "J'essaie d'aller dans la direction opposée, mais il m'est presque impossible de me déplacer. Je parviens toutefois à me recroqueviller assez pour être hors de portée."},
        choices:[
            {text:{fr:"Je vais rester à l'écart."}, href: "wallTouchedWaitBack"},
            {text:{fr:"Je suis quand même intrigué_fe_, je vais me rapprocher."}, href:"wallTouchedExam"},
        ]
	},
	{
		id: 'wallTouchedWaitBack',
		text: {fr: "J'attend en espérant que mon inquiétude disparaisse. De toutes façons il va falloir que je patiente, car je n'ai aucun moyen de savoir quand cet palpations vont s'arrêter. Tout ceci m'a fatigué_fe_."},
        choices:[
            {text:{fr:"Je devrais peut-être en profiter pour dormir."}, href: "wallTouchedSleep"},
            {text:{fr:"Je vais quand même vérifier ce qu'il en est."}, href:"wallTouchedExam"},
        ]
	},
	{
		id: 'wallTouchedPush',
		text: {fr: "Contact !"},
        choices:[
            {text:{fr:"J'appuie plus fort."}, href: "wallTouchedSleep"},
            {text:{fr:"Je suis rassuré_fe_. Je pense que je vais dormir."}, href:"wallTouchedExam"},
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
	//Remember the taste has changed
	//Eyes opened
	//The wall is a light
	//Wall too close, need for upside down
	//Urge to go out

	//Birth
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
			en: "I'm forward 3."
		},
		choices: [
			{text: 'wait', href: 'birth4'}
		]
	},
	{
		id: 'birth4',
		phase: 'birth',
		text: {
			en: "I'm forward 4."
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