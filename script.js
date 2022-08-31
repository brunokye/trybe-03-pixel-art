const colors = [
  'red',
  'green',
  'blue',
  'yellow',
  'pink',
  'purple',
  'grey',
  'brown',
  'orange',
  'beige',
];
const paletteColor = document.querySelectorAll('.color');
const btnRandomColor = document.getElementById('button-random-color');

function randomColor(event) {
  let generate = event;
  generate = colors[Math.floor(Math.random() * colors.length)];

  return generate;
}

function colorsArray() {
  const usedColors = [];

  for (let i = 1; i < paletteColor.length; i += 1) {
    usedColors.push(randomColor());
  }

  localStorage.setItem('colors', JSON.stringify(usedColors));
  return usedColors;
}

function newColors() {
  colorsArray();

  for (let i = 1; i < paletteColor.length; i += 1) {
    for (let j = 0; j < colorsArray.length; j += 1) {
      paletteColor[i].style.backgroundColor = colorsArray[j];
    }
  }
}

btnRandomColor.addEventListener('click', newColors);

// Requisito 4 - https://stackoverflow.com/questions/14984643/css-pick-a-random-color-from-array
