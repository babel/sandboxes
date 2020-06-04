import React, { useState, useEffect } from "react";
import * as Babel from "@babel/core";
import traverse from "@babel/traverse";

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

export function ASTNodes({ source, setVisitorNode }) {
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
    } catch (e) {}
  }, [debouncedSource]);

  return (
    <div style={{ padding: "0 10px" }}>
      {Object.entries(nodes).map(([node, count]) => {
        return (
          <div key={node}>
            <button onClick={() => setVisitorNode(node)}>{node}:</button>
            <span>{` ${count}`}</span>
          </div>
        );
      })}
    </div>
  );
}
