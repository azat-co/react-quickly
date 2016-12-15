module.exports = {
  entry: "./jsx/app.jsx",
  output: {
    path: __dirname + '/js',
    filename: "bundle.js"
  },
  devtool: '#sourcemap',
  stats: {
   colors: true,
   reasons: true
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel' // 'babel-loader' is also a legal name to reference
      }
    ]
  }
}