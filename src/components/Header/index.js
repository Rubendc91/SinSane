import React from 'react';
import Banner from '../img/Banner.png';

import '../style.css';

function Header(props) {
    return (
        <header className="header-container">
            <h1>Omni the Artist</h1>
            <img className="Header-Img" src={Banner} />
            {props.children}
        </header>);
}
export default Header;