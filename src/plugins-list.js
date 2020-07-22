export const plugins = {};
export const presets = {};

// If you want to add custom plugins or presets, you can register them
// at plugins-list.js in dependencies

plugins[
  "@babel/plugin-external-helpers"
] = require("@babel/plugin-external-helpers");
plugins[
  "babel-plugin-polyfill-corejs2"
] = require("babel-plugin-polyfill-corejs2");
plugins[
  "babel-plugin-polyfill-corejs3"
] = require("babel-plugin-polyfill-corejs3");
plugins[
  "babel-plugin-polyfill-es-shims"
] = require("babel-plugin-polyfill-es-shims");
plugins[
  "babel-plugin-polyfill-regenerator"
] = require("babel-plugin-polyfill-regenerator");

presets["@babel/preset-env"] = require("@babel/preset-env");
presets["@babel/preset-react"] = require("@babel/preset-react");
