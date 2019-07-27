const CopyWebpackPlugin = require('copy-webpack-plugin'); // копирует файлы

/**
 * Копирует файлы из одного места в другое согласно настройкам
 * @param {array} options список опций плагина. Список всех опций: https://github.com/webpack-contrib/copy-webpack-plugin#options
 * @returns {{plugins: [null]}} конфиг сборщика
 */
module.exports = function (options) {

  return {

    plugins: [
        new CopyWebpackPlugin(options)
    ]
  }
};