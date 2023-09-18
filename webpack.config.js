const path = require("path");

module.exports = function (env, argv) {
  const dashLibraryName = "custom_components";
  const mode = (argv && argv.mode) || "production";
  const entry = [path.join(__dirname, "client/src/components/index.ts")];
  const output = {
    path: path.join(__dirname, dashLibraryName),
    filename: `${dashLibraryName}.js`,
  };

  return {
    output,
    mode,
    entry,
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },
  };
};
