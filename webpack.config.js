var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
      pigments: './js/main.js',
      nav: './js/nav.js',
      scroll: './js/scroll.js',
      imageslider: './js/imageSlider.js',
      form: './js/form.js',
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
      },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                  },
              },
        ],
      },
    stats: {
        colors: true,
      },
    devtool: 'source-map',
  };
