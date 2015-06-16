var webpack = require('webpack');
module.exports = {
   entry: {
      app: [
         'webpack/hot/only-dev-server',
         "./js/app.js"
      ],
      vendor: ["react"]
   },
   output: {
      path: __dirname + '/build',
      filename: "bundle.js"
   },
   module: {
      loaders: [{
         test: /\.js?$/,
         loaders: ['react-hot', 'babel'],
         exclude: /node_modules/
      }, {
         test: /\.js$/,
         exclude: /node_modules/,
         loader: 'babel-loader'
      }, {
         test: /\.css$/,
         loader: "style!css"
      }]
   },
   plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js", Infinity),
   ]

};
