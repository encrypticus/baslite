const slider = document.querySelector('.latest-works__slider');
const sliderInner = slider.querySelector('.latest-works__slider-inner');
const buttonLeft = document.querySelector('.arrow-button');
const buttonRight = document.querySelector('.arrow-button_direction_right');
const touchEventDispathcer = new Hammer(slider);
let percentForMarginLeft = 0;

const setMarginLeft = function setMarginLeft() {
  sliderInner.style.marginLeft = `${percentForMarginLeft}%`;
};

const checkLeftBorder = function checkLeftBorder() {
  if (percentForMarginLeft < -400) {
    percentForMarginLeft = -400;
    console.log(percentForMarginLeft);
    return;
  }
};

const checkRightBorder = function checkRightBrder() {
  if (percentForMarginLeft > 0) {
    percentForMarginLeft = 0;
    return;
  }
};

const moveLeft = function moveLeft() {
  percentForMarginLeft -= 100;
  checkLeftBorder();
  setMarginLeft();
};

const moveRight = function moveRight() {
  percentForMarginLeft += 100;
  checkRightBorder();
  setMarginLeft();
};

buttonRight.addEventListener('click', moveLeft);
buttonLeft.addEventListener('click', moveRight);
touchEventDispathcer.on('swipeleft', moveLeft);
touchEventDispathcer.on('swiperight', moveRight);
