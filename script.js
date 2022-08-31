// Requisito 4 - https://stackoverflow.com/questions/14984643/css-pick-a-random-color-from-array
// https://stackoverflow.com/questions/58159610/how-to-stop-random-color-from-repeating
let colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple', 'grey', 'brown', 'orange', 'beige'];
let paletteColor = document.querySelectorAll('.color');
let btnRandomColor = document.getElementById('button-random-color');

function randomColor(event) {
    event = colors[Math.floor(Math.random() * colors.length)];

    return event;
}

function newColors() {
    for (let i = 1; i < paletteColor.length; i += 1) {
        paletteColor[i].style.backgroundColor = randomColor();
    }
}

btnRandomColor.addEventListener('click', newColors)
