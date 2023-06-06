import React from 'react';
import '../style.css';

function Footer() {
    const iconsOmni = [
        {
            name: "fa-brands fa-instagram",
            links: "https://www.instagram.com/omnitheartist/?hl=en"
        },
        {
            name: "fa-brands fa-tiktok",
            links: "https://www.tiktok.com/@omnitheartist"
        },
        {
            name: "fa-brands fa-facebook",
            links: "https://www.facebook.com/Omnisplayground"
        }


    ]


    const linkStyle = {
        textDecoraton: "none",
        color: "black",
        cursor: "pointer"
    }

    const FooterStyle = {
        height: "50px",
        // backgroundColor: "white",
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridGap: "15px"

    }
    const FooterSection = {
        display: "grid",
        gridTemplateColumns: "max-content 1fr 1fr 1fr 1fr",
        gridGap: "20px"
    }


    return (
        <footer style={FooterStyle} className="footer">
            <section style={FooterSection} >
                <section style={{ paddingRight: "15px"}}>© {new Date().getFullYear()}</section>
                {iconsOmni.map(icon => {
                    return <a href={icon.links} key={icon.name} target="_blank" rel="noopener noreferrer" style={linkStyle}><i className={icon.name}></i></a>
                })}
            </section>
        </footer>
    )

}

export default Footer;