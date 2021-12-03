const path = require('path')

module.exports = {
  module: 'development',
  devtool: 'eval', // hidden-source-map
  resolve: {
    extensions: ['.jsx', '.js']
  },
  entry: {
    app: './client',
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react']
      }
    }],
  },
  output: {
    filename: 'app.js', // ./dist/app.js
    path: path.join(__dirname, 'dist'),
  },
};