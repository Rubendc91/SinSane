import React from 'react';
import Placeholder from '../../components/img/Placeholder.png';
// import Placeholder from '../../components/img/Placeholder.png';

// TODO: add in array and map for creating events 

function infoPage() {

    const DescriptionStyle = {
        color: "white",

    }
    return (
        <section className="projectsBox">
            <h1>Events</h1>
            <section className="events">

                <section className="cardColumn">
                    <a href="" target="blank">
                        <img className="event-Img" src={Placeholder} alt="placeholder" />
                    </a>
                    <p style={DescriptionStyle}>(Event Description)</p>
                </section>
                <section className="cardColumn">
                    <a href="" target="blank">
                        <img className="event-Img" src={Placeholder} alt="placeholder" />
                    </a>
                    <p style={DescriptionStyle}>(Event Description)</p>
                </section>

            </section>
        </section >
    )
}

export default infoPage;