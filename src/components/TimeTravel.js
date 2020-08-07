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
    /* setTimeTravel, */
    removeConfig,
    source,
    setUpdate
}) {
    // console.log(timeTravel)
    // const [shouldRenderOutput, renderOutput] = useState(false);
    // const [currentHistoryCode, setHistoryCode] = useState();

    /* function showHistoryOutput(props) {
        const shouldRender = props.shouldRender;

        console.log(shouldRender)
        if (shouldRender) {
            return <Input source={timeTravel} />
        }
    } */

    /*     if (currentHistoryCode !== undefined) {
    
            return <Input source={currentHistoryCode} />
        } else if (currentHistoryCode === "") {
    
            return <Input source={source} />
        } */

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
                                        onMouseEnter={() => setUpdate(`${timetravel.code}`)}
                                        onMouseLeave={() => setUpdate(source)}
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