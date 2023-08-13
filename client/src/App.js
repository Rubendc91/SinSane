import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Page from './components/Page';
// import PageContent from './components/PageContent';


function App() {
  const [pages] = useState([
    {
      name: "About"
    },
    {
      name: "Merch"
    },
    {
      name: "Contact"
    },
    {
      name: "Info"
    },
  ])

  const [currentPage, setCurrentPage] = useState(pages[0])
  return (
    <section>
      <Header>
        <Nav pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </Header>

      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </section>
  );
}
export default App;
