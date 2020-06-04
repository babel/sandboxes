import React, { useState, useCallback, useEffect } from "react";
// import * as Babel from "@babel/standalone";
import * as Babel from "@babel/core";
import { codeFrameColumns as codeFrame } from "@babel/code-frame";
import styled, { css } from "styled-components";

import { Editor } from "./Editor";
import { processOptions } from "../standalone";
import { gzipSize } from "../gzip";
import { ASTNodes } from "./AST";

window.babel = Babel;

function CompiledOutput({
  source,
  customPlugin,
  config,
  onConfigChange,
  removeConfig,
}) {
  const [compiled, setCompiled] = useState(null);
  const [gzip, setGzip] = useState(null);

  const debouncedSource = useDebounce(source, 125);
  const debouncedPlugin = useDebounce(customPlugin, 125);

  useEffect(() => {
    try {
      const { code } = Babel.transform(
        debouncedSource,
        processOptions(config, debouncedPlugin)
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
  }, [debouncedSource, config, debouncedPlugin]);

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
      <Toggle onClick={removeConfig} />
    </Wrapper>
  );
}

export function visitorTemplate(visitor) {
  return `return {
  ${visitor}(path) {
    match(path.node);
  }
}`;
}

function visitorMatches(source, visitorExpression) {
  const matchedNodes = new Set();
  function match(node) {
    if (matchedNodes.has(node)) return;
    matchedNodes.add(node);
    console.log(node);
  }
  try {
    Babel.transform(source, {
      babelrc: false,
      configFile: false,
      plugins: [
        function analyzePlugin(babel) {
          return {
            visitor: {
              Program(path) {
                // eslint-disable-next-line
                new Function(
                  "path",
                  "match",
                  `
                  path.traverse((() => {
                    ${visitorExpression}
                  })());
                `
                ).apply({}, [path, match]);
              },
            },
          };
        },
      ],
    });
  } catch (e) {}

  return matchedNodes;
}

function Matches({ source, visitor }) {
  let [matches, setMatches] = useState();
  const debouncedSource = useDebounce(source, 125);
  const debouncedVisitor = useDebounce(visitor, 125);

  useEffect(() => {
    setMatches(Array.from(visitorMatches(debouncedSource, debouncedVisitor)));
  }, [debouncedSource, debouncedVisitor]);

  if (!matches) {
    return <div>no matches</div>;
  }

  let frames = "";
  for (let { loc } of matches) {
    // why?
    // https://github.com/babel/babel/blob/a3f00896f710a95ed38f2f9fb3a6e048148b0b98/packages/babel-core/src/transformation/file/file.js#L249-L262
    loc = {
      start: {
        line: loc.start.line,
        column: loc.start.column + 1,
      },
      end: {
        line: loc.end.line,
        column: loc.end.column + 1,
      },
    };
    frames +=
      codeFrame(debouncedSource, loc, { linesAbove: 0, linesBelow: 0 }) +
      "\n////\n";
  }

  return (
    <Code config={{ readOnly: true }} value={frames} docName="matches.js" />
  );
}

export const App = ({
  defaultSource,
  defaultBabelConfig,
  defCustomPlugin,
  defaultVisitor,
}) => {
  const [source, setSource] = React.useState(defaultSource);
  const [visitor, setVisitor] = React.useState(defaultVisitor);
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
    setBabelConfig((configs) => configs.filter((c, i) => index !== i));
  }, []);

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
        <Actions>
          <label>
            <input
              checked={enableCustomPlugin}
              onChange={() => toggleCustomPlugin(!enableCustomPlugin)}
              type="checkbox"
            />
            <span>Custom Plugin</span>
          </label>
          <button
            onClick={() =>
              setBabelConfig((configs) => [
                ...configs,
                configs[configs.length - 1],
              ])
            }
          >
            Add New Config
          </button>
          <button
            onClick={() => {
              setSource("const hello = 'world';");
            }}
          >
            Use Example
          </button>
        </Actions>

        <Wrapper>
          <Code
            value={visitor}
            onChange={(val) => setVisitor(val)}
            docName="visitor.js"
          />
          <ASTNodes
            source={source}
            setVisitorNode={(node) => {
              setVisitor(visitorTemplate(node));
            }}
          />
        </Wrapper>

        <Wrapper>
          <Code
            value={source}
            onChange={(val) => setSource(val)}
            docName="source.js"
          />
          <FileSize>
            {size}b, {gzip}b
          </FileSize>
          {/* <AST source={source}></AST> */}
          <Matches source={source} visitor={visitor} />
        </Wrapper>

        {enableCustomPlugin && (
          <Wrapper>
            <Code
              value={customPlugin}
              onChange={(val) => setCustomPlugin(val)}
              docName="plugin.js"
            />
            <Toggle onClick={() => toggleCustomPlugin(false)} />
          </Wrapper>
        )}
        {results}
      </Section>
    </Root>
  );
};

// UTILS

function Toggle(props) {
  return <ToggleRoot {...props}>x</ToggleRoot>;
}

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);

  return debouncedValue;
}

// STYLES

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
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0.25rem 1rem 0.75rem;
  position: relative;

  & + & {
    margin-top: 1px;
  }
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
  background-color: rgba(255, 255, 255, 0.1);
  border: 0;
  border-radius: 0.5rem;
  bottom: 1rem;
  color: #888;
  font-size: 0.75rem;
  padding: 0.2rem;
  position: absolute;
  right: 2rem;
  z-index: 2;
`;

const ToggleRoot = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 20px;
  justify-content: center;
  padding: 0.25rem;
  position: absolute;
  right: 1px;
  transition: color 0.25s ease-out;
  top: -1px;
  width: 20px;
  z-index: 2;

  &:hover {
    color: red;
  }
`;

const Actions = styled(Wrapper)`
  border-bottom: 1px solid rgba(36, 40, 42, 1);
  padding: 1rem;

  button {
    margin-left: 1rem;
  }
`;
