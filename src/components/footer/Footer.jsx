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
            <Link to="/" style={{ textDecoration: "none" }}>
              <span>Learn about COVID-19</span>
            </Link>
            &nbsp; | &nbsp;
            <Link to="/" style={{ textDecoration: "none" }}>
              <span>Protect yourself and others</span>
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
