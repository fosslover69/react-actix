const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './lib/index.js',
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
},
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'actix-web-static-files WebPack',
      template: 'index.html',
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist', 'bundle'),
  },
};