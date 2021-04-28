import { Button, ListGroup, ListGroupItem } from 'reactstrap';

import React from 'react';

const UserList = ({ users }) => {
  return (
    <ListGroup>
      {users
        .sort((a, b) => {
          if (a.firstName > b.firstName) {
            return 1;
          } else if (a.firstName < b.firstName) {
            return -1;
          } else if (a.lastName > b.lastName) {
            return 1;
          } else if (a.lastName < b.lastName) {
            return -1;
          } else {
            return 0;
          }
        })
        .map((user) => (
          <ListGroupItem key={user.id}>
            <section style={{ display: 'flex', margin: "auto 0" }}>
              <div style={{ flexGrow: 1 }}>
                {user.firstName} {user.lastName}
              </div>
              <div>
                <Button size="sm" color="danger" outline>
                    Delete
                </Button>
              </div>
            </section>
          </ListGroupItem>
        ))}
    </ListGroup>
  );
};

export default UserList;
