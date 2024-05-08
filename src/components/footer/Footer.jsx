import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className="container">
          <p>
            Copyright © {currentYear} covidFlow - All rights reserved &nbsp; |
            &nbsp;
            <Link to="/Learn" style={{ textDecoration: "none" }}>
              <span>Learn about COVID-19</span>
            </Link>
            &nbsp; | &nbsp;
            <Link to="/Masks" style={{ textDecoration: "none" }}>
              <span>Masks</span>{" "}
            </Link>
            &nbsp; | &nbsp;
            <Link to="/Sick" style={{ textDecoration: "none" }}>
              <span>Sick?</span>{" "}
            </Link>
            &nbsp; | &nbsp;
            <Link to="/Exposed" style={{ textDecoration: "none" }}>
              <span>Exposed?</span>{" "}
            </Link>
            &nbsp; | &nbsp;
            <Link to="/Testing" style={{ textDecoration: "none" }}>
              <span>Testing?</span>
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
