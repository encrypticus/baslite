var OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // минификатор css
var terserWebpackPlugin = require('terser-webpack-plugin'); // минификатор js

/**
 * Сжимает css- и js-файлы
 *
 * @param {object} jsOptions список настроек js-минификатора, подробнее https://webpack.js.org/plugins/uglifyjs-webpack-plugin/#options
 * @param {object} cssOptions список настроек css-минификатора, подробнее https://github.com/NMFR/optimize-css-assets-webpack-plugin
 * @returns {{optimization: {minimizer: [null,null]}}}
 */
module.exports = function (jsOptions = {}, cssOptions = {}) {

  return {

    optimization: {// минификация css и js в prod-режиме
      minimizer: [
        // Параметр optimization.minimizer переопределяет значения по умолчанию, предоставляемые сборщиком,
        // поэтому нужно обязательно указать также JS minimizer:
        new terserWebpackPlugin(),
        // минификация css
        new OptimizeCSSAssetsPlugin({})
      ]
    }
  }
};