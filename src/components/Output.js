import React, { Fragment, useState } from "react";
import { CompiledOutput } from "./CompiledOutput";
/* import { TimeTravel } from "./TimeTravel" */

export function Output({
  babelConfig,
  debouncedSource,
  enableCustomPlugin,
  customPlugin,
  updateBabelConfig,
  removeBabelConfig,
  withTimeTravel,
  setUpdateOuptut
}) {
  const [getTimeTravelCode, setTimeTravelCode] = useState("");
  const [updateTimeTravel, setUpdateTimeTravel] = useState(false);
  // console.log(getTimeTravelCode);

  // console.log(getTimeTravelCode)
  /*   if (updateTimeTravel) {
      setUpdateOuptut(true)
    } */
  withTimeTravel(getTimeTravelCode)

  return babelConfig.map((config, index) => {
    return (
      <Fragment>
        <CompiledOutput
          source={debouncedSource}
          customPlugin={enableCustomPlugin ? customPlugin : undefined}
          config={config}
          key={index}
          onConfigChange={config => updateBabelConfig(config, index)}
          removeConfig={() => removeBabelConfig(index)}
          timeTravelCode={setTimeTravelCode}
          setUpdateTimeTravel={setUpdateTimeTravel}
        />

        {/* <TimeTravel
          timeTravel={getTimeTravelCode}
          setTimeTravel={setTimeTravel}
          removeConfig = {() => removeBabelConfig(index)}
          source={debouncedSource}
        /> */}
      </Fragment>
    );
  });
}
