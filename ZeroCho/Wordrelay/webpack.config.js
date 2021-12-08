const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'Wordrelay-setting',
  mode: 'development', // 실서비스: production
  devtool: 'eval', // 빠르게, 실서비스: hidden-source-map
  resolve: {
    extensions: ['.js', '.jsx'] // 확장자 생략 가능하게 해줌
  },

  // 가장 중요!!
  entry: {
    app: ['./client'], // 확장자 생략
  }, // 입력

  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 1% in KR'], // 한국에서 점유율 5% 이상, 최근 두 버전의 크롬에서만 (browserslist 참고)
            },
            debug: true,
          }],
          '@babel/preset-react',
        ],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          'react-refresh/babel'],
      }
    }],
  },
  plugins: [
    new RefreshWebpackPlugin()
  ],

  output: {
    path: path.join(__dirname, 'dist'), // 현재폴더 안에 있는 dist 
    filename: 'app.js',
    publicPath: '/dist/',
  }, // 출력
  devServer : {
    devMiddleware: { publicPath: '/dist' },
    static: { directory: path.resolve(__dirname) }, // index.html 위치 
    hot: true
  },
};