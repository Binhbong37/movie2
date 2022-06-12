import React from 'react';
import { MdSearch } from 'react-icons/md';

import Navigation from '../assets/wrappers/Navigation';
import Logo from '../assets/images/Netflix_Logo_RGB.png';
import { useScrollY } from './hooks';

const Navbar = () => {
    const [scrollY] = useScrollY();

    return (
        <Navigation
            style={
                scrollY < 50
                    ? { backgroundColor: 'transparent' }
                    : { backgroundColor: 'var(--color-background' }
            }
        >
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
