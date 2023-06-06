import React from 'react';
import Banner from '../img/Banner.png';

import '../style.css';

function Header(props) {
    return (
        <header className="header-container">
            <h1>Sinsane</h1>
            <img className="Header-Img" src={Banner} alt="sinsane" />
            {props.children}
        </header>);
}
export default Header;