import React from 'react';
import About from "../pages/about";
import Merch from "../pages/Merch";
import Contact from "../pages/contact";
import Info from "../pages/info";
import PageContent from '../PageContent';


function Page({ currentPage }) {
    const renderPage = () => {
        if (currentPage.name === "About") {
            return <About />
        } else if (currentPage.name === "Merch") {
            return <Merch />
        } else if (currentPage.name === "Contact") {
            return <Contact />
        } else if (currentPage.name === "Info") {
            return <Info />
        } else {
            return <About />
        }
    }
    return (
        <section>
            <PageContent>{renderPage()}</PageContent>
        </section>
    )
}
export default Page;