const path = require("path");
const appRootDir = require("app-root-dir");

const getPath = (dirPath = "") => {
  return path.resolve(appRootDir.get(), dirPath);
};

module.exports = getPath;
