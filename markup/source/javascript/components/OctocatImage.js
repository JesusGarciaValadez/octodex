"use strict";

/*
 * Module dependenciee
 */

import React from 'react';

export default class OctocatImage extends React.Component {
  constructor ( props ) {
    super ( props );
  }

  render () {
    var img = `https://octodex.github.com/images/${ this.props.image }`;
    return <img src={ img } alt={ this.props.name } />
  }
}