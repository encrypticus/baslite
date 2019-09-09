const $burger = $('.burger');
const $nav = $('.main-nav');

const toggleMenu = function toggleMenu(event) {
  const burger = event.currentTarget;

  $burger.toggleClass('burger_close');

  $nav.slideToggle(300, function () {
    if ($(this).css('display') === 'none') $(this).removeAttr('style');
  });
};

$burger.on('click', toggleMenu);
