import "./notfoundpage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import notfoundpagePic from "/404.png";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

function NotFoundPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found!</title>
        <link rel="canonical" href="https://covidflow.netlify.app/" />
      </Helmet>
      <Navbar />
      <div className="notfoundpage">
        <div className="container">
          <h2>
            Page not found! Even our servers are practicing social distancing.
          </h2>
          <img src={notfoundpagePic} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default NotFoundPage;
