import React, { useState } from 'react';
import '../style.css';


function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [errorMessage, setErrorMessage] = useState("");
    const { name, email, message } = formState;
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!errorMessage) {
         
            // alert("Can not be Blank")
            console.log("submit form", formState)
        }
    };

    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        return re.test(String(email).toLowerCase());
    };

    const handleChange = (event) => {
        console.log(event.target.name);
        if (event.target.name === "email") {
            const isValid = validateEmail(event.target.value);
            if (!isValid) {
                setErrorMessage("Your email is invalid")
            } else {
                setErrorMessage("")
            }
        } else {
            if (!event.target.value.length) {
                setErrorMessage(`${event.target.name} is required`)
            } else {
                setErrorMessage("")
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [event.target.name]: event.target.value });
            console.log("Handle Form", formState);
        }
    }
    const contactForm = {
        color: "red",
     
     }
    const label = {
        display: "inline-block",
        width: "120px",
        textAlign: "center",
      }
    return (
        <section style={{borderStyle: "solid",border: "red"}}>
            <h1>Contact</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <section>
                    <label style={label} htmlFor="name">Name: </label>
            <input style={contactForm} type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </section>
                <section>
                    <label style={label} htmlFor="message">message: </label>
                    <input style={contactForm} type="text" name="message" defaultValue={message} onBlur={handleChange} />
                </section>
                <section>
                    <label style={label} htmlFor="email">Email address: </label>
                    <input style={contactForm} type="text" name="email" defaultValue={email} onBlur={handleChange} />
                </section>
                {errorMessage && (
                    <section>
                        <p>{errorMessage}</p>
                    </section>
                )}
               <button type="submit"><a href= "mailto:Rubendc91@gmail.com?subject={email}&body=This is only a test!">Submit</a> </button>
            </form>
        </section>
    );
}

export default ContactPage;