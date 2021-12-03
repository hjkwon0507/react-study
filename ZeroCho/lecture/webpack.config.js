const path = require('path');

module.exports = {
  name: 'Wordrelay-setting',
  mode: 'development', // 실서비스: production
  devtool: 'eval', // 빠르게
  resolve: {
    extensions: ['.js', '.jsx'] // 확장자 생략 가능하게 해줌
  },

  // 가장 중요!!
  entry: {
    app: ['./client'], // 확장자 생략
  }, // 입력

  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: { // babel 옵션들
        presets: ['@babel/preset-env', '@babel/preset-react'], 
      }
    }]
  },

  output: {
    path: path.join(__dirname, 'dist'), // 현재폴더 안에 있는 dist 
    filename: 'app.js',
  }, // 출력
};