const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    mirageJs: './src/mirageJs.js',
    jsonServer: './src/jsonServer.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['mirageJs'],
      // inject: false,
      template: path.resolve('src', 'mirageJs.html'),
      filename: 'mirageJs.html',
    }),
    new HtmlWebpackPlugin({
      chunks: ['jsonServer'],
      // inject: false,
      template: path.resolve('src', 'jsonServer.html'),
      filename: 'jsonServer.html',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        type: 'javascript/auto',
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    port: 1279,
    proxy: {
      '/': {
        target: 'http://localhost:3000',
      },
    },
  },
};
