import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Page from './components/Page';
// import PageContent from './components/PageContent';
import { BrowserRouter as Route } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Login from "./components/pages/Login"

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
    // {
    //   name: "Login"
    // },
  ])

  
  const client = new ApolloClient({
    uri: "/graphql",
    cache: new InMemoryCache(),
  });
  // changeState = () => {
  //   currentPage.name =  "Login";
  // };

  const [currentPage, setCurrentPage] = useState(pages[0])
  return (
    <section>
      <ApolloProvider client={client}>
      <Header>
        <Nav pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </Header>
        {/* <button onclick={changeState()}>_</button> */}
      {/* <Route exact path="/login" element={<Login />} /> */}
          {/* </Route> */}

      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
      </ApolloProvider>
    </section>
  );
}
export default App;
