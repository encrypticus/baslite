let reg = /\.(avi|mkv|webm|3gp|mp4)$/,
    opt = {name: './media/[name][hash:7].[ext]'};

/**
 * Обрабатывает видеофайлы
 *
 * @param {regExp|Array.<regExp>} regexp регулярное выражение или массив регулярных выражений, описыващий(ее) обрабатываемый ресурс (видеофайл)
 * @param {string|Array.<string>} exclude строка или массив строк, описывающий(ая) файл(ы), который(ые) будет исключен при обработке
 * @param {object} options список настроек загрузчика. Список всех опций: https://github.com/webpack-contrib/file-loader#options
 * @returns {{module: {rules: [null]}}} конфиг лоадера
 */
module.exports = function (regexp = reg, options = opt) {

  return {

    module: {

      rules: [
        {
          test: regexp,
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