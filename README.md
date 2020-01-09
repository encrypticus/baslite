# Некоммерческий шаблон сайта иконок в рамках самообразования

**При верстке шаблона использован компонентный подход. Все компоненты собираются посредством [webpack](https://webpack.js.org/)**.

***Посмотреть живое [демо](https://encrypticus.github.io/baslite/).***

***Чтобы скопировать репозиторий на свой компьютер, в консоли наберите ```git clone https://github.com/encrypticus/baslite.git```***

#### Используемые в проекте загрузчики и плагины сборщика:
##### Загрузчики ( loaders ):
1. [babel-loader](https://github.com/babel/babel-loader) — загрузчик js-файлов
2. [css-loader](https://github.com/webpack-contrib/css-loader) — загрузчик css-файлов
3. [eslint-loader](https://github.com/webpack-contrib/eslint-loader) — линтер js-файлов
4. [file-loader](https://github.com/webpack-contrib/file-loader) — загрузчик файлов статических ресурсов, таких как шрифты, изображения и т.д.
5. [html-loader](https://github.com/webpack-contrib/html-loader) — заргузчик html-файлов
6. [image-webpack-loader](https://github.com/tcoopman/image-webpack-loader) — оптимизатор файлов изображений
7. [postcss-loader](https://github.com/postcss/postcss-loader) — постпроцессор стилевых файлов
8. [pug-html-loader](https://github.com/willyelm/pug-html-loader) — загрузчик pug-файлов
9. [sass-loader](https://github.com/webpack-contrib/sass-loader) — загрузчик sass/scss-файлов
10. [style-loader](https://github.com/webpack-contrib/style-loader) — загрузчик стилевых файлов

##### Плагины ( plugins ):
1. [browser-sync-webpack-plugin](https://github.com/Va1/browser-sync-webpack-plugin) — локальный сервер разработки с [browser-sync](https://www.browsersync.io/)
2. [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin) — очищает папку сборки перед каждой пересборкой
3. [copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin) — копирует отдельные файлы или целые каталоги, которые уже существуют, в каталог сборки
4. [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) — генерирует html-файл в папке сборки
5. [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) — извлекает css-файлы в папку назначения
6. [stylelint-webpack-plugin](https://github.com/webpack-contrib/stylelint-webpack-plugin) — подключате к проекту stylelint - линтер стилевых файлов
7. [terser-webpack-plugin](https://github.com/webpack-contrib/terser-webpack-plugin) — оптимизатор js-файлов

## Команды для запуска

```bash
npm run prod         # сборка проекта
npm run dev-server   # запуск сервера разработки
npm run browser-sync # запуск сервера разработки с browser-sync
npm run deploy       # отправка содержимого папки сборки на gh-pages
