import "./notfoundpage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import notfoundpagePic from "/404.png";

function NotFoundPage() {
  return (
    <>
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
