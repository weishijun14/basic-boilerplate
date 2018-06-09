const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.js",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Myboilerplate"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
