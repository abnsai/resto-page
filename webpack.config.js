const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const distPath = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      type: 'module',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',  
      filename: 'index.html',         
    }),
  ],
  experiments: {
    outputModule: true,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 8080,
  },
};
