const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  mode: 'development', // 개발모드
  entry: ['./src/main.js', './src/scss/style.scss'], // 빌드 시작점
  output: {
    path: path.resolve(__dirname, 'public'), // 빌드 결과파일이 위치할 폴더
    filename: '[name].bundle.js', // 빌드 결과파일 이름
    publicPath: 'http://localhost:3000/public', // 브라우저단에서의 prefix
  },
  devtool: 'source-map', // 개발자도구에 원본 소스 제공
  module: {
    rules: [
      {
        test: /\.js$/,
        use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } },
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].style.css',
      chunkFilename: 'css/[name].style.css',
    }),
  ],
};
