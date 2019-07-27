const webpack = require('webpack');

/**
 * Добавляет jquery в проект
 * @returns {{plugins: [null]}}
 */
module.exports = function () {

  return {

    plugins: [
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery'
        })
    ]
  }
}