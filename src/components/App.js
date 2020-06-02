import React, { useState, useCallback, useEffect } from "react";
// import * as Babel from "@babel/standalone";
import * as Babel from "@babel/core";
import styled, { css } from "styled-components";

import { Editor } from "./Editor";
import { processOptions } from "../standalone";
import { gzipSize } from "../gzip";

function CompiledOutput({ source, customPlugin, config, onConfigChange }) {
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

  let results = babelConfig.map((config, index) => {
    return (
      <CompiledOutput
        source={source}
        customPlugin={customPlugin}
        config={config}
        key={index}
        onConfigChange={(config) => updateBabelConfig(config, index)}
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
        <Code
          value={customPlugin}
          onChange={(val) => setCustomPlugin(val)}
          docName="plugin.js"
        />
        {results}
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
  flex: 2;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;
`;

const Config = styled(Editor)`
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.75rem;
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
