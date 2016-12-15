const path = require('path')
const fs = require('fs')
const {
  PWD
} = process.env
let externals = {}

fs.readdirSync('node_modules').filter(function (x) {
  return ['.bin'].indexOf(x) === -1
}).forEach(function (mod) {
  externals[mod] = 'commonjs ' + mod
})

module.exports = {
  entry: {
    server: [
      'babel-polyfill',
      './server/index.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'server.js'
  },
  target: 'node',
  module: {
    loaders: [{
      loader: 'babel-loader',
      include: [path.resolve(PWD, 'server')],
      test: /\.js$/,
      query: {
        presets: ['es2015', 'stage-0']
      }
    }, {
      loader: 'json-loader',
      include: [path.resolve(PWD, 'server')],
      test: /\.json$/
    }]
  },
  externals: externals
}
