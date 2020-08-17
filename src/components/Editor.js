import "codemirror/mode/javascript/javascript";
import React, { forwardRef } from "react";
import styled from "styled-components";
import { Controlled as CodeMirror } from "react-codemirror2";

const StyledEditor = styled(CodeMirror)`
  .CodeMirror {
    background-color: #2B2B2B;
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

export const Editor = forwardRef((props, ref) => {
  const { className, onChange, onCursor, style, ...options } = props;
  return (
    <StyledEditor
      ref={ref}
      className={className}
      onBeforeChange={(editor, data, value) => {
        onChange(value);
      }}
      onCursorActivity={e => {
        const { line, ch } = e.getCursor();
        onCursor && onCursor({ line, ch });
      }}
      options={{
        scrollbarStyle: null,
        theme: "darcula",
        ...options.config,
      }}
      style={style}
      value={options.value}
    />
  );
});
