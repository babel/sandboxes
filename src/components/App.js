import React, { useState, useCallback, useEffect } from "react";
// import * as Babel from "@babel/standalone";
import * as Babel from "@babel/core";
import styled, { } from "styled-components";

import { Editor } from "./Editor";
import { processOptions } from "../standalone";
import { gzipSize } from "../gzip";
import UglyPopup from "./Popup";

import { Grid, Dropdown, Icon, Menu, Segment, Divider } from 'semantic-ui-react'


window.babel = Babel;

function CompiledOutput({
  source,
  customPlugin,
  config,
  onConfigChange,
  removeConfig,
}) {
  const [compiled, setCompiled] = useState(null);
  const [gzip, setGzip] = useState(null);
  const debouncedPlugin = useDebounce(customPlugin, 125);

  useEffect(() => {
    try {
      const { code } = Babel.transform(
        source,
        processOptions(config, debouncedPlugin)
      );
      gzipSize(code).then((s) => setGzip(s));
      setCompiled({
        code,
        size: new Blob([code], { type: "text/plain" }).size,
      });
    } catch (e) {
      setCompiled({
        code: e.message,
        error: true,
      });
    }
  }, [source, config, debouncedPlugin]);

  return (
    <Grid.Row>
      <Grid.Column width={16}>

        <Menu attached='top' tabular inverted>
          <Menu.Item>
            plugin.js
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item >
              {compiled?.size}b, {gzip}b
            </Menu.Item>
            <Menu.Item onClick={removeConfig} >
              <Icon name='close' size='' />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Segment inverted attached='bottom'>
          <Grid columns={2} relaxed='very'>
            <Grid.Column>
              <Wrapper>
                <Config
                  value={
                    config === Object(config)
                      ? JSON.stringify(config, null, "\t")
                      : config
                  }
                  onChange={onConfigChange}
                  docName="config.json"
                  config={{ mode: "application/json" }}
                />
              </Wrapper>
            </Grid.Column>
            <Grid.Column>
              <Code
                value={compiled?.code ?? ""}
                docName="result.js"
                config={{ readOnly: true, lineWrapping: true }}
                isError={compiled?.error ?? false}
              />
            </Grid.Column>
          </Grid>
          <Divider vertical>
            <Icon name='arrow right' />
          </Divider>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  );
}

export const App = ({ defaultSource, defaultBabelConfig, defCustomPlugin }) => {
  const [source, setSource] = React.useState(defaultSource);
  const [enableCustomPlugin, toggleCustomPlugin] = React.useState(true);
  const [customPlugin, setCustomPlugin] = React.useState(defCustomPlugin);
  const [babelConfig, setBabelConfig] = useState(
    Array.isArray(defaultBabelConfig)
      ? defaultBabelConfig
      : [defaultBabelConfig]
  );
  const [size, setSize] = useState(null);
  const [gzip, setGzip] = useState(null);
  const debouncedSource = useDebounce(source, 125);

  const updateBabelConfig = useCallback((config, index) => {
    setBabelConfig((configs) => {
      const newConfigs = [...configs];
      newConfigs[index] = config;

      return newConfigs;
    });
  }, []);

  const removeBabelConfig = useCallback((index) => {
    setBabelConfig((configs) => configs.filter((c, i) => index !== i));
  }, []);

  let results = babelConfig.map((config, index) => {
    return (
      <CompiledOutput
        source={debouncedSource}
        customPlugin={enableCustomPlugin ? customPlugin : undefined}
        config={config}
        key={index}
        onConfigChange={(config) => updateBabelConfig(config, index)}
        removeConfig={() => removeBabelConfig(index)}
      />
    );
  });

  useEffect(() => {
    let size = new Blob([debouncedSource], { type: "text/plain" }).size;
    setSize(size);
    gzipSize(debouncedSource).then((s) => setGzip(s));
  }, [debouncedSource]);

  return (
    <Root>
      <Menu attached='top' inverted>
        <Menu.Item>
          <img src="https://d33wubrfki0l68.cloudfront.net/7a197cfe44548cc1a3f581152af70a3051e11671/78df8/img/babel.svg" />
        </Menu.Item>
        <Dropdown item icon='wrench' simple>
          <Dropdown.Menu inverted>
            <Dropdown.Item onClick={() => {
              setSource("const hello = 'world';");
            }}>Load Example</Dropdown.Item>
            <Dropdown.Item
              onClick={() =>
                setBabelConfig((configs) => [
                  ...configs,
                  configs[configs.length - 1],
                ])
              }>Add Config</Dropdown.Item>
            <Dropdown.Item>

              <Icon name='dropdown' />
              <span className='text'>Add Plugin</span>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => toggleCustomPlugin(!enableCustomPlugin)}>Custom</Dropdown.Item>
                <Dropdown.Item>Import</Dropdown.Item>
              </Dropdown.Menu>

            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Save...</Dropdown.Item>
            <Dropdown.Item>Share</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>

      <Grid celled='internally'>
        <Grid.Row>

          <Grid.Column width={16}>
            <Menu attached='top' tabular inverted>
              <Menu.Item>
                input.js
              </Menu.Item>
              <Menu.Menu position='right'>
                <Menu.Item>
                  {size}b, {gzip}b
                  </Menu.Item>
              </Menu.Menu>
            </Menu>
            <Segment inverted attached='bottom'>
              <Code
                value={source}
                onChange={(val) => setSource(val)}
                docName="source.js"
              />
            </Segment>
          </Grid.Column>
        </Grid.Row>
        {enableCustomPlugin && (
          <Grid.Row>
            <Grid.Column width={16}>

              <Menu attached='top' tabular inverted>
                <Menu.Item>
                  plugin.js
                </Menu.Item>
                <Menu.Menu position='right'>
                  <Menu.Item onClick={() => toggleCustomPlugin(false)}>
                    <Icon name='close' />
                  </Menu.Item>
                </Menu.Menu>
              </Menu>
              <Wrapper>
                <Code
                  value={customPlugin}
                  onChange={(val) => setCustomPlugin(val)}
                  docName="plugin.js"
                />
              </Wrapper>
            </Grid.Column>
          </Grid.Row>
        )}
        {results}
      </Grid>

    </Root >
  );
};

// UTILS

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);

  return debouncedValue;
}

// STYLES
const Root = styled.div`
`;

const Wrapper = styled.div`
`;

const Config = styled(Editor)`
  padding: 4px;
`;

const Code = styled(Editor)`
`;
