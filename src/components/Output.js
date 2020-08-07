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
  let panes = babelConfig.map((config) => {
    return { menuItem: 'Tab 1', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> }
  })

  return <div>

    <Tab panes={panes} />
    {
      babelConfig.map((config, index) => {
        return (
          <CompiledOutput
            source={debouncedSource}
            customPlugin={enableCustomPlugin ? customPlugin : undefined}
            config={config}
            key={index}
            onConfigChange={config => updateBabelConfig(config, index)}
            removeConfig={() => removeBabelConfig(index)}
          />
        );
      })
    }
  </div>
    ;
}
