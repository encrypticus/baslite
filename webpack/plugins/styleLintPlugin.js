const styleLintPlugin = require('stylelint-webpack-plugin'); // линтер стилевых файлов

const options = {
  // configFile: '.stylelintrc',
  context: './',
  fix: true,
  files: ['**/*.scss', '**/*.css'],
  // failOnError: false,
  quiet: false,
};

/**
 *
 * @param {object} params список опций плагина. Список всех опций: https://stylelint.io/user-guide/node-api/#options
 * @returns {{plugins: [null]}} конфиг сборщика
 */
module.exports = function (params = options) {

  return {

    plugins: [
      new styleLintPlugin(params)
    ]
  }
}