import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/footer/Footer";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>covidFlow - Stay Safe</title>
        <link rel="canonical" href="https://covidflow.netlify.app/" />
      </Helmet>
      <Header />
      <Dashboard />
      <Footer />
    </>
  );
}

export default App;
