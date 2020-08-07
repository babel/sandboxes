import React from 'react';
import REPLState from '../state/REPLState';
import {Segment} from 'semantic-ui-react';

export function Forks({id}) {
  function displayForks() {
    const forks = REPLState.GetBlob(id).forks;
    return forks.map((fork) => (
      <Segment>{fork}</Segment>
    ));
  }
  return (
    <Segment.Group>
      {displayForks()}
    </Segment.Group>
  )
}