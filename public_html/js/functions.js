function addPercent(val, dlt) {
	//Adds float dlt to string val. addPercent ('10%',-15) -> -5.
	return (parseFloat(val) + dlt).toString() + '%';
}

function mod(n, m) {
	if (typeof (n) === 'string') {
		return (((parseFloat(n) % m) + m) % m) + '%';
	} else {
		return ((n % m) + m) % m;
	}
}

function newEl(el) {
	return document.createElement(el);
}

function rnd(n) {
	if (typeof (n) === 'undefined') {
		return Math.random();
	}
	return Math.random() * n;
}