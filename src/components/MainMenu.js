import React from "react";
import { Dropdown, Icon, Menu, Button, Label } from "semantic-ui-react";
import REPLState from "../state/REPLState.js";
import { ShareModal } from "./ShareModal";
import { ForkModal } from "./ForkModal";
import { loadPlugin, loadPreset } from "../plugins/addPlugin.js";
import logo from '../babel.png';

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
  configsCount,
}) {
  const [shareLink, setShareLink] = React.useState("");
  return (
    <Menu attached="top" inverted>
      <Menu.Item>
        <img
          src={logo}
          alt="Babel Logo"
        />
      </Menu.Item>
      <Dropdown item icon="wrench" simple>
        <Dropdown.Menu>
          <Dropdown.Item
            disabled={configsCount >= 5}
            onClick={() =>
              setBabelConfig(configs => [
                ...configs,
                {
                  plugins: [],
                  presets: [],
                },
              ])
            }
          >
            Add Config
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setSource("const hello = 'world';");
            }}
          >
            Load Example
          </Dropdown.Item>
          <Dropdown.Divider />
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
                    `#/share/${linkId}`
                  );
                }}
              >
                Share
              </Dropdown.Item>
            }
          />
        </Dropdown.Menu>
      </Dropdown>

      <Menu.Item
        onClick={async () => {
          const state = new REPLState(
            source,
            enableCustomPlugin ? customPlugin : "",
            jsonConfig.map(config => JSON.stringify(config))
          );
          state.PluginList().forEach(plugin => loadPlugin(plugin));
          state.PresetList().forEach(preset => loadPreset(preset));

          // Check if the id exists
          if (!id) {
            // If it doesn't, then this config has not been saved before
            const blob = await state.New();
            setId(blob.id);
            // TODO: Replace title with name of config
            window.history.replaceState(
              null,
              "Babel Test Playground",
              `#/share/${blob.id}`
            );
          } else {
            // If it does, update the blob
            state.Save(id);
          }
        }}
      >

        <Icon name="save" /> Save
      </Menu.Item>
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
                  `#/share/${fork.id}`
                );
              }}
              trigger={
                <Button icon>
                  <Icon name="fork" /> Forks
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
