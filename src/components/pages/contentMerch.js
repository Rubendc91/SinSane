import React from 'react';
import Placeholder from '../../components/img/Placeholder.png';

import '../style.css';



function contentMerchPage() {
    return (
        <section className="projectsBox" id="projects">
            <h1>Content / Merch</h1>
            <section className="resume">

                <section className="cardColumn">
                    <a href="" target= "blank">
                        <img className="Port-Img " src={Placeholder} alt="placeholder" />
                        <h2 className="cardHeader">Item</h2>
                    </a>
                </section>


                <section className="cardColumn">
                    <a href="" target= "_blank">
                        <img className="Port-Img" src={Placeholder} alt="placeholder" />
                        <h2 className="cardHeader">Item</h2>
                    </a>
                </section>

                <section className="cardColumn">
                    <a href="" target= "_blank">
                        <img className="Port-Img star" src={Placeholder} alt="placeholder" />
                        <h2 className="cardHeader">Item</h2>
                    </a>
                </section>

                <section className="cardColumn">
                    <a href="" target= "_blank">
                        <img className="Port-Img" src={Placeholder} alt="placeholder" />
                        <h2 className="cardHeader">Item</h2>
                    </a>
                </section>

            </section>
        </section >


    )
}

export default contentMerchPage;
