"use strict";

/*
 * Module dependenciee
 */

import React from 'react';
// import PokeTable from './PokeTable';
// import PokeChat from './PokeChat';
import Octocat from './Octocat';
import uid from 'uid';
import $ from 'jquery';

export default class Octodex extends React.Component {
  constructor ( props ) {
    super ( props );
    this.state    = { octocats: [] };
  }

  componentWillMount() {
    $.getJSON( 'js/octodex-min.json', ( response ) => {
      this.setState( { octocats: response } );
    } );
  }

  render () {
    if ( this.state.octocats.length ) {
      return <Octocat octocats={ this.state.octocats } />
    } else {
      return <p>Cargando...</p>
    }
  }
}