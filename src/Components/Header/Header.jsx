import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    const navStyle = {
        marginRight:'15px',
        color:'black'
    }
    return (
        <div>
            <nav >
                <h3>Navbar</h3>
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/about">About</ActiveLink>
                <ActiveLink to="/contacts">Contacts</ActiveLink>
                <ActiveLink to='/users'>Users</ActiveLink>
                <ActiveLink to='/posts'>Posts</ActiveLink>
            </nav>
        </div>
    );
};

export default Header;