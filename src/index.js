import React from "react";
import { render } from "react-dom";
import { App, visitorTemplate } from "./components/App";

// If you want to add custom plugins or presets, you can register them
// at plugins-list.js

// const BABEL_CONFIG = require("!raw-loader!../config.json");
// const BABEL_CONFIG2 = require("!raw-loader!../config2.json");
// const SOURCE = require("!raw-loader!../source.js");
// const PLUGIN = require("!raw-loader!../plugin.js");

const SOURCE = `Promise.allSettled([p1, p2]).finally(() => {
  console.log("Done!");
});
`;
const CONFIG = [
  {
    plugins: [
      [
        "babel-plugin-polyfill-corejs3",
        {
          method: "usage-global",
          targets: {
            edge: 16,
          },
        },
      ],
    ],
  },
  {},
];
const PLUGIN = `export default function customPlugin(babel) {
  return {
    visitor: {
      Identifier(path) {
        // console.log(path.node.name);
      }
    }
  };
}
`;
const VISITOR = "Identifier";

render(
  <App
    defaultBabelConfig={CONFIG}
    defaultSource={SOURCE}
    defCustomPlugin={PLUGIN}
    defaultVisitor={VISITOR}
  />,
  document.getElementById("root")
);
