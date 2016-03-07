"use strict";

/*
 * Module dependenciee
 */

import React from 'react';
// import PokeTable from './PokeTable';
// import PokeChat from './PokeChat';

export default class OctocatCaption extends React.Component {
  constructor ( props ) {
    super ( props );
  }

  render () {
    return <figcaption>
        <span>{ this.props.name }</span>
      </figcaption>
  }
}