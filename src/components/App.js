import React, { useCallback, useEffect, useRef, useState } from "react";
import * as Babel from "@babel/standalone";

import { CustomPlugin } from "./CustomPlugin";
import { MainMenu } from "./MainMenu";
import { Forks } from "./Forks";
import { Input } from "./Input";
import { Output } from "./Output";
import { gzipSize } from "../gzip";
import { Root } from "./styles";
import { useDebounce } from "../utils/useDebounce";

import { Grid, Tab } from "semantic-ui-react";

window.babel = Babel;

export const App = ({
  defaultSource,
  defaultConfig,
  defCustomPlugin,
  defaultId,
  defaultForks,
}) => {
  const [source, setSource] = React.useState(defaultSource);
  const [enableCustomPlugin, toggleCustomPlugin] = React.useState(false);
  const [customPlugin, setCustomPlugin] = React.useState(defCustomPlugin);
  const [id, setId] = useState(defaultId);
  const [jsonConfig, setJsonConfig] = useState(
    Array.isArray(defaultConfig) ? defaultConfig : [defaultConfig]
  );
  const [size, setSize] = useState(null);
  const [gzip, setGzip] = useState(null);
  const debouncedSource = useDebounce(source, 125);

  const [panes, setPanes] = useState([]);

  const [forksVisible, setForksVisible] = useState(false);
  const [forks, setForks] = useState(defaultForks);

  function toggleForksVisible() {
    setForksVisible(!forksVisible);
  }
  const [cursor, setCursor] = useState({ line: 0, ch: 0 });
  const [cursorAST, setCursorAST] = useState({
    anchor: { line: 0, ch: 0 },
    head: { line: 0, ch: 0 },
  });
  const debouncedCursor = useDebounce(cursor, 125);
  const editorRef = useRef(null);

  const updateBabelConfig = useCallback(
    (config, index) => {
      jsonConfig[index] = config;
      setJsonConfig(jsonConfig);
    },
    [jsonConfig]
  );

  const removeBabelConfig = useCallback(index => {
    setJsonConfig(configs => configs.filter((c, i) => index !== i));
  }, []);

  useEffect(() => {
    let size = new Blob([debouncedSource], { type: "text/plain" }).size;
    setSize(size);
    gzipSize(debouncedSource).then(s => setGzip(s));
  }, [debouncedSource]);

  useEffect(() => {
    if (editorRef && editorRef.current && cursorAST.anchor && cursorAST.head) {
      editorRef.current.editor.setSelection(cursorAST.anchor, cursorAST.head, {
        scroll: false,
      });
    }
  }, [editorRef, cursorAST]);

  useEffect(() => {
    setPanes(
      jsonConfig.map((config, index) => {
        let name;
        if (!index) {
          name = "config.json";
        } else {
          name = `config_${index}.json`;
        }

        return {
          menuItem: name,
          render: () => (
            <Output
              babelConfig={config}
              cloneConfig={() => {
                setJsonConfig(configs => [
                  ...configs,
                  // Deep copy of config
                  JSON.parse(JSON.stringify(config)),
                ])
              }}
              enableCustomPlugin={enableCustomPlugin}
              customPlugin={customPlugin}
              updateBabelConfig={updateBabelConfig}
              removeBabelConfig={removeBabelConfig}
              debouncedSource={debouncedSource}
              debouncedCursor={debouncedCursor}
              setCursorAST={setCursorAST}
              index={index}
            />
          ),
        };
      })
    );
  }, [
    jsonConfig,
    enableCustomPlugin,
    customPlugin,
    updateBabelConfig,
    removeBabelConfig,
    debouncedSource,
    debouncedCursor,
    setCursorAST,
  ]);

  return (
    <Root>
      <MainMenu
        source={source}
        setSource={setSource}
        jsonConfig={jsonConfig}
        setBabelConfig={setJsonConfig}
        customPlugin={customPlugin}
        toggleCustomPlugin={toggleCustomPlugin}
        enableCustomPlugin={enableCustomPlugin}
        id={id}
        setId={setId}
        toggleForksVisible={toggleForksVisible}
        forks={forks}
        setForks={setForks}
        configsCount={jsonConfig.length}
      />

      <Grid divided>
        <Grid.Row>
          <Grid.Column width="5">
            <Input
              size={size}
              gzip={gzip}
              source={source}
              ref={editorRef}
              setSource={setSource}
              setCursor={setCursor}
            />
          </Grid.Column>
          <Grid.Column width="11">
            <Tab
              panes={panes}
              menu={{
                color: "black",
                inverted: true,
                tabular: false,
                attached: true,
              }}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid celled="internally">
        {forksVisible && <Forks forks={forks} />}
        {enableCustomPlugin && (
          <CustomPlugin
            toggleCustomPlugin={toggleCustomPlugin}
            customPlugin={customPlugin}
            setCustomPlugin={setCustomPlugin}
          />
        )}
      </Grid>
    </Root>
  );
};
