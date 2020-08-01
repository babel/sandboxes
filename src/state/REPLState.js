// convert a Unicode string to a string in which
// each 16-bit unit occupies only one byte
// source: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa
function toBinary(string) {
  const codeUnits = new Uint16Array(string.length);
  for (let i = 0; i < codeUnits.length; i++) {
    codeUnits[i] = string.charCodeAt(i);
  }
  return String.fromCharCode(...new Uint8Array(codeUnits.buffer));
}

// source: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa
function fromBinary(binary) {
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return String.fromCharCode(...new Uint16Array(bytes.buffer));
}

/**
 * encodeToBase64 encodes any string to base64.
 * @param {string} jsSource
 * @returns {string} base64 js string.
 */
function encodeToBase64(jsSource) {
  const binString = toBinary(jsSource);
  return btoa(binString);
}

/**
 * decodeBase64 decodes a base64 string to
 * js code.
 * @param {string} base64String
 * @returns {string} the original js source.
 */
function decodeBase64(base64String) {
  const decoded = atob(base64String);
  return fromBinary(decoded);
}

class REPLState {
  /**
   * The REPLState constructor takes in what the App component provides with the exception of the configs.
   * Those must be turned into strings before calling the constructor.
   * @param {string} jsSource
   * @param {string} pluginSource
   * @param {string[]} configs
   */
  constructor(jsSource, pluginSource, configs) {
    this.jsSource = jsSource;
    this.pluginSource = pluginSource;
    this.configs = configs;
  }

  /**
   * Encode returns an encoded version of the REPL State
   * as a string.
   * @returns {string}
   */
  Encode() {
    return JSON.stringify({
      source: encodeToBase64(this.jsSource),
      plugin: encodeToBase64(this.pluginSource),
      configs: this.configs.map((configSrc) => {
        return encodeToBase64(configSrc);
      }),
    });
  }

  /**
   * Link gets the sharing the sharing link
   * for the given REPL state.
   * @returns {Promise<string>} String URL.
   */
  async Link() {
    const url = "http://localhost:1337/api/v1/blobs/create";
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: this.Encode(),
    });
    return resp.text();
  }

  /**
   * Decode decodes the json string.
   * @param {string} encodedState
   * @returns {REPLState}
   */
  static Decode(encodedState) {
    let jsonState = JSON.parse(encodedState);
    return new REPLState(
      decodeBase64(jsonState.source),
      decodeBase64(jsonState.plugin),
      jsonState.configs.map((configs) => {
        return decodeBase64(configs);
      })
    );
  }
}

export default REPLState;
