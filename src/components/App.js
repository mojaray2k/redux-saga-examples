import React, { Component } from 'react';

import { connect } from 'react-redux';
import {get_users_request} from '../actions/users'

class App extends Component {
  constructor(props) {
    super(props)
    this.props.get_users_request();
  }


  render() {
    return <div>Test</div>;
  }
}

export default connect(null, {
  get_users_request
})(App);
