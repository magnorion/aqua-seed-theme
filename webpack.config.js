const webpack = require("webpack"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  CssMinimizerPlugin = require("css-minimizer-webpack-plugin"),
  path = require('path');

module.exports = {
  entry: __dirname + "/assets/assets.js",
  output: {
    filename: "main.js",
    path: __dirname + "/assets/dist"
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|ttf|svg|eot|jpg)/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000
            }
          }
        ]
      },
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      }
    ]
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.ProvidePlugin({
      jQuery: "jQuery",
      $: "jQuery"
    })
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, '.'),
    },
    compress: true,
    port: 9000,
  }
}
