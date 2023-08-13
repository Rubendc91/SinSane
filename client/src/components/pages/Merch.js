import React from 'react';
import Placeholder from '../../components/img/Placeholder.png';

import '../style.css';



function contentMerchPage() {
    const Merch = [

        {
            name: "item 01",
            links: "https://youtube.com/@OfficialSinSane",
            description: "this is a description of item 1",
            price: "$3.50",
            // in the future src will be a link img will be pulled from company cloud
            src: Placeholder
            // TODO: add to cart button an function
        },
        {
            name: "item 02",
            links: "https://youtube.com/@OfficialSinSane",
            description: "this is a description of item 2",
            src: Placeholder
        },
        {
            name: "item 03",
            links: "https://youtube.com/@OfficialSinSane",
            description: "this is a description of item 3",
            src: Placeholder
        },
    ]
    return (
        <section class="merchBorder" >
        <h1>Merch</h1>

        {Merch.map(icon => {
            return <a href={icon.links} target="_blank" rel="noopener noreferrer" className="merchLinkStyle">
                <img className="merchImg" src={icon.src} alt="Merch">
                    
                </img>
                <section className='itemDesc'>
                    <h4>{icon.name}</h4>
                    <p>{icon.price}</p>
                    <p>{icon.description}</p>
                </section>
                </a>
        })}

        </section>
    // <section className="projectsBox" id="projects">
    //     <h1>Content / Merch</h1>
    //     <section className="resume">
    
    //         <section className="cardColumn">
    //             <a href="" target= "blank">
    //                 <img className="Port-Img star" src={Placeholder} alt="placeholder" />
    //                 <h2 className="cardHeader">Item</h2>
    //             </a>
    //         </section>
    
    
    //         <section className="cardColumn">
    //             <a href="" target= "_blank">
    //                 <img className="Port-Img" src={Placeholder} alt="placeholder" />
    //                 <h2 className="cardHeader">Item</h2>
    //             </a>
    //         </section>
    
    //         <section className="cardColumn">
    //             <a href="" target= "_blank">
    //                 <img className="Port-Img " src={Placeholder} alt="placeholder" />
    //                 <h2 className="cardHeader">Item</h2>
    //             </a>
    //         </section>
    
    //         <section className="cardColumn">
    //             <a href="" target= "_blank">
    //                 <img className="Port-Img" src={Placeholder} alt="placeholder" />
    //                 <h2 className="cardHeader">Item</h2>
    //             </a>
    //         </section>
    
    //     </section>
    // </section >
    )
}

export default contentMerchPage;
