import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title} = post;
    const postStyle = {
        border: '1px solid purple',
        padding: '15px',
        borderRadius: '10px'
    };
    const navigate = useNavigate()

    const handleSeeDetails = () => {
        navigate(`/posts/${id}`)
    }
    return (
        <div style={postStyle}>
            <h2>{id}</h2>
            <p>{title}</p>
            <Link to={`/posts/${id}`}>Show details</Link>
            <button><Link to={`/posts/${id}`}>Show details</Link></button>
            <button onClick={handleSeeDetails}>See details</button>
        </div>
    );
};

export default Post;