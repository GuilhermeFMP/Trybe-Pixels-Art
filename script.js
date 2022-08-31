function colorRandom() {
  const cores = document.getElementsByClassName('color');
  for (let index = 1; index < cores.length; index += 1) {
    const random = Math.floor(Math.random() * 16777215).toString(16);
    cores[index].style.backgroundColor = `#${random}`;
  }
}

const botao = document.getElementById('button-random-color');
botao.addEventListener('click', colorRandom);
