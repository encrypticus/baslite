const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const options = {
  host: 'localhost',
  port: 3000,
  server: { baseDir: ['dist']}
};

/**
 * BrowserSync для webpack. Подробнее: https://github.com/Va1/browser-sync-webpack-plugin
 * @param {object} params список опций плагина. Список всех опций: https://www.browsersync.io/docs/options/
 * @returns {{plugins: [null]}} конфиг сборщика
 */
module.exports = function (params = options) {

  return {

    plugins: [
        new BrowserSyncPlugin(params)
    ]
  }
}