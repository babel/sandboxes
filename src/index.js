import React from "react";
import { render } from "react-dom";
import { App } from "./components/App";

// If you want to add custom plugins or presets, you can register them
// at plugins-list.js

// const BABEL_CONFIG = require("!raw-loader!../config.json");
// const BABEL_CONFIG2 = require("!raw-loader!../config2.json");
// const SOURCE = require("!raw-loader!../source.js");
// const PLUGIN = require("!raw-loader!../plugin.js");

const BABEL_CONFIG = {
  "plugins": [
    [
      "babel-plugin-polyfill-corejs3",
      {
        "method": "usage-global",
        "targets": {
          "edge": 16
        }
      }
    ]
  ]
};

const BABEL_CONFIG2 = {}
const SOURCE = `Promise.allSettled([p1, p2]).finally(() => {
  console.log("Done!");
});
`
const PLUGIN = `export default function customPlugin(babel) {
  return {};
}
`

const CONFIG = [BABEL_CONFIG, BABEL_CONFIG2];

render(
  <App
    defaultBabelConfig={CONFIG}
    defaultSource={SOURCE}
    defCustomPlugin={PLUGIN}
  />,
  document.getElementById("root")
);
