import React, { forwardRef } from "react";
import { Menu } from "semantic-ui-react";
import { Code } from "./styles";

export const Input = forwardRef((props, ref) => {
  const { size, gzip, source, setSource, setCursor } = props;
  return (
    <>
      <Menu attached tabular inverted>
        <Menu.Item>Input.js</Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            {size}b, {gzip}b
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <Code
        ref={ref}
        value={source}
        onChange={val => setSource(val)}
        onCursor={cursor => setCursor(cursor)}
        docName="source.js"
      />
    </>
  );
});
