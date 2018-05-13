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
			{id: 'later', href: 'wk8'},
		]
	},
	{
		id: '',
		text: {
			en: "You have no memories. You don't even have words.",
		}
	},
	{
		id: 'storyStart',
		text: {
			en: "You... wake... up...",
			fr: "Vous...<br>vous...<br><br>réveillez...?"
		},
		buttons: [
			{id: 'later', href: 'wk9'}
		]
	},
	{
		id: 'wk9',
		text: {
			en: "You wake... up. Some... thing. Thoughts?",
			fr: "Vous vous<br><br>réveillez quelque<br>chose<br><br>pensées."
		},
		buttons: [
			{id: 'later', href: 'wk10'}
		]
	},
	{
		id: 'wk10',
		text: {
			en: "You wake up. How did you get here? Since how long?",
			fr: "Vous vous réveillez.<br>Où êtes-vous ?<br><br>Comment êtes-vous arrivé ici ?",
			fr_f: "Vous vous réveillez.<br><br>Où êtes-vous ?<br><br><br>Comment êtes-vous arrivée ici ?",
		},
		buttons: [
			{id: 'later', href: 'wk11'}
		]
	},
	{
		id: '',
		text: {
			en: "You wake up, still dizzy. What's happening to you? What are you doing here?"
		}
	},
	{
		id: 'wk11',
		text: {
			en: "You wake up, with... a curious feeling of déjà vu. As if something already happened before.",
			fr: "Vous vous réveillez.<br><br>Une étrange sensation<br>de déjà vu.<br><br>Comme si quelque chose avait déjà eu lieu avant."
		},
		buttons: [
			{id: 'later', href: 'wk11_2'}
		]
	},
	{
		id: 'wk11_2',
		text: {
			en: "You wake up.<br>This looks familiar. You think you already did that before.<br>Yes. You're almost sure of that."
		},
		buttons: [
			{id: 'later', href: 'wk11_3'}
		]
	},
	{
		id: 'wk11_3',
		text: {
			en: "You wake up. And now you're sure. This is not the first time. You DID wake up before. For at least once or twice.<br><br>You don't have any other memories though. But now that you have a few of them, you wonder what happened before that. Was there a life? Or did every awakening meant a new life, as you couldn't recall the last one?"
		}
	},
	{
		id: '',
		text: {
			en: "Something pushed you. It was faint, but real."
		},
	},
	{
		id: '',
		text: {
			en: "Something touched you! "
		},
		objects: {cord: 'It touched me.'}
	},
	{
		id: 'birth',
		phase: 'birth',
		text: {
			en: "You're pushed forward."
		},
		buttons: [
			{id: 'later', href: 'birth2'},
//			{id: 'later', href: 'birth2'}
		]
	},
	{
		id: 'birth2',
		phase: 'birth',
		text: {
			en: "You're pushed forward 2."
		},
		buttons: [
			{id: 'later', href: 'birth3'}
		]
	},
	{
		id: 'birth3',
		phase: 'birth',
		text: {
			en: "You're pushed forward 3."
		},
		buttons: [
			{id: 'later', href: 'birth4'}
		]
	},
	{
		id: 'birth4',
		phase: 'birth',
		text: {
			en: "You're pushed forward 4."
		},
		buttons: [
			{id: 'later', href: 'postBirth'}
		]
	},
	{
		id: 'postBirth',
		phase: 'birth',
		text: {
			en: "You're born!"
		}
	},

	{
		id: '',
		text: {
			en: ""
		}
	}
];