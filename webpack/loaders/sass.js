const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // обрабатывает scss|sass
const autoprefixer = require('autoprefixer');

/**
 * Обрабатывает sass|scss-модули
 * @param loadMap {boolean} булево значение, от которого зависит, будет или нет генериться карта кода
 * @returns {{module: {rules: [null]}}} конфиг лоадера
 */
module.exports = function (loadMap) {

  return {

    module: {

      rules: [
        {
          test: /\.(scss|sass)$/,
          use: [
            MiniCssExtractPlugin.loader,
            // генерация sourcemap в зависимости от режима сборки; для того чтобы карта сгенерировалась обязательно
            // нужно у обоих лоадеров: sass-loader и css-loader установить параметр sourceMap=true + прописать
            // свойство сборщика 'devtool: 'source-map''
            {
              loader: 'css-loader',
              options: {
                sourceMap: loadMap ? true : false
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [autoprefixer()]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: loadMap ? true : false
              }
            }
          ]
        }
      ]

    }
  }

};