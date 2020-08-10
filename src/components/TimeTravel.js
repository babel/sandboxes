import React, { Fragment } from "react";

import { Grid, Segment, Menu, Card, Icon } from "semantic-ui-react";

export function TimeTravel({
  timeTravel,
  removeConfig,
  source,
  setTimeTravelCode,
}) {
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
                    onMouseEnter={() => setTimeTravelCode(`${timetravel.code}`)}
                    onMouseLeave={() => setTimeTravelCode(source)}
                  />
                ))}
              </Card.Group>
            </Fragment>
          ) : null}
        </Segment>
      </Grid.Column>
    </Grid.Row>
  );
}
