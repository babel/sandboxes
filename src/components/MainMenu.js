import React from "react";
import { Dropdown, Icon, Menu } from "semantic-ui-react";

export function MainMenu({
  setSource,
  setBabelConfig,
  toggleCustomPlugin,
  enableCustomPlugin,
}) {
  return (
    <Menu attached="top" inverted>
      <Menu.Item>
        <img src="https://d33wubrfki0l68.cloudfront.net/7a197cfe44548cc1a3f581152af70a3051e11671/78df8/img/babel.svg" />
      </Menu.Item>
      <Dropdown item icon="wrench" simple>
        <Dropdown.Menu inverted>
          <Dropdown.Item
            onClick={() => {
              setSource("const hello = 'world';");
            }}
          >
            Load Example
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() =>
              setBabelConfig(configs => [
                ...configs,
                configs[configs.length - 1],
              ])
            }
          >
            Add Config
          </Dropdown.Item>
          <Dropdown.Item>
            <Icon name="dropdown" />
            <span className="text">Add Plugin</span>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => toggleCustomPlugin(!enableCustomPlugin)}
              >
                Custom
              </Dropdown.Item>
              <Dropdown.Item>Import</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Save...</Dropdown.Item>
          <Dropdown.Item>Share</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
}
