const path = require("path");

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  const rootPath = path.resolve(__dirname, ".");
  const isProduction = stage === "build-javascript";
  actions.setWebpackConfig({
    devtool: isProduction ? false : "cheap-module-source-map", // If production JavaScript and CSS build then turn off source maps (devtools)
    resolve: {
      modules: [rootPath, "node_modules"],
    },
  });
};
