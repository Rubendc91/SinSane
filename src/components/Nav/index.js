import React, { useEffect } from 'react';

import "../style.css";



function Nav(props) {
    const {
        pages =[],
        setCurrentPage,
        currentPage
    } = props


    useEffect(() => {
        document.title = currentPage.name
    }, [currentPage])



    return (
        <nav className="nav-parent"><ul className="nav-container">{pages.map((page) =>{
            return <li className={currentPage.name === page.name && "active"}><span onClick={() => setCurrentPage(page)}>{page.name}</span></li>
        })}</ul></nav>
    );
}
export default Nav;