const removeClass = function romoveNojsClass() {
  const html = document.querySelector('html');
  html.classList.remove('nojs');
}

module.exports = removeClass;
