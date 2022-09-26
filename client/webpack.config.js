import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';

module.exports = {
  mode: 'development', // 개발모드
  entry: { index: './src/index.js' }, // 빌드 시작점
  output: {
    path: path.resolve('./public'), // 빌드 결과파일이 위치할 폴더
    filename: '[name].bundle.js', // 빌드 결과파일 이름
    assetModuleFilename: '[name][ext]?[hash]',
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
      {
        test: /\.(svg|png)$/,
        type: 'asset/resource',
        generator: {
          outputPath: 'images',
        },
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
    }),
  ],
  resolve: {
    alias: {
      '@images': path.resolve(__dirname, './src/images/'),
      '@styles': path.resolve(__dirname, './src/styles/'),
    },
  },
};
