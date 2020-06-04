import React, { useState, useEffect } from "react";
import traverse from "@babel/traverse";

export function CountASTNodes({ ast, setVisitorNode }) {
  const [nodes, setNodes] = useState({});

  useEffect(() => {
    let obj = {};
    try {
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
  }, [ast]);

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
