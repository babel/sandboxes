import React, { forwardRef } from "react";
import { Grid, Menu, Segment } from "semantic-ui-react";
import { Code } from "./styles";

export const Input = forwardRef((props, ref) => {
  const { size, gzip, source, setSource, setCursor } = props;
  return (
    <Grid.Row>
      <Menu attached="top" tabular inverted>
        <Menu.Item>input.js</Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            {size}b, {gzip}b
            </Menu.Item>
        </Menu.Menu>
      </Menu>
      <Segment inverted attached="bottom">
        <Code
          ref={ref}
          value={source}
          onChange={val => setSource(val)}
          onCursor={cursor => setCursor(cursor)}
          docName="source.js"
        />
      </Segment>
    </Grid.Row>
  );
});
