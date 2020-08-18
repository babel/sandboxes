import * as Babel from "@babel/standalone";

// If you want to add custom plugins or presets, you can register them
// at plugins-list.js in dependencies

// Default list of plugins, for internal use only
export const plugins = {
  "@babel/plugin-external-helpers": {
    name: "@babel/plugin-external-helpers",
    description: "does this",
    fileLocation: "/static/plugins/@babel/plugin-external-helpers.js",
    defaultConfig: {
      method: "usage-global",
      targets: {
        edge: 16,
      },
    },
  },
  "babel-plugin-polyfill-corejs2": {
    name: "babel-plugin-polyfill-corejs2",
    description: "does this",
    fileLocation: "/static/plugins/babel-plugin-polyfill-corejs2.js",
    defaultConfig: {
      method: "usage-global",
      targets: {
        edge: 16,
      },
    },
  },
  "babel-plugin-polyfill-corejs3": {
    name: "babel-plugin-polyfill-corejs3",
    description: "does this",
    fileLocation: "/static/plugins/babel-plugin-polyfill-corejs3.js",
    defaultConfig: {
      method: "usage-global",
      targets: {
        edge: 16,
      },
    },
  },
  "babel-plugin-polyfill-es-shims": {
    name: "babel-plugin-polyfill-es-shims",
    description: "does this",
    fileLocation: "/static/plugins/babel-plugin-polyfill-es-shims.js",
    defaultConfig: {
      method: "usage-global",
      targets: {
        edge: 16,
      },
    },
  },
  "babel-plugin-polyfill-regenerator": {
    name: "babel-plugin-polyfill-regenerator",
    description: "does this",
    fileLocation: "/static/plugins/babel-plugin-polyfill-regenerator.js",
    defaultConfig: {
      method: "usage-global",
      targets: {
        edge: 16,
      },
    },
  },
};

// Default list of presets, internal use only
// env and react come bundled with @babel/standalone, so no fileLocation needed
export const presets = {
  env: {
    name: "env",
    description: "does that",
    defaultConfig: {},
  },
  react: {
    name: "react",
    description: "does that",
    defaultConfig: {},
  },
};

const pluginMap = new Map([
  ["babel-plugin-polyfill-corejs3", "babelPluginPolyfillCorejs3"],
  ["babel-plugin-polyfill-corejs2", "babelPluginPolyfillCorejs2"],
  ["@babel/plugin-external-helpers", "_babel_pluginExternalHelpers"],
  ["babel-plugin-polyfill-es-shims", "babelPluginPolyfillEsShims"],
  ["babel-plugin-polyfill-regenerator", "babelPluginPolyfillRegenerator"],
]);

export function addDefaultPlugins() {
  Object.keys(plugins).forEach(pluginName => {
    const script = document.createElement("script");
    script.src = plugins[pluginName].fileLocation;
    script.async = true;
    script.addEventListener("load", () => {
      Babel.registerPlugin(pluginName, window[pluginMap.get(pluginName)]);
    });
    document.head.appendChild(script);
  });
}
