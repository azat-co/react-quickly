const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    index: [
      'babel-polyfill',
      './client/index.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'build', 'public'),
    filename: '[name].js'
  },
  target: 'web',
  module: {
    loaders: [{
      loader: 'babel-loader',
      include: [path.resolve(__dirname, 'client')],
      exclude: /node_modules/,
      test: /\.js$/,
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    }, {
      loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[local]__[hash:base64:5]'),
      test: /\.css$/,
      exclude: /node_modules/
    }]
  },
  resolve: {
    modulesDirectories: [
      './node_modules',
      './client'
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
}
