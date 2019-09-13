const webpack = require('webpack');

module.exports = function () {
  return {
    plugins: [
      new webpack.ProvidePlugin({ Hammer: 'hammerjs' }),
    ],
  };
};
