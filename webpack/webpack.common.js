const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "..", "./src/index.tsx"),
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      // css configuration rules
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      // image configuration rules
      {
        test: /\.(?:ico|gif|png|jpg)$/i,
        type: "asset/resource",
      },
      // svg and font configuartion rules
      {
        test: /\.(woff(2)?|eot|ttf|svg|)$/,
        type: "asset/inline",
      },
    ],
  },
  // build configuration setup
  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "bundle.js",
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "..", "./src/index.html"),
    }),
  ],
};
