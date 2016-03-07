"use strict";

/*
 * Module dependenciee
 */

import React from 'react';
import OctocatImage from './OctocatImage';
import OctocatCaption from './OctocatCaption';

export default class Octocat extends React.Component {
  constructor ( props ) {
    super ( props );
  }

  render () {
    var url = `https://octodex.github.com/${ this.props.uri }`;
    return <article className="octocat">
      <a href={ url } target="_self" title={ this.props.name }>
        <figure>
          <OctocatImage image={ this.props.image } />
          <OctocatCaption name={ this.props.name } />
        </figure>
      </a>
    </article>
  }
}