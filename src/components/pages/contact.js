// import React, { useState } from 'react';
import '../style.css';


function ContactPage() {
    // const [formState, setFormState] = useState({
    //     name: "",
    //     email: "",
    //     message: ""
    // });
    // const [errorMessage, setErrorMessage] = useState("");
    // const { name, email, message } = formState;
    
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     if (!errorMessage) {
         
    //         // alert("Can not be Blank")
    //         console.log("submit form", formState)
    //     }
    // };

    // const validateEmail = (email) => {
    //     const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    //     return re.test(String(email).toLowerCase());
    // };

    // const handleChange = (event) => {
    //     console.log(event.target.name);
    //     if (event.target.name === "email") {
    //         const isValid = validateEmail(event.target.value);
    //         if (!isValid) {
    //             setErrorMessage("Your email is invalid")
    //         } else {
    //             setErrorMessage("")
    //         }
    //     } else {
    //         if (!event.target.value.length) {
    //             setErrorMessage(`${event.target.name} is required`)
    //         } else {
    //             setErrorMessage("")
    //         }
    //     }
    //     if (!errorMessage) {
    //         setFormState({ ...formState, [event.target.name]: event.target.value });
    //         console.log("Handle Form", formState);
    //     }
    // }

    const iconsSinsane = [
        // {
        //     name: "fa-brands fa-instagram fa-bounce",
        //     links: "https://www.instagram.com/fat_ass_lips/?hl=en",
        //     tag: "Instagram___"
        // },
        {
            name: "fa-brands fa-youtube fa-bounce",
            links: "https://youtube.com/@OfficialSinSane",
            tag: "Youtube___"
        },
        {
        name: "fa-brands fa-facebook fa-bounce",
        links: "https://facebook.com/officalSinSane/",
        tag: "Facebook___"
       },
    ]

    const iconsOmni = [
        {
            name: "fa-brands fa-instagram fa-bounce",
            links: "https://www.instagram.com/omnitheartist/?hl=en",
            tag: "Instagram___"
        },
        {
            name: "fa-brands fa-tiktok fa-bounce",
            links: "https://www.tiktok.com/@omnitheartist",
            tag: "TikTok___"
        },
        {
        name: "fa-brands fa-facebook fa-bounce",
        links: "https://www.facebook.com/Omnisplayground",
        tag: "Facebook___"
       },
    ]

    const iconsFatLip = [
        {
            name: "fa-brands fa-instagram fa-bounce",
            links: "https://www.instagram.com/fat_ass_lips/?hl=en",
            tag: "Instagram___"
        },
        {
            name: "fa-brands fa-tiktok fa-bounce",
            links: "https://www.tiktok.com/@omnitheartist",
            tag: "TikTok___"
        },
        {
        name: "fa-brands fa-facebook fa-bounce",
        links: "https://www.facebook.com/https://facebook.com/ThaPhatest",
        tag: "Facebook___"
       },
    ]



    return (
        <section>
            {/* <h1>Contact</h1> */}
            <section class="contactBorder" >
                <h1>Sinsane</h1>

                <a href= "SinSanebooking@gmail.com?subject=Important!!!!!!&body=When and where?" className="linkStyle">Email____<i class="fa-solid fa-paper-plane fa-bounce" ></i></a> 
                {iconsSinsane.map(icon => {
                    return <a href={icon.links} key={icon.name} target="_blank" rel="noopener noreferrer" className="linkStyle">{icon.tag}<i className={icon.name}></i></a>
                })}

                </section>
                
                <section class="contactBorder" >
                    <h1>Omni</h1>
                {iconsOmni.map(icon => {
                    return <a href={icon.links} key={icon.name} target="_blank" rel="noopener noreferrer" className="linkStyle">{icon.tag}<i className={icon.name}></i></a>
                })}
                            <a href= "mailto:omniofthearts.com?subject=Important!!!!!!&body=What would you like to say?" className="linkStyle">Email____<i class="fa-solid fa-paper-plane fa-bounce" ></i></a> 

                </section>

                <section class="contactBorder" >
                <h1>Fat Lip</h1>

                {iconsFatLip.map(icon => {
                    return <a href={icon.links} key={icon.name} target="_blank" rel="noopener noreferrer" className="linkStyle">{icon.tag}<i className={icon.name}></i></a>
                })}
                            <a href= "legallysmith@gmail.com?subject=Important!!!!!!&body=What would you like to say?" className="linkStyle">Email____<i class="fa-solid fa-paper-plane fa-bounce" ></i></a> 

                </section>

        </section>
    );
}

export default ContactPage;