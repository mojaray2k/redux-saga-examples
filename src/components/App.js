import React, { Component } from 'react';
import { createUserRequest, getUsersRequest } from '../actions/users';

import NewUserForm from './NewUserForm';
import UserList from './UserList';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.props.getUsersRequest();
  }

  handleSubmit = ({ firstName, lastName }) => {
    this.props.createUserRequest({ firstName, lastName });
  };

  render() {
    const users = this.props.users;
    return (
      <div style={{ margin: '0 auto', padding: '20px', maxWidth: '600px' }}>
        <NewUserForm onSubmit={this.handleSubmit} />
        <UserList users={users.items} />
      </div>
    );
  }
}

export default connect(({ users }) => ({ users }), {
  getUsersRequest,
  createUserRequest,
})(App);
