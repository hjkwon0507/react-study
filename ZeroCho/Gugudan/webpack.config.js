const path = require('path');
const { webpack } = require('webpack');

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
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 1% in KR', 'last 2 chrome versions'], // 한국에서 점유율 5% 이상, 최근 두 버전의 크롬에서만 (browserslist 참고)
            },
            debug: true,
          }],
          '@babel/preset-react',
        ],
        plugins: ['@babel/plugin-proposal-class-properties'],
      }
    }],
  },
  plugins: [
    // new webpack.LoaderOptionsPlugin({ debug: true }),
  ],
  output: {
    filename: 'app.js', // ./dist/app.js
    path: path.join(__dirname, 'dist'),
  },
};