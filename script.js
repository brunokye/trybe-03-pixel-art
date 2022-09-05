const paletteColor = document.querySelectorAll('.color');
const btnRandomColor = document.getElementById('button-random-color');
const board = document.getElementById('pixel-board');
const firstColor = paletteColor[0];
const secondColor = paletteColor[1];
const thirdColor = paletteColor[2];
const fourthColor = paletteColor[3];
let storageColors = [];

// Random RGB - https://stackoverflow.com/questions/23095637/how-do-you-get-random-rgb-in-javascript
function newColors() {
  const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);

  return `rgb(${r},${g},${b})`;
}

function colorsArray() {
  storageColors = [];

  for (let i = 1; i < paletteColor.length; i += 1) {
    storageColors.push(newColors());
  }
}

function newButtons() {
  colorsArray();

  for (let i = 1; i < paletteColor.length; i += 1) {
    paletteColor[i].style.backgroundColor = storageColors[i - 1];
  }

  localStorage.setItem('colorPalette', JSON.stringify(storageColors));

  console.log(JSON.parse(localStorage.getItem('colorPalette')));
} btnRandomColor.addEventListener('click', newButtons);

function pixelBoard() {
  for (let i = 0; i < 5; i += 1) {
    const lines = document.createElement('div');

    board.appendChild(lines);
    lines.className = 'line';

    for (let j = 0; j < 5; j += 1) {
      const pixels = document.createElement('div');

      lines.appendChild(pixels);
      pixels.className = 'pixel';
    }
  }
} pixelBoard();

function startSelected() {
  firstColor.classList.add('selected');
} startSelected();

function firstSelected() {
  if (firstColor.classList[1] === undefined) {
    paletteColor.forEach((color) => {
      color.classList.remove('selected');
    });

    firstColor.classList.add('selected');
  }
}

function secondSelected() {
  if (secondColor.classList[1] === undefined) {
    paletteColor.forEach((color) => {
      color.classList.remove('selected');
    });

    secondColor.classList.add('selected');
  }
}

function thirdSelected() {
  if (thirdColor.classList[1] === undefined) {
    paletteColor.forEach((color) => {
      color.classList.remove('selected');
    });

    thirdColor.classList.add('selected');
  }
}

function fourthSelected() {
  if (fourthColor.classList[1] === undefined) {
    paletteColor.forEach((color) => {
      color.classList.remove('selected');
    });

    fourthColor.classList.add('selected');
  }
}

// Color selected - https://bobbyhadz.com/blog/javascript-remove-class-from-multiple-elements
firstColor.addEventListener('click', firstSelected);
secondColor.addEventListener('click', secondSelected);
thirdColor.addEventListener('click', thirdSelected);
fourthColor.addEventListener('click', fourthSelected);
