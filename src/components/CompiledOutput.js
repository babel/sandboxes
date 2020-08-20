import React, { useCallback, useEffect, useMemo, useState } from "react";
import * as Babel from "@babel/standalone";
import { processOptions } from "../standalone";
import { gzipSize } from "../gzip";
import { Wrapper, Code, Config } from "./styles";
import { useDebounce } from "../utils/useDebounce";
import Transition from "./Transitions";

import { plugins, presets } from "../plugins";
import VizOutput from "./AST/Viz";

import SplitPane from 'react-split-pane';

import {
  Icon,
  Menu,
  Segment,
  Checkbox,
  Dropdown,
  Button,
} from "semantic-ui-react";

export function CompiledOutput({
  source,
  customPlugin,
  config,
  onConfigChange,
  removeConfig,
  cursor,
  setCursorAST,
}) {
  const [compiled, setCompiled] = useState(null);
  const [stringConfig, setStringConfig] = useState(
    JSON.stringify(config, null, "\t")
  );
  const [gzip, setGzip] = useState(null);
  const debouncedPlugin = useDebounce(customPlugin, 125);

  const [timeTravel, setTimeTravel] = useState(null);
  const [timeTravelCode, setTimeTravelCode] = useState();
  const [timeTravelIndex, setTimeTravelIndex] = useState(1);
  const [displayAtIndex, setDisplayAtIndex] = useState("Time Travel");

  const [showAST, setShowAST] = useState(false);
  const [showJSON, setShowJSON] = useState(false);

  let saveConfig = useCallback(() => {

    let options;
    let code = "";

    try {
      options = processOptions(config, debouncedPlugin);
      const transitions = new Transition();
      options.wrapPluginVisitorMethod = transitions.wrapPluginVisitorMethod;

      setTimeTravel(transitions.getValue());

      code = Babel.transform(source, options).code;

      gzipSize(code).then(s => setGzip(s));

    } catch (error) {
      code = error.message;
    }

    setCompiled({
      code,
      size: new Blob([code], { type: "text/plain" }).size,
    });

  }, [config, debouncedPlugin, source]);

  useEffect(saveConfig, [source, config, debouncedPlugin]);

  useEffect(() => {
    setStringConfig(JSON.stringify(config, null, "\t"));
  }, [config]);

  useEffect(() => {
    try {
      let sconfig = JSON.parse(stringConfig);
      saveConfig(sconfig);
    } catch (e) {
      setCompiled({
        code: e.message,
        error: true,
      });
    }
  }, [stringConfig, saveConfig]);

  const configOpts = config.plugins
    .map(arr =>
      arr[0]
        .replace("@babel/plugin-proposal-", "")
        .replace("babel-plugin-", "")
        // kebab to camel
        .replace(/-./g, x => x.toUpperCase()[1])
    )
    .concat(config.presets.map(arr => arr[0]));

  const pluginsAST = useMemo(() => {
    if (timeTravel === null) return configOpts;
    if (timeTravelIndex === 1) return configOpts;
    if (timeTravelIndex === timeTravel.length) return configOpts;
    return timeTravel.slice(0, timeTravelIndex).map(t => t.pluginAlias);
  }, [timeTravel, timeTravelIndex, configOpts]);

  function displayAvailablePlugins() {
    return Object.keys(plugins).map(pluginName => {
      return (
        <Segment key={pluginName}>
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
        <Segment key={presetName}>
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
    config.plugins = config.plugins || [];
    if (checkbox.checked) {
      config.plugins.push([
        plugins[checkbox.name].name,
        plugins[checkbox.name].defaultConfig,
      ]);
      onConfigChange(config);
      setStringConfig(JSON.stringify(config, null, "\t"));
    } else {
      config.plugins = config.plugins.filter(plugin => {
        return plugin[0] !== checkbox.name;
      });
      setStringConfig(JSON.stringify(config, null, "\t"));
      onConfigChange(config);
    }
  }

  function handlePresetChange(reactEvent, checkbox) {
    if (checkbox.checked) {
      config.presets.push([
        presets[checkbox.name].name,
        presets[checkbox.name].defaultConfig,
      ]);
      setStringConfig(JSON.stringify(config, null, "\t"));
      onConfigChange(config);
    } else {
      config.presets = config.presets.filter(preset => {
        return preset[0] !== checkbox.name;
      });
      setStringConfig(JSON.stringify(config, null, "\t"));
      onConfigChange(config);
    }
  }

  function handleStringConfigChange(configText) {

    setStringConfig(configText);

    let sConfig = {};

    try {
      sConfig = JSON.parse(configText);
    } catch (e) {
      return console.error(e)
    }
    onConfigChange(sConfig);
  }

  const sourceCode = compiled?.code ?? "";
  return (
    <>
      <SplitPane minSize={40} defaultSize={300}>
        <>
          <Menu attached="top" tabular inverted>
            <Menu.Menu position="left">
              <Menu.Item>
                {timeTravel !== null ? (
                  <Dropdown text={displayAtIndex}>
                    <Dropdown.Menu>

                      {timeTravel.map((timetravel, i) => (
                        <Dropdown.Item
                          key={i}
                          text={timetravel.currentNode}
                          description={timetravel.pluginAlias}
                          onClick={() => {
                            setTimeTravelCode(`${timetravel.code}`);
                            setDisplayAtIndex(`${timetravel.currentNode}`);

                            /*
                              Source output comes before the array, we
                              need to shift all the indices by +1
                            */
                            if (timeTravelIndex !== timeTravel.length) {
                              setTimeTravelIndex(i + 1);
                            }
                          }}
                        />
                      ))}
                      <Dropdown.Item
                        text="Output"
                        onClick={() => {
                          setTimeTravelCode(sourceCode);
                          setDisplayAtIndex("Output");

                          // Source output is the first element
                          if (timeTravelIndex !== timeTravel.length) {
                            setTimeTravelIndex(1);
                          }
                        }}
                      />
                    </Dropdown.Menu>
                  </Dropdown>
                ) : null}
              </Menu.Item>
              <Button
                content="Next"
                onClick={() => {
                  /*
                  To get the original indices of the array
                  we reverse the operation earlier.
                */
                  setDisplayAtIndex(
                    `${timeTravel[timeTravelIndex - 1]?.currentNode}`
                  );
                  setTimeTravelCode(`${timeTravel[timeTravelIndex - 1]?.code}`);
                  if (timeTravelIndex !== timeTravel.length) {
                    setTimeTravelIndex(timeTravelIndex + 1);
                  }
                }}
              />
            </Menu.Menu>
          </Menu>
          <Segment.Group id="plugins">{displayAvailablePlugins()}</Segment.Group>
          <Segment.Group id="plugins">{displayAvailablePresets()}</Segment.Group>
          <Wrapper>
            <Config
              value={stringConfig}
              onChange={handleStringConfigChange}
              docName="config.json"
              config={{ mode: "application/json" }}
            />
          </Wrapper>
        </>
        <>
          <Menu attached="top" tabular inverted>
            <Menu.Menu position="left">
              <Menu.Item onClick={() => setShowAST(false)}>Output</Menu.Item>
              <Menu.Item
                onClick={() => {
                  setShowJSON(false);
                  setShowAST(true);
                }}
              >
                AST Explorer
              </Menu.Item>
              <Menu.Item
                onClick={() => {
                  setShowJSON(true);
                  setShowAST(true);
                }}
              >
                AST JSON
              </Menu.Item>
            </Menu.Menu>
            <Menu.Menu position="right">
              <Menu.Item>
                {compiled?.size}b, {gzip}b
              </Menu.Item>
              <Menu.Item onClick={removeConfig}>
                <Icon name="close" />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
          {showAST ? (
            <VizOutput
              code={source}
              cursor={cursor}
              setCursorAST={setCursorAST}
              showJSON={showJSON}
              plugins={pluginsAST}
            />
          ) : (
              <Code
                value={
                  timeTravelCode !== undefined ? timeTravelCode : compiled?.code
                }
                docName="result.js"
                config={{ readOnly: true, lineWrapping: true }}
                isError={compiled?.error ?? false}
              />
            )}

        </>
      </SplitPane>

    </>
  );
}
