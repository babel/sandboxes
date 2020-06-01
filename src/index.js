import React from "react";
import { render } from "react-dom";
import { App } from "./components/App";

// If you want to add custom plugins or presets, you can register them
// at plugins-list.js

const BABEL_CONFIG = require("!raw-loader!../config.json");
const BABEL_CONFIG2 = require("!raw-loader!../config2.json");
const SOURCE = require("!raw-loader!../source.js");
const PLUGIN = require("!raw-loader!../plugin.js");

render(
  <App
    defaultBabelConfig={[BABEL_CONFIG, BABEL_CONFIG2]}
    defaultSource={SOURCE}
    defCustomPlugin={PLUGIN}
  />,
  document.getElementById("root")
);
