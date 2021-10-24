const randomColor = document.querySelector('.widget');
const span = document.querySelector('.color');

randomColor.addEventListener('click', buttonClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function buttonClick(event) {
  span.textContent = getRandomHexColor();
  if(!event.target.classList.contains('change-color')){
    return;
  }
return (document.body.style.background =getRandomHexColor());
}

