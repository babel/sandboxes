/*
Usage:
<UglyPopup def="SwitchCase"></UglyPopup>
*/

import React from "react";
import spec from "../spec.json";
import ReactMarkdown from "react-markdown";

/**
 * Find the node and its parents from spec.json
 *
 * @returns Array with the node and its parents
 * @param {string} nodeType Babel AST node type
 */

export const lookUpNodeType = nodeType => {
  const output = [];
  const currentNode = spec[nodeType];

  if (currentNode.parents.length !== 0)
    currentNode.parents.forEach(nodeType => {
      output.push(spec[nodeType]);
    });

  output.push(currentNode);
  return output;
};

// get the object array, generate a popup window appending
// several 'window' elements together

export default class UglyPopup extends React.Component {
  constructor() {
    super();
  }

  render() {
    let nodeDefs = lookUpNodeType(this.props.def);

    return (
      <>
        {nodeDefs.map(nodeDef => (
          <div className="nodeDef" key={nodeDef.content}>
            <ReactMarkdown source={nodeDef.chunk} />
          </div>
        ))}
      </>
    );
  }
}
