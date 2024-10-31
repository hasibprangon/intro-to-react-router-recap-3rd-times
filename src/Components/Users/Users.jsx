import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Users = () => {
    const users = useLoaderData();
    const usersStyle = {
        display:'grid',
        gridTemplateColumns:' repeat(3, 1fr)',
        gap:'10px'
    }
    return (
        <div>
            <h2>All users are here: {users.length}</h2>
            <div style={usersStyle}>
                {
                    users.map(user => <User
                    key={user.id}
                    user={user}
                    ></User>)
                }
            </div>
        </div>
    );
};

export default Users;