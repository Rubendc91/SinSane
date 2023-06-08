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

    const iconsFatLip = [
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
        cursor: "pointer",
        alignSelf: "center",
        color: "white"

    }

    const FooterStyle = {
        height: "50px",
        display: "grid",
        justifyContent: "center",
        gridGap: "15px"

    }
    const FooterSection = {
        display:"flex",
        gridGap: "20px",

    }


    return (
        <footer style={FooterStyle} className="footer">
            <section style={FooterSection} className="footer">
                <section style={FooterStyle} className="footer">
                    <section style={FooterSection} className="footer">
                        <p>Omni</p>    
                    {iconsOmni.map(icon => {
                        return <a href={icon.links} key={icon.name} target="_blank" rel="noopener noreferrer" style={linkStyle}><i className={icon.name}></i></a>
                    })}
                    </section>
                </section>
                <section style={FooterStyle}>
                    <section style={FooterSection}>
                    <p>Fat Lip</p>    
                    {iconsFatLip.map(icon => {
                    return <a href={icon.links} key={icon.name} target="_blank" rel="noopener noreferrer" style={linkStyle}><i className={icon.name}></i></a>
                })}
                </section>
                </section>
            </section>
            <section style={FooterStyle}>
                <section>Sinsane © {new Date().getFullYear()}</section>
                </section>
        </footer>
    )

}

export default Footer;