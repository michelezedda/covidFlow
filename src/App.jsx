import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Dashboard from "./components/dashboard/Dashboard";
import Footer from "./components/footer/Footer";
import Download from "./components/download/Download";

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
      <Navbar />
      <Header />
      <Dashboard />
      <Download />
      <Footer />
    </>
  );
}

export default App;
