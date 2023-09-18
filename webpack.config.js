"use strict";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = () => {
  const NODE_ENV =
    process.env.NODE_ENV === "development" ? "development" : "production";
  const SRC_DIR = path.resolve(__dirname, "client/src");
  const DIST_DIR = path.resolve(__dirname, "client/dist");

  const entry = path.join(SRC_DIR, "index.ts");

  const externals = {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "react",
      umd: "react",
      root: "React",
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "react-dom",
      umd: "react-dom",
      root: "ReactDOM",
    },
  };

  return {
    entry,
    mode: NODE_ENV,
    externals,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
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
      filename: "[name].[contenthash].js",
      path: DIST_DIR,
      publicPath: "/custom/static",
    },
    devtool: NODE_ENV === "development" ? "source-map" : undefined,
    devServer: {
      static: {
        directory: DIST_DIR,
      },
      compress: true,
      port: 9000,
      historyApiFallback: true,
    },
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(SRC_DIR, "index.html"),
      }),
    ],
  };
};
