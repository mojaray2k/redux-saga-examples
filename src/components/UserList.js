import {ListGroup, ListGroupItem} from 'reactstrap';

import React from 'react';

const UserList = ({users}) => {
    return (
        <ListGroup>
            {users.map((user) => (
                <ListGroupItem key={user.id}>
                    {user.firstName}
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default UserList;
