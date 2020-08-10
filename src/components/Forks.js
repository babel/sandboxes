import React from 'react';
import REPLState from '../state/REPLState';
import {Segment} from 'semantic-ui-react';

export function Forks({id}) {
  function displayForks() {
    // Check if there are forks to display, and use a placeholder if not
    const forks = REPLState.GetBlob(id).forks ?? ['No forks to show'];
    //Display each fork
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