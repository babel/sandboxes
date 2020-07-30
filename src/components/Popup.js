import React from "react";
import {lookUpNodeType} from "../md-parser";
// get the object array, generate a popup window appending 
// several 'window' elements together

export const UglyPopup = (nodeDefs) => {
  return (
    <>
      {nodeDefs.map(nodeDef => (
        <div className="nodeDef" key={nodeDef.content}>
          <h1>{nodeDef.content}</h1>
          <p>{nodeDef.chunk}</p>
        </div>
      ))}
    </>
  )
}