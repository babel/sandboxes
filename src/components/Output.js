import React from "react";
import { CompiledOutput } from "./CompiledOutput";

import { Tab } from "semantic-ui-react";

export function Output({
  babelConfig,
  debouncedSource,
  enableCustomPlugin,
  customPlugin,
  updateBabelConfig,
  removeBabelConfig,
}) {
  let panes = babelConfig.map((config, index) => {

    console.log(config)

    return {
      menuItem: 'Config ' + index, render: () => <CompiledOutput
        source={debouncedSource}
        customPlugin={enableCustomPlugin ? customPlugin : undefined}
        config={config}
        key={index}
        onConfigChange={config => updateBabelConfig(config, index)}
        removeConfig={() => removeBabelConfig(index)}
      />
    }
  })

  return <Tab panes={panes} />;
}
