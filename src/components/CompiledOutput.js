import React, { useEffect, useState, Fragment } from "react";
import * as Babel from "@babel/standalone";
import { processOptions } from "../standalone";
import { gzipSize } from "../gzip";
import { Wrapper, Code, Config } from "./styles";
import { useDebounce } from "../utils/useDebounce";
import Transition from "./Transitions";
import { TimeTravel } from "./TimeTravel";

import {
  convertToBabelConfig,
  //   importDefaultPlugins,
  //   registerDefaultPlugins
} from "./App";

import { plugins, presets } from "../plugins-list";

import {
  Grid,
  Icon,
  Menu,
  Segment,
  Divider,
  Checkbox,
} from "semantic-ui-react";

export function CompiledOutput({
  source,
  customPlugin,
  config,
  onConfigChange,
  removeConfig,
}) {
  const [compiled, setCompiled] = useState(null);
  const [gzip, setGzip] = useState(null);
  const debouncedPlugin = useDebounce(customPlugin, 125);

  const [babelConfig, setBabelConfig] = useState(convertToBabelConfig(config));

  const [timeTravel, setTimeTravel] = useState(null);

  const [timeTravelCode, setTimeTravelCode] = useState();

  useEffect(() => {
    try {
      let options = processOptions(babelConfig, debouncedPlugin);

      const transitions = new Transition();
      options.wrapPluginVisitorMethod = transitions.wrapPluginVisitorMethod;
      setTimeTravel(transitions.getValue());

      const { code } = Babel.transform(source, options);

      gzipSize(code).then(s => setGzip(s));

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
  }, [source, babelConfig, debouncedPlugin]);

  function displayAvailablePlugins() {
    return Object.keys(plugins).map(pluginName => {
      return (
        <Segment>
          <Checkbox
            toggle
            name={pluginName}
            type="checkbox"
            onChange={handlePluginChange}
            label={pluginName}
          />
        </Segment>
      );
    });
  }

  function displayAvailablePresets() {
    return Object.keys(presets).map(presetName => {
      return (
        <Segment>
          <Checkbox
            toggle
            name={presetName}
            type="checkbox"
            onChange={handlePresetChange}
            label={presetName}
          />
        </Segment>
      );
    });
  }

  function handlePluginChange(reactEvent, checkbox) {
    if (checkbox.checked) {
      config.plugins.push(plugins[checkbox.name]);
      onConfigChange(config);
      setBabelConfig(convertToBabelConfig(config));
    } else {
      config.plugins = config.plugins.filter(plugin => {
        return plugin.name !== checkbox.name;
      });
      onConfigChange(config);
      setBabelConfig(convertToBabelConfig(config));
    }
    console.log(config);
    console.log(babelConfig);
  }

  function handlePresetChange(reactEvent, checkbox) {
    if (checkbox.checked) {
      config.presets.push(presets[checkbox.name]);
      onConfigChange(config);
      setBabelConfig(convertToBabelConfig(config));
    } else {
      config.presets = config.presets.filter(preset => {
        return preset.name !== checkbox.name;
      });
      onConfigChange(config);
      setBabelConfig(convertToBabelConfig(config));
    }
  }

  return (
    <Fragment>
      <Grid.Row>
        <Grid.Column width={16}>
          <Menu attached="top" tabular inverted>
            <Menu.Item>input.json</Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                {compiled?.size}b, {gzip}b
              </Menu.Item>
              <Menu.Item onClick={removeConfig}>
                <Icon name="close" />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
          <Segment inverted attached="bottom">
            <Grid columns={2} relaxed="very">
              <Grid.Column>
                <Segment.Group piled>{displayAvailablePlugins()}</Segment.Group>
                <Segment.Group piled>{displayAvailablePresets()}</Segment.Group>
                <Wrapper>
                  <Config
                    value={
                      babelConfig === Object(babelConfig)
                        ? JSON.stringify(babelConfig, null, "\t")
                        : babelConfig
                    }
                    onChange={onConfigChange}
                    docName="config.json"
                    config={{ mode: "application/json" }}
                  />
                </Wrapper>
              </Grid.Column>
              <Grid.Column>
                <Code
                  value={
                    timeTravelCode !== undefined
                      ? timeTravelCode
                      : compiled?.code
                  }
                  docName="result.js"
                  config={{ readOnly: true, lineWrapping: true }}
                  isError={compiled?.error ?? false}
                />
              </Grid.Column>
            </Grid>
            <Divider vertical>
              <Icon name="arrow right" />
            </Divider>
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <TimeTravel
        timeTravel={timeTravel}
        setTimeTravel={setTimeTravel}
        removeConfig={removeConfig}
        source={compiled?.code ?? ""}
        setTimeTravelCode={setTimeTravelCode}
      />
    </Fragment>
  );
}
