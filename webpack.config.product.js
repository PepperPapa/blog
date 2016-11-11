var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: ["./js/app.js"],
  output: {
    path: __dirname + "/js",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: "node_modules",
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react"]
        }
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  //...
  plugins:[
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    })
  ]
  //...
};
