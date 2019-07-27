let reg = /\.(png|gif|jpg|jpeg|svg)$/,
    exc = [/fonts/],
    opt = {name: './img/[name][hash:7].[ext]'};

/**
 * Обрабатывает файлы изображений
 *
 * @param {regExp|Array.<regExp>} regexp регулярное выражение или массив регулярных выражений, описыващий(ее) обрабатываемый ресурс (изображение)
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
            },
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 70,
                },
                optipng: {
                  enabled: false,
                },
                pngquant: {
                  quality: '65-90',
                  speed: 4,
                },
                gifsicle: {
                  interlaced: false,
                },
              },
            }
          ]
        }
      ]
    }
  }
}