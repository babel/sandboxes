import "codemirror/mode/javascript/javascript";
import React from "react";
import styled from "styled-components";
import { Controlled as CodeMirror } from "react-codemirror2";

const StyledEditor = styled(CodeMirror)`
  .CodeMirror {
    background-color: #141618;
    height: inherit;
    padding: 10px;
  }

  .CodeMirror-activeline-background {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .CodeMirror-simplescroll-vertical {
    height: 0;
  }
`;

export function Editor({ className, onChange, style, ...options }) {
  return (
    <StyledEditor
      className={className}
      onBeforeChange={(editor, data, value) => {
        onChange(value);
      }}
      options={{
        scrollbarStyle: null,
        theme: "material",
        ...options.config,
      }}
      style={style}
      value={options.value}
    />
  );
}
