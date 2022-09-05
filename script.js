const paletteColor = document.querySelectorAll('.color');
const btnRandomColor = document.getElementById('button-random-color');
const board = document.getElementById('pixel-board');
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
