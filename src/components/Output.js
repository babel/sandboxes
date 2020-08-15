import React from "react";
import { CompiledOutput } from "./CompiledOutput";

export function Output({
  babelConfig,
  debouncedSource,
  enableCustomPlugin,
  customPlugin,
  updateBabelConfig,
  removeBabelConfig,
  debouncedCursor,
  setCursorAST,
  index,
}) {
  return (
    <CompiledOutput
      source={debouncedSource}
      customPlugin={enableCustomPlugin ? customPlugin : undefined}
      config={babelConfig}
      onConfigChange={config => updateBabelConfig(config, index)}
      removeConfig={() => removeBabelConfig(index)}
      cursor={debouncedCursor}
      setCursorAST={setCursorAST}
    />
  );
}
