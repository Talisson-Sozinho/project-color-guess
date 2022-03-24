const bollsColorContainer = document.getElementById('bolls-color-container');
const textColorRgb = document.getElementById('rgb-color');
const answerText = document.getElementById('answer');
const resetButton = document.getElementById('reset-game');

function createRandomColor() {
  const r = parseInt(Math.random() * 255, 10);
  const g = parseInt(Math.random() * 255, 10);
  const b = parseInt(Math.random() * 255, 10);
  return `(${r},${g},${b})`;
}

function inicializaGame() {
  const colors = [];
  answerText.innerText = 'Escolha uma cor';
  bollsColorContainer.innerHTML = null;
  for (let index = 0; index < 6; index += 1) {
    const bollColor = document.createElement('div');
    bollColor.className = 'ball';
    bollColor.style.backgroundColor = `rgb${createRandomColor()}`;
    colors.push(bollColor.style.backgroundColor);
    bollColor.style.border = '1px solid black';
    bollsColorContainer.appendChild(bollColor);
  }

  textColorRgb.innerText = colors[parseInt(Math.random() * 5, 10)];
}
inicializaGame();

bollsColorContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('ball')
    && event.target.style.backgroundColor === `${textColorRgb.innerText}`) {
    answerText.innerText = 'Acertou!';
  } else {
    answerText.innerText = 'Errou! Tente novamente!';
  }
});

resetButton.addEventListener('click', inicializaGame);
