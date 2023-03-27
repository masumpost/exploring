import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <a href="/Home">Home</a>
            <a href="/Blog">Blog</a>
            <a href="/About">About Us</a>
            <a href="/Contract us">Contract Us</a>
        </div>
    );
};

export default Header;