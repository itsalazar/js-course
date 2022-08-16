function h1OnClick (event) {
    event.preventDefault();
    // console.log(event);
    console.log('desde la func');
    input.value = "si llegó";
    p.innerHTML = "llegó";
}

let parrafo = document.getElementsByClassName('parrafo');
//console.log(parrafo);

const h1 = document.querySelector('h1');
const p = document.querySelector('#idParrafo');
const input = document.querySelector('input');
const form = document.querySelector('form');

h1.addEventListener("click", h1OnClick);
form.addEventListener('submit', h1OnClick);

h1.classList.toggle

console.log({h1, p});