import React from "react";
import { Segment } from "semantic-ui-react";

export function Forks({ forks }) {
  return (
    <Segment.Group>
      {forks?.length ? (
        forks.map(fork => <Segment>{fork}</Segment>)
      ) : (
        <Segment>No forks to display.</Segment>
      )}
    </Segment.Group>
  );
}
