import React, { useState, useCallback, useEffect } from "react";
// import * as Babel from "@babel/standalone";
import * as Babel from "@babel/core";
import styled, { css } from "styled-components";

import { Editor } from "./Editor";
import { processOptions } from "../standalone";
import { gzipSize } from "../gzip";

function CompiledOutput({
  source,
  customPlugin,
  config,
  onConfigChange,
  removeConfig,
}) {
  const [compiled, setCompiled] = useState(null);
  const [gzip, setGzip] = useState(null);

  useEffect(() => {
    try {
      const { code } = Babel.transform(
        source,
        processOptions(config, customPlugin)
      );
      gzipSize(code).then((s) => setGzip(s));
      setCompiled({
        code,
        size: new Blob([code], { type: "text/plain" }).size,
      });
    } catch (e) {
      setCompiled({
        code: e.message,
        error: true,
      });
    }
  }, [source, config, customPlugin]);

  return (
    <Wrapper>
      <Section>
        <Config
          value={
            config === Object(config)
              ? JSON.stringify(config, null, "\t")
              : config
          }
          onChange={onConfigChange}
          docName="config.json"
          config={{ mode: "application/json" }}
        />
        <Toggle>
          <button onClick={removeConfig}>x</button>
        </Toggle>
      </Section>
      <Section>
        <Code
          value={compiled?.code ?? ""}
          docName="result.js"
          config={{ readOnly: true, lineWrapping: true }}
          isError={compiled?.error ?? false}
        />
      </Section>
      <FileSize>
        {compiled?.size}b, {gzip}b
      </FileSize>
    </Wrapper>
  );
}

export const App = ({ defaultSource, defaultBabelConfig, defCustomPlugin }) => {
  const [source, setSource] = React.useState(defaultSource);
  const [enableCustomPlugin, toggleCustomPlugin] = React.useState(true);
  const [customPlugin, setCustomPlugin] = React.useState(defCustomPlugin);
  const [babelConfig, setBabelConfig] = useState(
    Array.isArray(defaultBabelConfig)
      ? defaultBabelConfig
      : [defaultBabelConfig]
  );
  const [size, setSize] = useState(null);
  const [gzip, setGzip] = useState(null);

  const updateBabelConfig = useCallback((config, index) => {
    setBabelConfig((configs) => {
      const newConfigs = [...configs];
      newConfigs[index] = config;

      return newConfigs;
    });
  }, []);

  const removeBabelConfig = useCallback((index) => {
    setBabelConfig((configs) => {
      return [...configs].splice(index, 1);
    });
  }, []);

  const addBabelConfig = () =>
    setBabelConfig((configs) => {
      return [...configs, configs[configs.length - 1]];
    });

  let results = babelConfig.map((config, index) => {
    return (
      <CompiledOutput
        source={source}
        customPlugin={enableCustomPlugin ? customPlugin : undefined}
        config={config}
        key={index}
        onConfigChange={(config) => updateBabelConfig(config, index)}
        removeConfig={() => removeBabelConfig(index)}
      />
    );
  });

  useEffect(() => {
    let size = new Blob([source], { type: "text/plain" }).size;
    setSize(size);
    gzipSize(source).then((s) => setGzip(s));
  }, [source]);

  return (
    <Root>
      <Section>
        <label>
          <input
            checked={enableCustomPlugin}
            onChange={() => toggleCustomPlugin(!enableCustomPlugin)}
            type="checkbox"
          />
          <span>Custom Plugin</span>
        </label>
        <Wrapper>
          <Code
            value={source}
            onChange={(val) => setSource(val)}
            docName="source.js"
          />
          <FileSize>
            {size}b, {gzip}b
          </FileSize>
        </Wrapper>
        <Wrapper
          style={{
            display: enableCustomPlugin ? "block" : "none",
          }}
        >
          <Code
            value={customPlugin}
            onChange={(val) => setCustomPlugin(val)}
            docName="plugin.js"
          />
          <Toggle>
            <button onClick={() => toggleCustomPlugin(false)}>x</button>
          </Toggle>
        </Wrapper>
        {results}
        <Wrapper>
          <button onClick={() => addBabelConfig()}>Add New Config</button>
        </Wrapper>
      </Section>
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  flex-direction: column;
  // height: 100%;
  height: 100vh;
  padding: 4px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;
`;

const Config = styled(Editor)`
  padding: 4px;
`;

const Code = styled(Editor)`
  padding: 4px;
  width: 100%;

  ${(p) =>
    p.isError &&
    css`
      background: rgba(234, 76, 137, 0.2);
    `};
`;

const FileSize = styled.div`
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  z-index: 2;
  border-radius: 0.5rem;
  padding: 0.2rem;
  background-color: rgba(255, 255, 255, 0.8);
  color: rgba(0, 0, 0, 0.9);
  border: 0;
`;

const Toggle = styled.div`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  z-index: 2;
`;
