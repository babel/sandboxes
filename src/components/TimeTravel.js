import React, { Fragment, useState } from "react"

import { Grid, Segment, Menu, Card, Icon } from "semantic-ui-react"

import { Input } from "./Input"

/* 
  function showTimeTravelChanges(currentCode) {
    const a = <Input timeTravel={currentCode} />
    return <Input timeTravel={currentCode} />;
  }

  function onLeaveTimeTravelChanges() {
    const b = <Input timeTravel={source} />
    return b;
  }
*/

export function TimeTravel({
    timeTravel,
    setTimeTravel,
    removeConfig,
    source
}) {

    // const [shouldRenderOutput, renderOutput] = useState(false);
    const [currentHistoryCode, setHistoryCode] = useState();

    return (
        <Grid.Row>
            <Grid.Column width={16}>
                <Menu attached="top" tabular inverted>
                    <Menu.Item>Time Travel</Menu.Item>
                    <Menu.Menu position="right">
                        <Menu.Item onClick={removeConfig}>
                            <Icon name="close" />
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
                <Segment inverted attached="bottom">
                    {timeTravel !== null ? (
                        <Fragment>
                            <Card.Group>
                                {timeTravel.map(timetravel => (
                                    <Card
                                        key={`${timetravel.code}`}
                                        header={`${timetravel.currentNode}`}
                                        meta={`${timetravel.pluginAlias} | visitorType: ${timetravel.visitorType}`}
                                        description={`${timetravel.code}`}
                                        onMouseEnter={() => setHistoryCode(timetravel.code)}
                                        onMouseLeave={() => setHistoryCode("")}
                                    />
                                ))}
                                {/* <showHistoryOutput shouldRender={shouldRenderOutput} /> */}
                            </Card.Group>
                        </Fragment>
                    ) : null}
                </Segment>
            </Grid.Column>
        </Grid.Row>
    )
}