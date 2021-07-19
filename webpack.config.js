const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const htmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "main-[chunkhash:8].js",
  },
  resolveLoader: {
    modules: ["node_modules", "./myLoader"],
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
        // use: [
        //   "jld-style-loader",
        //   "jld-css-loader",
        //   {
        //     loader: "sass-loader",
        //     options: {
        //       // `dart-sass` 是首选
        //       implementation: require("sass"),
        //     },
        //   },
        // ],
      },
      {
        test: /.js$/i,
        use: [
          "replace-loader.js",
          {
            loader: "replace-async-loader.js",
            options: {
              info: "Jld",
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|webp|jpeg)$/i,
        use: {
          loader: "url-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "images",
            publicPath: "../images",
            limit: 1024 * 3,
          },
        },
      },
      {
        test: /\.(woff|woff2|svg|eot)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: "../",
          },
        },
      },
    ],
  },

  plugins: [
    new htmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({ filename: "css/[name]-[contenthash:8].css" }),
    new CleanWebpackPlugin(),
  ],

  // devtool: "source-map",
}
