const path = require('path');

const config = {
  entry: [
    './app.js',
  ],
  output: {
    path: path.join(__dirname,'dist/'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = config;