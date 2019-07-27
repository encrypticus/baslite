const path = require('path');
const merge = require('webpack-merge'); // объединяет массивы и объекты конфигураций из нескольких файлов-модулей
const pug = require('./webpack/loaders/pug'); // модуль обработки pug-файлов
const sass = require('./webpack/loaders/sass'); // модуль обработки sass|scss-файлов
const miniCssExtractPlugin = require('./webpack/plugins/miniCssExtractPlugin'); // плагин обработки css-файлов
const sourceMap = require('./webpack/options/sourceMap'); // опция генерации карты кода
const optimization = require('./webpack/options/optimization'); // опция оптимизации css- js-кода
const watch = require('./webpack/options/watch'); // опция наблюдения за файлами для пересборки
const font = require('./webpack/loaders/font'); // модуль обработки файлов шрифтов
const htmlWebpackPlugin = require('./webpack/plugins/htmlWebpackPlugin');// модуль генерирует html-файл в папке сборки
const cleanWebpackPlugin = require('./webpack/plugins/cleanWebpackPlugin'); // модуль очищает папку сборки перед пересборкой
const styleLintPlugin = require('./webpack/plugins/styleLintPlugin'); // линтер стилевых файлов
const browserSync = require('./webpack/plugins/browserSyncPlugin'); // в комментариях не нуждается
const jquery = require('./webpack/plugins/jquery'); // плагин, добавляющий jquery в проект
const css = require('./webpack/loaders/css'); // модуль обработки css-файлов
const image = require('./webpack/loaders/image'); // модуль обработки файлов изображений
const video = require('./webpack/loaders/video'); // модуль обработки видеофайлов
const copyWebpackPlugin = require('./webpack/plugins/copyWebpackPlugin'); // плагин копирования файлов

// функция вторым аргументом принимает args.mode от прописанных в package.json скриптов: args.mode = development или args.mode = production
module.exports = (env, args) => {

  if (args.mode !== 'development' && args.mode !== 'production') {
    args.mode = 'development';
  }

  let mode = 'development';
  let isDev = mode === args.mode; // флаг, указывающий режим сборки

  // точки входа
  const config = merge({
        entry: {
          'index': './src/js/index.js',
          'uikit': './src/js/uikit.js',
          'reviews': './src/js/reviews.js',
          'news': './src/js/news.js',
          'registration': './src/js/registration.js',
          'about': './src/js/about.js'
        },

        output: { // точка выхода
          filename: '[name].js', // имя выходного js-файла
          path: path.resolve(__dirname, 'dist'), // директория, в которой будет лежать выходной файл
        },

        module: { // модули, обрабатывающие файлы с указанным расширением
          rules: [

            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
            },
          ]
        }
      },
      cleanWebpackPlugin(),
      miniCssExtractPlugin(),
      optimization(),
      watch(),
      font(),
      image(),
      video(),
      pug(isDev),
      sass(isDev),
      copyWebpackPlugin([{from: 'src/favicons', to: 'favicons'}]),
      htmlWebpackPlugin({filename: 'uikit.html', template: 'src/pages/uikit.pug', inject: false}),
      htmlWebpackPlugin({filename: 'index.html', template: 'src/pages/index.pug', inject: false}),
      htmlWebpackPlugin({filename: 'reviews.html', template: 'src/pages/reviews.pug', inject: false}),
      htmlWebpackPlugin({filename: 'news.html', template: 'src/pages/news.pug', inject: false}),
      htmlWebpackPlugin({filename: 'registration.html', template: 'src/pages/registration.pug', inject: false}),
      htmlWebpackPlugin({filename: 'about.html', template: 'src/pages/about.pug', inject: false}),
      styleLintPlugin(),
      env.browserSync === 'open' ? browserSync() : {},
      jquery()
  );

  if (isDev) { // в режиме разработки
    return merge(
        config,
        sourceMap()
    );
  }

  if (!isDev) { // в режиме продакшн
    return merge(
        config
    );
  }
};
