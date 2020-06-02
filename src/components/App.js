import React, { useState, useCallback, useEffect } from "react";
// import * as Babel from "@babel/standalone";
import * as Babel from "@babel/core";
import styled, { css } from "styled-components";

import { Editor } from "./Editor";
import { processOptions } from "../standalone";

function CompiledOutput({ source, customPlugin, config, onConfigChange }) {
  const [compiled, setCompiled] = useState(null);

  useEffect(() => {
    try {
      const { code } = Babel.transform(
        source,
        processOptions(config, customPlugin)
      );
      setCompiled({
        code,
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

  return (
    <Root>
      <Section>
        <Code
          value={source}
          onChange={(val) => setSource(val)}
          docName="source.js"
        />
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
  ${(p) =>
    p.isError &&
    css`
      background: rgba(234, 76, 137, 0.2);
    `};
`;
