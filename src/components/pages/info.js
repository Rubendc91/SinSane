import React from 'react';
import Placeholder from '../../components/img/Placeholder.png';
// import Placeholder from '../../components/img/Placeholder.png';

function infoPage() {

    const DescriptionStyle = {
        color: "white",

    }
    return (
        <section className="projectsBox">
            <h1>Events</h1>
            <section className="events">

                <section className="cardColumn">
                    <a href="https://drive.google.com/file/d/1BKYuObSD0DidP2d2MwjTA5oC1CANPZ9k/view?usp=share_link" target="blank">
                        <img className="event-Img" src={Placeholder} alt="placeholder" />
                    </a>
                    <p style={DescriptionStyle}>(Event Description)</p>
                </section>
                <section className="cardColumn">
                    <a href="https://drive.google.com/file/d/1BKYuObSD0DidP2d2MwjTA5oC1CANPZ9k/view?usp=share_link" target="blank">
                        <img className="event-Img" src={Placeholder} alt="placeholder" />
                    </a>
                    <p style={DescriptionStyle}>(Event Description)</p>
                </section>

            </section>
        </section >
    )
}

export default infoPage;