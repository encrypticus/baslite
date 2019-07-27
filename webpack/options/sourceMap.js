/**
 * Генерит карту sass|scss-кода
 *
 * @param {string} mapStyle стиль карты кода.
 * Возможные значения приведены по ссылке https://webpack.js.org/configuration/devtool/
 * @returns {{devtool: string}} конфиг лоадера
 */
module.exports = function (mapStyle = 'source-map') {
  return {
    devtool: mapStyle
  }
};