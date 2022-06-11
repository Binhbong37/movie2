import React from 'react';
import { MdSearch } from 'react-icons/md';

import Navigation from '../assets/wrappers/Navigation';
import Logo from '../assets/images/Netflix_Logo_RGB.png';

const Navbar = () => {
    return (
        <Navigation>
            <div className="navContainer">
                <div className="logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="navSearch">
                    <MdSearch className="iconSearch" />
                    <input
                        type="text"
                        placeholder="Input title, genres, people"
                    />
                </div>
            </div>
        </Navigation>
    );
};

export default Navbar;
