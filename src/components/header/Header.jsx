import "./header.css";
import Link from "react-router-dom";

function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="about">
            <h1>About COVID-19</h1>
            <p>
              COVID-19 is a respiratory disease that is caused by the virus
              SARS-CoV-2. Many people who are infected have mild symptoms or
              even no symptoms, but COVID-19 can also cause severe illness and
              death. Some people, including those who got no symptoms at first,
              get health problems that last for weeks or months.
            </p>
            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">
              <button>Learn about COVID-19</button>
            </a>
            <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">
              <button>Protect yourself and others</button>
            </a>
          </div>
          <div className="more">
            <Link to="/">
              <div className="icons">Masks</div>
            </Link>
            <Link to="/">
              <div className="icons">Sick?</div>
            </Link>
            <Link to="/">
              <div className="icons">Exposed?</div>
            </Link>
            <Link to="/">
              <div className="icons">Testing?</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
