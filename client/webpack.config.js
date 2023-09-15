const path = require("path");
const WebpackDashDynamicImport = require("@plotly/webpack-dash-dynamic-import");

const NODE_ENV =
  process.env.NODE_ENV === "development" ? "development" : "production";

module.exports = {
  entry: {
    App: "./src/App.tsx",
  },
  mode: NODE_ENV,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].min.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
  plugins: [new WebpackDashDynamicImport()],
};
