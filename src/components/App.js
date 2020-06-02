import React, { useState, useCallback, useEffect } from "react";
// import * as Babel from "@babel/standalone";
import * as Babel from "@babel/core";
import styled from "styled-components";

import { Editor } from "./Editor";
import { processOptions } from "../standalone";

const Section = styled.section`
  display: flex;
  flex-direction: column;

  margin-bottom: 1rem;
  height: 100%;

  flex: 2;
`;

const SubSection = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.75);
  height: 100%;
  flex: 1;
`;

function CompiledOutput({
  source,
  customPlugin,
  config,
  onConfigChange
}) {
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
        error: true
      });
    }
  }, [source, config, customPlugin]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row"
      }}
    >
      <SubSection>
        <Editor
          value={config === Object(config) ? JSON.stringify(config, null, '\t') : config}
          onChange={onConfigChange}
          docName="config.json"
          config={{ mode: "application/json" }}
        />
      </SubSection>
      <Section>
        <Editor
          value={compiled?.code ?? ""}
          docName="result.js"
          config={{ readOnly: true, lineWrapping: true }}
          isError={compiled?.error ?? false}
        />
      </Section>
    </div>
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
    setBabelConfig(configs => {
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
        onConfigChange={config => updateBabelConfig(config, index)}
      />
    );
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        // height: "100vh",
        padding: 8
      }}
    >
      <Section>
        <Editor
          value={source}
          onChange={val => setSource(val)}
          docName="source.js"
        />
        <Editor
          value={customPlugin}
          onChange={val => setCustomPlugin(val)}
          docName="plugin.js"
        />
      </Section>
      <div
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        {results}
      </div>
    </div>
  );
};
