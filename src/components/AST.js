import React, { useState, useEffect } from "react";
import * as Babel from "@babel/core";
import traverse from "@babel/traverse";
import styled, { css } from "styled-components";

import { Editor } from "./Editor";

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

function ASTNodes({ source }) {
  const [nodes, setNodes] = useState({});
  const debouncedSource = useDebounce(source, 125);

  useEffect(() => {
    try {
      let ast = Babel.parse(debouncedSource);
      let obj = {};
      traverse(ast, {
        enter(path) {
          let type = path.node.type;
          if (!obj[type]) {
            obj[type] = 1;
          } else {
            obj[type]++;
          }
        },
      });
      setNodes(obj);
    } catch (e) {
      setNodes({
        code: e.message,
        error: true,
      });
    }
  }, [debouncedSource]);

  return (
    <Code
      value={nodes?.error ? nodes.code : JSON.stringify(nodes, null, "\t")}
      docName="config.json"
      config={{ mode: "application/json" }}
      isError={nodes?.error ?? false}
    />
  );
}

export default function compileModule(code, globals = {}) {
  let exports = {};
  let module = { exports };
  let globalNames = Object.keys(globals);
  let keys = ["module", "exports", ...globalNames];
  let values = [module, exports, ...globalNames.map((key) => globals[key])];
  // eslint-disable-next-line no-new-func
  new Function(keys.join(), code).apply(exports, values);
  return module.exports;
}

export const App = ({ defaultSource, defaultBabelConfig, defCustomPlugin }) => {
  const [source, setSource] = React.useState(defaultSource);
  const [matchExp, setMatchExp] = React.useState("");
  const debouncedSource = useDebounce(source, 125);

  useEffect(() => {
    try {
      let res = compileModule(matchExp, {
        template: Babel.template,
        t: Babel.types,
      });
      console.log(res);
    } catch (e) {
      console.log(e.message);
    }
  }, [matchExp]);

  return (
    <Root>
      <Section>
        <Actions>
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
            value={matchExp}
            onChange={(val) => setMatchExp(val)}
            docName="match.js"
          />
        </Wrapper>
        <Wrapper>
          <Code
            value={source}
            onChange={(val) => setSource(val)}
            docName="source.js"
          />
          {/* <ASTNodes source={source} /> */}
        </Wrapper>
      </Section>
    </Root>
  );
};

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

const Code = styled(Editor)`
  padding: 4px;
  width: 100%;

  ${(p) =>
    p.isError &&
    css`
      background: rgba(234, 76, 137, 0.2);
    `};
`;

const Actions = styled(Wrapper)`
  border-bottom: 1px solid rgba(36, 40, 42, 1);
  padding: 1rem;

  button {
    margin-left: 1rem;
  }
`;
