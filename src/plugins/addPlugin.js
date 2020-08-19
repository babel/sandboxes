import * as Babel from "@babel/standalone";
import loadedItems from "./loadedItems";

/**
 * camelFromKebab cases returns a camel case formatted string
 * from a kebab case string
 * @param {string} kebabString
 * @return {string}
 */
function camelFromKebab(kebabString) {
  const words = kebabString.split("-");
  const minLength = 2;
  if (words.length < minLength) {
    return kebabString;
  }
  const camelWords = words.map((v, i) => {
    let result = v[0].toUpperCase();
    if (i === 0) {
      result = v[0].toLowerCase();
    }
    return result + v.slice(1);
  });
  return camelWords.join("");
}

const validCharSet = new Set(
  "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz_-0123456789"
);

/**
 * sanitizePluginName returns a new sanitized plugin name.
 * If a character in the pluginName is not in the valid char set [A-Za-z0-9_-]
 * @param {string} pluginName
 */
function sanitizePluginName(pluginName) {
  let sanitizedName = "";
  for (let i = 0; i < pluginName.length; i++) {
    let toInsert = "_";
    const char = pluginName.charAt(i);
    if (validCharSet.has(char)) {
      toInsert = char;
    }
    sanitizedName += toInsert;
  }
  return sanitizedName;
}

/**
 *
 *
 * @callback pluginLoadedCallback
 * @param {boolean} pluginLoaded
 * @param {string} pluginName
 */

/**
 *
 * @param {string} name
 * @param {pluginLoadedCallback} callback
 */
function loadItem(name, callback) {
  if (loadedItems.has(name)) {
    return;
  }
  loadedItems.add(name);
  const script = document.createElement("script");
  script.src = `https://bundle.run/${name}`;
  script.async = true;
  script.addEventListener("load", () => {
    if (callback) {
      const registeredName = camelFromKebab(sanitizePluginName(name));
      callback(registeredName);
    }
  });
  document.head.appendChild(script);
}

export function loadPlugin(name) {
  loadItem(name, pluginName => {
    Babel.registerPlugin(name, window[pluginName]);
  });
}

export function loadPreset(name) {
  loadItem(name, presetName => {
    Babel.registerPreset(name, window[presetName]);
  });
}
