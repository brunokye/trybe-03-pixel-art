const paletteColor = document.querySelectorAll('.color');
const btnRandomColor = document.getElementById('button-random-color');
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

  console.log(storageColors);
}

btnRandomColor.addEventListener('click', newButtons);
