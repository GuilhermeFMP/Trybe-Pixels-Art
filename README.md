
# Projeto Pixels Art

Terceiro projeto de Fundamentos fornecido pela instituição Trybe, onde criamos uma pagina HTML e Css com funções Javascript.


## Aprendizados

Aprendir a integrar a pagina HTML com o JS, e a criar eventos que modificam a página.


## Stack utilizada

**Fundamentais:** HTML, CSS e Javascript



## Instalação

Instalação com NPM

```bash
  git clone git@github.com:GuilhermeFMP/Trybe-Pixels-Art.git 
  cd Trybe-Pixels-Art
  npm install
```
    
## Autores

- [@guilherme.kuro](https://github.com/GuilhermeFMP)


## Licença

Arquivos como .trybe e trybe.yml

[Trybe](https://www.betrybe.com/)

## Requisitos Obrigatórios

## 1 - Adicione à página o título "Paleta de Cores".

<details>
  <summary>A página deve conter o título "Paleta de Cores"</summary><br />

- O título deverá ficar dentro de uma tag `h1` com o `id` denominado `title`;

- O texto do título deve ser **exatamente** "Paleta de Cores".

</details>

## 2 - Adicione à página uma paleta contendo quatro cores distintas.

<details>
  <summary>A página deve conter uma paleta com quatro opções de cores</summary>

- A paleta de cores deve ser um elemento com `id` denominado `color-palette`, e cada cor individual contida na paleta de cores deve possuir a `classe` chamada `color`;

- A cor de fundo de cada elemento da paleta deverá ser a cor que o elemento representa. **A única cor não permitida na paleta é a cor branca**;

- Cada elemento da paleta de cores deverá ter uma borda preta, sólida e com 1 pixel de largura;

- A paleta de cores deverá listar todas as cores disponíveis para utilização lado a lado, e deverá ser posicionada abaixo do título `Paleta de Cores`;

- A paleta de cores não deve conter cores repetidas.

</details>

## 3 - Adicione a cor **preta** como a primeira cor da paleta de cores.

<details>
  <summary>A primeira cor na paleta criada no requisito 2 deve ser preta. As demais cores podem ser escolhidas livremente. </summary><br />

</details>

## 4 - Adicione um botão para gerar cores aleatórias para a paleta de cores.

<details>
  <summary>A primeira cor da sua paleta deve ser a cor preta, e as outras três cores devem ser geradas aleatoriamente ao clicar no botão.</summary><br />

</details>

## 5 - Implemente uma função usando localStorage para que a paleta de cores gerada aleatoriamente seja mantida após recarregar a página.

<details>

  <summary>As cores da paleta de cores que foram geradas aleatoriamente devem ser mantidas após recarregar a página</summary><br />

</details>

## 6 - Adicione à página um quadro contendo 25 pixels.

<details>
  <summary>Sua página deve conter um quadro de pixels 5x5</summary>

- O quadro de *pixels* deve ter 5 elementos de largura e 5 elementos de comprimento;

- O quadro de *pixels* deve possuir o `id` denominado `pixel-board`, e cada *pixel* individual dentro do quadro deve possuir a `classe` denominada `pixel`;

- A cor inicial dos *pixels* que compõem o quadro de pixels deve ser branca;

- O quadro de *pixels* deve aparecer abaixo da paleta de cores.

</details>


## 7 - Faça com que cada pixel do quadro tenha largura e altura de 40 pixels e borda preta de 1 pixel de espessura.

<details>
  <summary>Cada <code>pixel</code> do quadro deve possuir 40px de largura e 40px de altura e uma borda preta sólida de 1px de espessura</summary><br />

</details>

## 8 - Defina a cor preta como cor inicial da paleta de cores

<details>
  <summary>A cor preta já deve estar selecionada na paleta para pintar os pixels do quadro ao iniciar a página.</summary>

- O elemento que posteriormente deverá receber a classe selected deve ser um dos elementos que possuem a classe color, como especificado no requisito 2.

- O elemento da cor preta deve possuir inicialmente a classe `selected`.

</details>

## 9 - Crie uma função para selecionar uma cor na paleta de cores e preencha os pixels no quadro.

<details>
  <summary>A cor clicada deve ser selecionada e poderá ser utilizada para preencher os quadros</summary>

- A cor clicada deve receber a `classe` `selected` e a cor previamente selecionada deve perder esta `classe`;

- Somente uma das cores da paleta pode ter a classe `selected` de cada vez;

- Os elementos que deverão receber a `classe` `selected` devem ser os mesmos elementos que possuem a classe `color`, como especificado no **requisito 2**.

</details>

## 10 - Crie uma função que permita preencher um pixel do quadro com a cor selecionada na paleta de cores.

<details>
  <summary>O <code>pixel</code> do quadro clicado deve ter sua cor alterada para a cor selecionada na paleta de cores</summary><br />

</details>

## 11 - Crie um botão que retorne a cor do quadro para a cor inicial.

<details>
  <summary>Sua página deve ter um botão que, ao ser clicado, deixe todos os <code>pixels</code> do quadro com a cor branca</summary><br />

</details>

## 12 - Crie uma função para salvar e recuperar o seu desenho atual no localStorage

<details>
  <summary>Os pixels, ao serem clicados, devem ter sua cor e posição salvas no localStorage. Quando recarregar a página, o quadro deve ser recuperado a partir do que foi salvo no localStorage.</summary><br />

</details>
