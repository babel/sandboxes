import React, { useState, useCallback, useEffect } from "react";
// import * as Babel from "@babel/standalone";
import * as Babel from "@babel/core";
import { CustomPlugin } from "./CustomPlugin";
import { MainMenu } from "./MainMenu";
import { Input } from "./Input";
import { Output } from "./Output";
import { gzipSize } from "../gzip";
import { Root } from "./styles";
import { useDebounce } from "../utils/useDebounce";
import REPLState from "../state/REPLState.js";

import { Grid } from "semantic-ui-react";

window.babel = Babel;

export const App = ({ defaultSource, defaultBabelConfig, defCustomPlugin }) => {
  const [source, setSource] = useState(defaultSource);
  const [enableCustomPlugin, toggleCustomPlugin] = useState(true);
  const [customPlugin, setCustomPlugin] = useState(defCustomPlugin);
  const [babelConfig, setBabelConfig] = useState(
    Array.isArray(defaultBabelConfig)
      ? defaultBabelConfig
      : [defaultBabelConfig]
  );
  const [size, setSize] = useState(null);
  const [gzip, setGzip] = useState(null);
  const debouncedSource = useDebounce(source, 125);
  const [shareLink, setShareLink] = React.useState("");
  const [showShareLink, setShowShareLink] = React.useState(false);

  const updateBabelConfig = useCallback((config, index) => {
    setBabelConfig(configs => {
      const newConfigs = [...configs];
      newConfigs[index] = config;

      return newConfigs;
    });
  }, []);

  const removeBabelConfig = useCallback(index => {
    setBabelConfig(configs => configs.filter((c, i) => index !== i));
  }, []);

  useEffect(() => {
    let size = new Blob([debouncedSource], { type: "text/plain" }).size;
    setSize(size);
    gzipSize(debouncedSource).then(s => setGzip(s));
  }, [debouncedSource]);

  return (
    <Root>
      <MainMenu
        setSource={setSource}
        setBabelConfig={setBabelConfig}
        toggleCustomPlugin={toggleCustomPlugin}
        enableCustomPlugin={enableCustomPlugin}
      />

      <button
        onClick={async () => {
          const state = new REPLState(
            source,
            enableCustomPlugin ? customPlugin : "",
            babelConfig.map((config) => JSON.stringify(config))
          );
          const link = await state.Link();
          setShareLink(link);
          setShowShareLink(true);
        }}
      >
        Share
    </button>
      {showShareLink && (
        <input type="text" value={shareLink} readOnly></input>
      )}
      <Grid celled="internally">
        <Input size={size} gzip={gzip} source={source} setSource={setSource} />
        {enableCustomPlugin && (
          <CustomPlugin
            toggleCustomPlugin={toggleCustomPlugin}
            customPlugin={customPlugin}
            setCustomPlugin={setCustomPlugin}
          />
        )}
        <Output
          babelConfig={babelConfig}
          debouncedSource={debouncedSource}
          enableCustomPlugin={enableCustomPlugin}
          customPlugin={customPlugin}
          updateBabelConfig={updateBabelConfig}
          removeBabelConfig={removeBabelConfig}
        />
      </Grid>
    </Root>
  );
};
