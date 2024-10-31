import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const navStyle = {
        marginRight:'15px'
    }
    return (
        <div>
            <nav >
                <h3>Navbar</h3>
                <Link style={navStyle} to="/">Home</Link>
                <Link style={navStyle} to="/about">About</Link>
                <Link style={navStyle} to="/contacts">Contacts</Link>
                <Link style={navStyle} to='/users'>Users</Link>
            </nav>
        </div>
    );
};

export default Header;