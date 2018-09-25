module.exports = {
  entry: "./client/jsx/app.jsx",
  output: {
    path: __dirname + '/dist/js',
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
        loader: 'babel-loader' 
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
}
