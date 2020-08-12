import React from "react";
import { Dropdown, Icon, Menu } from "semantic-ui-react";
import REPLState from "../state/REPLState.js";
import { ShareModal } from "./ShareModal";

export function MainMenu({
  source,
  setSource,
  jsonConfig,
  setBabelConfig,
  customPlugin,
  toggleCustomPlugin,
  enableCustomPlugin,
  showAST,
  setShowAST,
}) {
  const [shareLink, setShareLink] = React.useState("");
  return (
    <Menu attached="top" inverted>
      <Menu.Item>
        <img
          src="https://d33wubrfki0l68.cloudfront.net/7a197cfe44548cc1a3f581152af70a3051e11671/78df8/img/babel.svg"
          alt="Babel Logo"
        />
      </Menu.Item>
      <Dropdown item icon="wrench" simple>
        <Dropdown.Menu>
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
          <Dropdown.Item
            onClick={() => setShowAST(showAST => !showAST)}
            disabled={showAST}
          >
            Add AST Explorer
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Save...</Dropdown.Item>
          <ShareModal
            shareLink={shareLink}
            trigger={
              <Dropdown.Item
                onClick={async () => {
                  const state = new REPLState(
                    source,
                    enableCustomPlugin ? customPlugin : "",
                    jsonConfig.map(config => JSON.stringify(config))
                  );
                  const link = await state.Link();
                  setShareLink(link);
                }}
              >
                Share
              </Dropdown.Item>
            }
          />
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
}
