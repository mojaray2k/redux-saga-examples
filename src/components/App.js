import React, { Component } from 'react';

import UserList from './UserList';
import { connect } from 'react-redux';
import {getUsersRequest} from '../actions/users'

class App extends Component {
  constructor(props) {
    super(props)
    this.props.getUsersRequest();
  }


  render() {
    const users = this.props.users;
    return (
      <div style={{margin: "0 auto", padding: "20px", maxWidth: "600px"}}>
        <UserList users={users.items}/>
      </div>
    );
  }
}

export default connect(({users}) => ({users}), {
  getUsersRequest
})(App);
