const inicialColors = ['rgb(0, 0, 0)', 'rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)'];
const paletteColor = document.querySelectorAll('.color');
const btnRandomColor = document.getElementById('button-random-color');
const btnClearBoard = document.getElementById('clear-board');
const btnBoardSize = document.getElementById('generate-board');
const board = document.getElementById('pixel-board');
const firstColor = paletteColor[0];
const secondColor = paletteColor[1];
const thirdColor = paletteColor[2];
const fourthColor = paletteColor[3];
let boardPixels = [];
let storageColors = [];
let storagePixels = [];
let newValue = 5;

function initialButtons() {
  for (let i = 0; i < paletteColor.length; i += 1) {
    paletteColor[i].style.backgroundColor = inicialColors[i];
  }
}

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
}

function oldButtons() {
  const getColors = JSON.parse(localStorage.getItem('colorPalette'));

  if (localStorage.getItem('colorPalette')) {
    for (let i = 1; i < paletteColor.length; i += 1) {
      paletteColor[i].style.backgroundColor = getColors[i - 1];
    }
  }
}

function pixelBoard() {
  for (let i = 0; i < newValue; i += 1) {
    const lines = document.createElement('div');

    board.appendChild(lines);
    lines.className = 'line';

    for (let j = 0; j < newValue; j += 1) {
      const pixels = document.createElement('div');

      lines.appendChild(pixels);
      pixels.className = 'pixel';
    }
  }

  boardPixels = document.querySelectorAll('.pixel');
  // Array.fill - https://attacomsian.com/blog/javascript-array-populate
  storagePixels = new Array(boardPixels.length).fill('white');
}

function startSelected() {
  firstColor.classList.add('selected');
}

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

function changeColor(event) {
  const selectedColor = document.getElementsByClassName('selected')[0];
  const getColor = selectedColor.style.backgroundColor;
  const actualColor = event.target;

  actualColor.style.backgroundColor = getColor;

  return getColor;
}

function pixelListen() {
  for (let i = 0; i < boardPixels.length; i += 1) {
    boardPixels[i].addEventListener('click', changeColor);
    localStorage.setItem('pixelBoard', JSON.stringify(storagePixels));
  }
}

function newBoard() {
  const inputBoardSize = document.getElementById('board-size');
  newValue = inputBoardSize.value;

  if (newValue === '' || newValue < 0) {
    return alert('Board inválido!');
  }

  if (newValue < 5) {
    newValue = 5;
  }

  if (newValue > 50) {
    newValue = 50;
  }

  board.innerHTML = '';
  pixelBoard();
  pixelListen();
}

function clearBoard() {
  for (let i = 0; i < boardPixels.length; i += 1) {
    boardPixels[i].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

function oldColors() {
  const getColors = JSON.parse(localStorage.getItem('pixelBoard'));

  if (localStorage.getItem('pixelBoard')) {
    for (let i = 0; i < boardPixels.length; i += 1) {
      boardPixels[i].style.backgroundColor = getColors[i];
    }
  }
}

initialButtons();
oldButtons();
pixelBoard();
startSelected();
pixelListen();
oldColors();

btnRandomColor.addEventListener('click', newButtons);
btnClearBoard.addEventListener('click', clearBoard);
btnBoardSize.addEventListener('click', newBoard);
// Class selected - https://bobbyhadz.com/blog/javascript-remove-class-from-multiple-elements
firstColor.addEventListener('click', firstSelected);
secondColor.addEventListener('click', secondSelected);
thirdColor.addEventListener('click', thirdSelected);
fourthColor.addEventListener('click', fourthSelected);
