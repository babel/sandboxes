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
    return {
      menuItem: 'Config 1', render: () => {
        babelConfig.map((config, index) => {
          return (
          
        );
        })
      }
    }
  })

  return <div>

    <Tab panes={panes} />
  </div>
    ;
}
