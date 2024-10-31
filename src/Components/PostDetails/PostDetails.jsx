import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const details = useLoaderData();
    const {id, title, body} = details;
    const navigate = useNavigate()
    const handleGoBack = () =>{
        navigate(-1)
    }
    return (
        <div>
            <h2>{id}</h2>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;