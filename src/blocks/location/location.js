const initialize = function init() {
  // Создание карты.
  const myMap = new ymaps.Map('map', {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [37.791829, -122.413451],
    controls: [],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 14,
  });

  const placeMark = new ymaps.Placemark(
    [37.791829, -122.413451],
    {},
    {
      iconLayout: 'default#image',
      iconImageHref: require('./img/marker.svg'),
      iconImageSize: [59, 60],
    },
  );

  myMap.geoObjects.add(placeMark);
};

ymaps.ready(initialize);