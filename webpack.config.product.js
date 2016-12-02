var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: ["./js/app.js"],
  output: {
    path: __dirname + "/dist",
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
      },
	{
	    test: [/\.scss$/],
	    loader: "style!css!sass"
	},
	{
	    test: [/\.png$/],
	    loader: "file-loader?name=../[path]/[name].[ext]"
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
