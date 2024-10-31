import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id, name, phone, email} = user;
    const userStyle = {
        border: '2px solid yellow',
        margin:'15px',
        padding:'15px',
        borderRadius:'20px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>{phone}</p>
            <p><small>{email}</small></p>
            <Link to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;