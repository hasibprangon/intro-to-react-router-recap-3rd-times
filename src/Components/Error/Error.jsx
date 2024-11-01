import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError()
    console.log(error);
    return (
        <div>
            <h2>Oops!</h2>
            <h1>404</h1>
            <p>
                {error.statusText || error.message}
            </p>

            <p>An unexpected error occurred</p>
            <Link to='/'><button>Go Back</button></Link>
        </div>
    );
};

export default Error;