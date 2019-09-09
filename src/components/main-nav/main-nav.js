const $links = $('.main-nav__item_has-child>.main-nav__link');
const $lists = $('.main-nav__list_level-2');
const $rootElement = $(document.documentElement);

const toggleMenu = function toggleMenu($list) {
  $list.slideToggle(300, function () {
    const $this = $(this);
    if ($this.css('display') === 'none') $(this).removeAttr('style');
  });
};

const setToggle = function setToggle(list) {
  return function (event) {
    event.preventDefault();
    const $list = $(list);
    toggleMenu($list);
  };
};

$links.each((index, item) => {
  const list = $lists[index];
  const $item = $(item);
  $item.on('click', setToggle(list));
});

const slideToggle = function slideToggle() {
  return function (event) {
    const { target } = event;

    $lists.each(function (index, item) {
      const $item = $(item);
      const currentLink = $links[index];

      if ($item.css('display') === 'block' && target !== currentLink) {
        $item.slideUp(300, function () {
          const $this = $(this);
          if ($this.css('display') === 'none') $this.removeAttr('style');
        });
      }
    });
  };
};

$rootElement.on('click', slideToggle());
