import React from "react";
// import * as Babel from "@babel/standalone";
import * as Babel from "@babel/core";
import styled from "styled-components";

import dependencies from "../../package.json";
import { Editor } from "./Editor";
import { processOptions } from "../standalone";
import { compactFixture, serialize } from "../ast";

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
  defaultBabelConfig,
  index,
  setCompiled
}) {
  const [babelConfig, setBabelConfig] = React.useState(defaultBabelConfig);

  var transpiled, ast;
  try {
    const res = Babel.transform(
      source,
      processOptions(babelConfig, customPlugin)
    );
    transpiled = res.code;
    ast = compactFixture(JSON.stringify(res.ast, (k, v) => serialize(v), 2));
  } catch (e) {
    console.error(e);
    transpiled = e.message;
  }

  setCompiled(index, transpiled);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row"
      }}
    >
      <SubSection>
        <Editor
          value={babelConfig}
          onChange={val => setBabelConfig(val)}
          docName="config.json"
          config={{ mode: "application/json" }}
        />
      </SubSection>
      <Section>
        <Editor
          value={transpiled}
          docName="result.js"
          config={{ readOnly: true }}
        />
      </Section>
    </div>
  );
}

export const App = ({ defaultSource, defaultBabelConfig, defCustomPlugin }) => {
  const [source, setSource] = React.useState(defaultSource);
  const [customPlugin, setCustomPlugin] = React.useState(defCustomPlugin);
  const [transpiled, setTranspiled] = React.useState([]);

  let results = [0, 1].map(i => {
    let config = Array.isArray(defaultBabelConfig)
      ? defaultBabelConfig[i]
      : defaultBabelConfig;
    return (
      <CompiledOutput
        source={source}
        customPlugin={customPlugin}
        defaultBabelConfig={config}
        key={i}
        index={i}
        setCompiled={(i, newCompiled) => {
          transpiled[i] = newCompiled;
          setTranspiled(transpiled);
        }}
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
        // overflow: "hidden",
        padding: 8
      }}
    >
      <Section>
        <Editor
          value={source}
          onChange={val => setSource(val)}
          docName="source.js"
        />
        {/* <Editor
          value={customPlugin}
          onChange={val => setCustomPlugin(val)}
          docName="plugin.js"
        /> */}
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
