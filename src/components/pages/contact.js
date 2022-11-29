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
            alert("Submit Form")
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
            console.log(isValid);
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
            if (!errorMessage) {
                setFormState({ ...formState, [event.target.name]: event.target.value });
                console.log("Handle Form", formState);
            }
        }
    }

    return (
        <section>
            <h1>Contact</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <section>
                    <label htmlFor="name">Name: </label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </section>
                <section>
                    <label htmlFor="email">Email address: </label>
                    <input type="text" name="email" defaultValue={email} onBlur={handleChange} />
                </section>
                <section>
                    <label htmlFor="message">message: </label>
                    <input type="text" name="message" defaultValue={message} onBlur={handleChange} />
                </section>
                {errorMessage && (
                    <section>
                        <p>{errorMessage}</p>
                    </section>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactPage;