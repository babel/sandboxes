import React from 'react';
import REPLState from '../state/REPLState';
import {Segment} from 'semantic-ui-react';

export function Forks({id}) {
  function displayForks() {
    // REPLState.GetBlob(id).forks;
    return REPLState.GetBlob(id).forks?.map((fork) => (
      <Segment>{fork}</Segment>
    ));
  }
  return (
    <Segment.Group>
      {displayForks()}
    </Segment.Group>
  )
}