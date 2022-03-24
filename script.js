const bollsColorContainer = document.getElementById('bolls-color-container');
const textColorRgb = document.getElementById('rgb-color');
const answerText = document.getElementById('answer');
const resetButton = document.getElementById('reset-game');
const score = document.getElementById('score');

const gamesPts = {
  firstTime: true,
  placar: 0,
};

function createRandomColor() {
  const r = parseInt(Math.random() * 255, 10);
  const g = parseInt(Math.random() * 255, 10);
  const b = parseInt(Math.random() * 255, 10);
  return `rgb(${r},${g},${b})`;
}

function inicializaGame() {
  const colors = [];
  answerText.innerText = 'Escolha uma cor';
  bollsColorContainer.innerHTML = null;
  for (let index = 0; index < 6; index += 1) {
    const bollColor = document.createElement('div');
    bollColor.className = 'ball';
    bollColor.style.backgroundColor = `${createRandomColor()}`;
    colors.push(bollColor.style.backgroundColor);
    bollColor.style.border = '1px solid black';
    bollsColorContainer.appendChild(bollColor);
  }

  textColorRgb.innerText = colors[parseInt(Math.random() * 5, 10)];
}

function rightOrWrong(event) {
  if (event.target.classList.contains('ball')
    && event.target.style.backgroundColor === `${textColorRgb.innerText}`) {
    gamesPts.firstTime = false;
    answerText.innerText = 'Acertou!';
    gamesPts.placar += 3;
    score.innerText = `placar: ${gamesPts.placar}`;
  } else {
    answerText.innerText = 'Errou! Tente novamente!';
  }
}

inicializaGame();

bollsColorContainer.addEventListener('click', (event) => {
  if (gamesPts.firstTime) {
    rightOrWrong(event);
  } else {
    alert('Você já acertou, troque a paleta de cores');
  }
});

resetButton.addEventListener('click', () => {
  gamesPts.firstTime = true;
  inicializaGame();
});
