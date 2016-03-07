"use strict";

/*
 * Module dependenciee
 */

import React from 'react';
import OctocatAvatar from './OctocatAvatar';

export default class Octocat extends React.Component {
  constructor ( props ) {
    super ( props );
  }

  render () {
    return <section className="octodex">
      {
        this.props.octocats.map( ( octocat ) => {
          return <OctocatAvatar
            uri={ octocat.uri }
            name={ octocat.name }
            image={ octocat.img } />
        } )
      }
    </section>
  }
}