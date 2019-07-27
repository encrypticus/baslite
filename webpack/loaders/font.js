let reg = /\.(woff|woff2|eot|ttf|otf|svg)$/,
    exc = [/img/],
    opt = {name: './fonts/[name].[ext]'};

/**
 * Обрабатывает файлы шрифтов
 *
 * @param {regExp|Array.<regExp>} regexp регулярное выражение или массив регулярных выражений, описыващий(ее) обрабатываемый ресурс (шрифт)
 * @param {string|Array.<string>} exclude строка или массив строк, описывающий(ая) файл(ы), который(ые) будет исключен при обработке
 * @param {object} options список настроек загрузчика. Список всех опций: https://github.com/webpack-contrib/file-loader#options
 * @returns {{module: {rules: [null]}}} конфиг лоадера
 */
module.exports = function (regexp = reg, exclude = exc, options = opt) {

  return {

    module: {

      rules: [
        {
          test: regexp,
          exclude: exclude,
          use: [
            {
              loader: 'file-loader',
              options: options
            }
          ]
        }
      ]
    }
  }
}