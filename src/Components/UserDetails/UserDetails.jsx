import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    const {name , website, company} = user;
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Website: {website}</p>
            <p><small>Company: {company.name}</small></p>
        </div>
    );
};

export default UserDetails;