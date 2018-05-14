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
		buttons: [
			{text: 'wait', href: 'wk8'},
		]
	},
	{
		id: 'setup',
		text: {en: "Your character will be", fr: "Votre personnage sera"},
		buttons: [
			{text: {en: "A man", fr: "Un homme"}},
			{text: {en: "A woman", fr: "Une femme"}}
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
		buttons: [
			{text: 'wait', href: 'wk9'}
		]
	},
	{
		id: 'wk9',
		text: {
			en: "I wake... up. Some... thing. Thoughts?",
			fr: "je me<br><br>réveille quelque<br>chose<br><br>pensées ?"
		},
		buttons: [
			{text: 'wait', href: 'wk10'}
		]
	},
	{
		id: 'wk10',
		text: {
			en: "I wake up. How did I get here? Since how long?",
			fr_f: "Je me réveille.<br><br>Où suis-je ?<br><br><br>Comment suis-je arrivée ici ?",
		},
		buttons: [
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
		buttons: [
			{text: 'wait', href: 'wk11_2'}
		]
	},
	{
		id: 'wk11_2',
		text: {
			en: "I wake up.<br>This looks familiar. I think I already did that before.<br>Yes. I'm almost sure of that."
		},
		buttons: [
			{text: 'wait', href: 'wk11_3'}
		]
	},
	{
		id: 'wk11_3',
		text: {
			en: "I wake up.<br>Now I'm sure. This is not the first time. I DID wake up before. For at least once or twice.<br><br>I don't have any other memories though. But now that I have a few of them, I wonder what happened before that. Was there a life? Or did every awakening meant a new life, as I couldn't recall the last one?"
		}
	},
	{
		id: '',
		text: {
			en: "Something pushed me. It was faint, but real."
		},
	},
	//The cord
	{
		id: 'touched',
		text: {
			en: "Something touched me! "
		},
		buttons: [
			{text: {en: "Try to catch it", fr: "Essayer de l'attraper"}, href: 'cordGrab'},
			{text: 'ignore', href: 'cordGrab'},
		]
	},
	{
		id: 'cordGrab',
		text: {
			en: "I managed to grab the thing. It's rather thin, warm and soft but firm. It is kind of pulsating. It doesn't seem to have any will of its own though. I can't decide whether it's alive or not.<br><br>At least it doesn't seem harmful. Maybe I can use it to get out."
		},
		buttons: [
			{text: {en: "For now, I should give it a name.", fr: "Je devrais lui donner un nom"}, href: 'cordInert'},
		]
	},
	{
		id: 'cordInert',
		text: {en: "|cord| is quite surprising. It is absolutely inert, yet looks like it's filled with energy."},
		buttons: [
			{text: {en: "I'll rename it"}},
			{text: {en: "I need to test it more"}},
		]
	},
	{
		text: {en: "There are too many things I don't understand here. That's the most disorienting. The easiest way to have a hold on this is to name them. Yeah, this way, the unknown will be known."}
	},
	//1st vision
	{
		id: 'floater1',
		text: {
			en: "Wow! What was that?"
		},
		buttons: [
			{text: {en: "Nothing to fear"}},
			{text: {en: "I'd like to know"}},
		]
	},
	//1st sound
	{
		id: 'sound1',
		text: {en: "There is something new. "},
	},
	//The wall touched me!
	{
		id: 'wallTouched',
		text: {en: "I can feel a slight pressure"},
		buttons: [

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
	//Cord is a friend
	//Remember the taste has changed
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
		buttons: [
			{text: 'wait', href: 'birth2'},
		]
	},
	{
		id: 'birth2',
		phase: 'birth',
		text: {
			en: "I'm pushed forward 2."
		},
		buttons: [
			{text: 'wait', href: 'birth3'}
		]
	},
	{
		id: 'birth3',
		phase: 'birth',
		text: {
			en: "I'm forward 3."
		},
		buttons: [
			{text: 'wait', href: 'birth4'}
		]
	},
	{
		id: 'birth4',
		phase: 'birth',
		text: {
			en: "I'm forward 4."
		},
		buttons: [
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