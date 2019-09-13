const banner = document.querySelector('.banner');
const toggles = banner.querySelectorAll('.banner__toggle');
const sloganInner = banner.querySelector('.banner__slogan-inner');
const togglesLength = toggles.length;
const { forEach } = Array.prototype;
const touchEventDispatcher = new Hammer(banner);
let percentForMarginLeft = 0;

const removeActiveStateFromButtons = function removeActiveStateFromButtons() {
  for (let i = 0; i < togglesLength; i += 1) {
    toggles[i].classList.remove('banner__toggle_active');
  }
};

const setActiveStateOnButton = function setActiveButton(button) {
  button.classList.add('banner__toggle_active');
};

const repaintBanner = function repaintBanner(index) {
  const left = -100 * index;
  percentForMarginLeft = left;
  const marginLeft = `${left}%`;

  sloganInner.style.marginLeft = marginLeft;
};

const moveSlide = function moveSlide(toggle, index) {
  return () => {
    removeActiveStateFromButtons();
    setActiveStateOnButton(toggle);
    repaintBanner(index);
  };
};

const setListener = function setListener() {
  return (toggle, index) => {
    toggle.addEventListener('click', moveSlide(toggle, index));
  };
};

forEach.call(toggles, setListener());

const checkLeftBorder = function checkLeftBorder() {
  if (percentForMarginLeft < -400) {
    percentForMarginLeft = -400;
    return;
  }
};

const checkRightBorder = function checkRightBorder() {
  if (percentForMarginLeft > 0) {
    percentForMarginLeft = 0;
    return;
  }
};

const setValueForMarginLeft = function setValueForMarginLeft(value) {
  sloganInner.style.marginLeft = `${value}%`;
};

const getCurrentButton = function getCurrentButton(fromValue) {
  let currentButton = Math.abs(fromValue);
  currentButton = String(currentButton).substr(0, 1);
  return currentButton;
};

touchEventDispatcher.on('swipeleft', () => {
  percentForMarginLeft -= 100;
  checkLeftBorder();
  setValueForMarginLeft(percentForMarginLeft);
  removeActiveStateFromButtons();
  setActiveStateOnButton(toggles[getCurrentButton(percentForMarginLeft)]);
});

touchEventDispatcher.on('swiperight', () => {
  percentForMarginLeft += 100;
  checkRightBorder();
  setValueForMarginLeft(percentForMarginLeft);
  removeActiveStateFromButtons();
  setActiveStateOnButton(toggles[getCurrentButton(percentForMarginLeft)]);
});
