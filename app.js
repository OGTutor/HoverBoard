const board = document.querySelector('#board');
const colors = [
	'#2193b0',
	'#6dd5ed',
	'#0F2027',
	'#203A43',
	'#12c2e9',
	'#c471ed',
	'#f64f59',
	'#009FFF',
	'#ec2F4B',
	'#FF8C00',
	'#FF0080',
	'#f44336',
	'#fc00ff',
	'#00dbde',
	'#FFE000',
	'#799F0C',
	'#00416A',
	'#5433FF',
	'#20BDFF',
	'#FFE000',
];
const SQUARES_NUMBER = 1000;

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div');
	square.classList.add('square');

	square.addEventListener('mouseover', () => {
		setColor(square);
	});

	square.addEventListener('mouseleave', () => {
		removeColor(square);
	});

	board.append(square);
}

function setColor(element) {
	const color = getRandomColor();
	element.style.backgroundColor = color;
	element.style.boxShadow = `0 0 2px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`;
}

function removeColor(element) {
	element.style.backgroundColor = '#1d1d1d';
	element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}
getRandomColor();
