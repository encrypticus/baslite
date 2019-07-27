const MiniCssExtractPlugin = require('mini-css-extract-plugin');// обрабатывает css
let options = {filename: 'styles.css', chunkFilename: '[id].css'};

/**
 * Плагин извлекает CSS в отдельные файлы. Он создает файл CSS для каждого файла JS, который содержит CSS.
 * Он поддерживает загрузку по требованию CSS и SourceMaps.
 *
 * @param params {string} список опций плагина
 * Подробнее: https://github.com/webpack-contrib/mini-css-extract-plugin
 * @returns {{plugins: [null]}} конфиг сборщика
 */
module.exports = function (params = options) {

  return {

    plugins: [
      // извлекает файл стилей и кладет в папку назначения
      new MiniCssExtractPlugin(options)
    ]
  }
}