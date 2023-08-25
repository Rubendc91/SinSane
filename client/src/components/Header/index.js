import Banner from '../img/Banner.png';
import '../style.css';
import React from 'react';
// import Login from "../pages/Login"









function Header(props) {

    return (
        <header className="header-container">
            <h1>Sinsane</h1>
            {props.children}

            <img className="Header-Img" src={Banner} alt="sinsane" />
        </header>);
}
export default Header;