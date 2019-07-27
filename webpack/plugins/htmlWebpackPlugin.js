const HtmlWebpackPlugin = require('html-webpack-plugin'); // генерирует html-файл в папке назначения

/**
 * Генерирует html-файл в папке назначения
 * @param {object} options список опций плагина. Список всех опций: https://github.com/jantimon/html-webpack-plugin#options
 * @returns {{plugins: [null]}} конфиг сборщика
 */
module.exports = function (options) {

  return {

    plugins: [
      new HtmlWebpackPlugin(options)
    ]
  }

};