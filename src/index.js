import React from "react";
import { render } from "react-dom";
import { App } from "./components/App";

// css
import 'semantic-ui-less/semantic.less'

// If we want to be able to easily replace a codesandbox template via Define API later...
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

render(
  <App
    defaultBabelConfig={CONFIG}
    defaultSource={SOURCE}
    defCustomPlugin={PLUGIN}
  />,
  document.getElementById("root")
);
