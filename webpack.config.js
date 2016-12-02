var path = require("path");

module.exports = {
  entry: ["./js/app.js"],
  devtool: "source-map",
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
      },
	{
	    test: [/\.scss$/],
	    loader: "style!css!sass"
	},
	{
	    test: [/\.png$/],
	    loader: "url-loader?limit=1?name=[name].[ext]"
	}
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  watch: true
};
