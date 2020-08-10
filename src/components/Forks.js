import React, { useState } from 'react';
import REPLState from '../state/REPLState';
import {Segment} from 'semantic-ui-react';

export function Forks({forks}) {
  return (
    <Segment.Group>
      {forks.map((fork) => <Segment>{fork}</Segment>)}
    </Segment.Group>
  )
}