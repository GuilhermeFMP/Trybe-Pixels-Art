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
