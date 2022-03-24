const bollsColorContainer = document.getElementById('bolls-color-container');

function createRandomColor() {
  const r = parseInt(Math.random() * 255, 10);
  const g = parseInt(Math.random() * 255, 10);
  const b = parseInt(Math.random() * 255, 10);
  return `rgb(${r},${g},${b})`;
}

for (let index = 0; index < 6; index += 1) {
  const bollColor = document.createElement('div');
  bollColor.className = 'ball';
  bollColor.style.backgroundColor = createRandomColor();
  bollColor.style.border = '1px solid black';
  bollsColorContainer.appendChild(bollColor);
}
