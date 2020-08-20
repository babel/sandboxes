import React from "react";
import { Grid, Menu, Icon } from "semantic-ui-react";
import { Wrapper, Code } from "./styles";

export function CustomPlugin({
  toggleCustomPlugin,
  customPlugin,
  setCustomPlugin,
}) {
  return (
    <Grid.Row>
      <Grid.Column width={16}>
        <Menu attached="top" tabular inverted>
          <Menu.Item>Plugin.js</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item onClick={() => toggleCustomPlugin(false)}>
              <Icon name="close" />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Wrapper>
          <Code
            value={customPlugin}
            onChange={val => setCustomPlugin(val)}
            docName="Plugin.js"
          />
        </Wrapper>
      </Grid.Column>
    </Grid.Row>
  );
}
