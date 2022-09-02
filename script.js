// Guardar as cores;
let coresGuardadas = [];

function attLocalSotrage() {
  localStorage.setItem('colorPalette', JSON.stringify(coresGuardadas));
}
// Cores Aleatorias + Botão;
function colorRandom() {
  const guardaCores = [];
  const cores = document.getElementsByClassName('color');
  for (let index = 1; index < cores.length; index += 1) {
    const random = Math.floor(Math.random() * 16777215).toString(16);
    cores[index].style.backgroundColor = `#${random}`;
    guardaCores.push(`#${random}`);
  }
  coresGuardadas = guardaCores;
  attLocalSotrage();
}

const botao = document.getElementById('button-random-color');
botao.addEventListener('click', colorRandom);
// Botão Limpar
function limpaQuadrado() {
  const quadrados = document.getElementsByClassName('pixel');
  for (let index = 0; index < quadrados.length; index += 1) {
    quadrados[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}

const limpando = document.getElementById('clear-board');
limpando.addEventListener('click', limpaQuadrado);
// Guardar e Retornar as cores salvas
let pixelGuardados = [];
function attPixelStorage() {
  pixelGuardados = [];
  for (let index = 0; index < 25; index += 1) {
    pixelGuardados.push(document.getElementsByClassName('pixel')[index].style.backgroundColor);
  }
  localStorage.setItem('pixelBoard', JSON.stringify(pixelGuardados));
}
// Mudar classe selected;
function chanceClass(evento) {
  const elemento = document.querySelector('.selected');
  elemento.classList.remove('selected');
  evento.target.classList.add('selected');
}

const primeiraCor = document.getElementsByClassName('color')[0];
const segundaCor = document.getElementsByClassName('color')[1];
const terceiraCor = document.getElementsByClassName('color')[2];
const quartaCor = document.getElementsByClassName('color')[3];

primeiraCor.addEventListener('click', chanceClass);
segundaCor.addEventListener('click', chanceClass);
terceiraCor.addEventListener('click', chanceClass);
quartaCor.addEventListener('click', chanceClass);

// Pintar quadrado
function pintarQuadrado(event) {
  const elemento = document.querySelector('.selected');
  event.target.style.backgroundColor = elemento.style.backgroundColor;
}
const quadrados = document.getElementsByClassName('pixel');
for (let index = 0; index < quadrados.length; index += 1) {
  quadrados[index].addEventListener('click', pintarQuadrado);
}
// Retornar as cores;
const colorPallete = localStorage.getItem('colorPalette');
if (colorPallete !== null) {
  const coresSalva = JSON.parse(colorPallete);
  if (coresSalva.length <= 3) {
    for (let index = 0; index < 3; index += 1) {
      document.getElementsByClassName('color')[index + 1].style.backgroundColor = coresSalva[index];
    }
  }
}
// Retornar os pixels;
const attpixel = document.getElementsByClassName('pixel');
for (let index = 0; index < attpixel.length; index += 1) {
  attpixel[index].addEventListener('click', attPixelStorage);
}
const pixelPallete = localStorage.getItem('pixelBoard');
if (pixelPallete !== null) {
  const pixelSalva = JSON.parse(pixelPallete);
  if (pixelSalva.length <= 25) {
    for (let index = 0; index < 25; index += 1) {
      document.getElementsByClassName('pixel')[index].style.backgroundColor = pixelSalva[index];
    }
  }
}
