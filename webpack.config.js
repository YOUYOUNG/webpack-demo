const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  output: {
    filename: "[name]_[chunkhash:8].js",
    path: path.resolve(__dirname, "./dist"),
  },
  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    compress: true,
    port: 8084,
  },
  module: {
    rules: [
      //   {
      //     test: /\.css$/,
      //     use: ["style-loader", "css-loader"],
      //     // webpack.config.js配置补充css前缀
      //     // use: [
      //     //   "style-loader",
      //     //   "css-loader",
      //     //   {
      //     //     loader: "postcss-loader",
      //     //     options: {
      //     //       plugins: [require("autoprefixer")],
      //     //     },
      //     //   },
      //     // ],
      //   },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                return path.relative(path.dirname(resourcePath), context) + "/";
              },
            },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: "url-loader",
          options: { limit: 2024, fallback: "file-loader" },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name]_[contenthash:8].css",
      chunkFilename: "[id].css",
    }),
    new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin({
      // Options...
    }),
  ],
};
