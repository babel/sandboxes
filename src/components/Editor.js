import React from "react";
import styled from "styled-components";
import { useCodeMirror } from "use-codemirror";

const StyledEditor = styled.div`
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

export function Editor({ className, style, ...options }) {
  let codeMirror = useCodeMirror({
    ...options,
    config: { theme: "material", ...options.config }
  });

  if (codeMirror.editor && options.config && options.config.readOnly) {
    codeMirror.editor.setValue(options.value);
  }

  return (
    <StyledEditor className={className} style={style}>
      <pre ref={codeMirror.ref} className={codeMirror.config.theme}>
        {options.value}
      </pre>
    </StyledEditor>
  );
}
