import 'codemirror/mode/javascript/javascript';
import React from "react";
import styled from "styled-components";
import { Controlled as CodeMirror } from 'react-codemirror2';

const StyledEditor = styled(CodeMirror)`
  position: relative;
  height: 100%;

  .CodeMirror {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    margin: 4px;
    height: inherit;
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
        theme: 'material',
        ...options.config,
      }}
      style={style}
      value={options.value} />
  );
}
