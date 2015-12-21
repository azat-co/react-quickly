module.exports = {
  entry: "./app.jsx",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015']
        },
        loader: 'babel' // 'babel-loader' is also a legal name to reference
      }
    ]
  }
};
