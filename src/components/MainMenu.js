import React from "react";
import { Dropdown, Icon, Menu, Button, Label } from "semantic-ui-react";
import REPLState from "../state/REPLState.js";
import { ShareModal } from "./ShareModal";
import { ForkModal } from "./ForkModal";

export function MainMenu({
  source,
  setSource,
  jsonConfig,
  setBabelConfig,
  customPlugin,
  toggleCustomPlugin,
  enableCustomPlugin,
  id,
  setId,
  toggleForksVisible,
  forks,
  setForks,
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
          <Dropdown.Item
            onClick={async () => {
              const state = new REPLState(
                source,
                enableCustomPlugin ? customPlugin : "",
                jsonConfig.map(config => JSON.stringify(config))
              );
              // Check if the id exists
              if (!id) {
                // If it doesn't, then this config has not been saved before
                const blob = await state.New();
                setId(blob.id);
                // TODO: Replace title with name of config
                window.history.replaceState(
                  null,
                  "Babel Test Playground",
                  `/share/${blob.id}`
                );
              } else {
                // If it does, update the blob
                state.Save(id);
              }
            }}
          >
            Save...
          </Dropdown.Item>
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
                  const link = await state.Link(id, setId);
                  setShareLink(link);
                  const linkId = link.split("/")[4];
                  // TODO: Replace title with name of config
                  window.history.replaceState(
                    null,
                    "Babel Test Playground",
                    `/share/${linkId}`
                  );
                }}
              >
                Share
              </Dropdown.Item>
            }
          />
        </Dropdown.Menu>
      </Dropdown>

      {id && (
        <Menu.Item>
          <Button as="div" labelPosition="right">
            <ForkModal
              onFork={async () => {
                const state = new REPLState(
                  source,
                  enableCustomPlugin ? customPlugin : "",
                  jsonConfig.map(config => JSON.stringify(config))
                );
                const fork = await state.Fork(id);
                setId(fork.id);
                setForks([]);
                window.history.replaceState(
                  null,
                  "Babel Test Playground",
                  `/share/${fork.id}`
                );
              }}
              trigger={
                <Button icon>
                  <Icon name="fork" />
                </Button>
              }
            />

            <Label
              as="a"
              basic
              onClick={async () => {
                toggleForksVisible();
              }}
            >
              {forks?.length ?? 0}
            </Label>
          </Button>
        </Menu.Item>
      )}
    </Menu>
  );
}
