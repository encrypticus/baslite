const CleanWebpackPlugin = require('clean-webpack-plugin'); // очищает папку сборки перед пересборкой
const folder = 'dist'; // папка, которая будет очищаться перед пересборкой
const options = { // объект настроек по умолчанию
  root: process.cwd(), // обязательный параметр, если текущий файл находится не на одном уровне с очищаемой директорией
  exclude: ['.git'] // исключает удаление указанного файла(директории) из очищаемой директории при ее пересборке
};

/**
 * Очищает папку сборки перед пересборкой
 * @param string output подлежащая очистке директория
 * @param object settings объект настроек плагина https://github.com/johnagan/clean-webpack-plugin#options-and-defaults-optional
 * @returns {{plugins: [null]}} конфиг сборщика
 */
module.exports = function (output = folder, settings = options) {

  return {

    plugins: [
      new CleanWebpackPlugin(output, settings)
    ]
  }
};