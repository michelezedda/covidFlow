import "./header.css";
import { Link } from "react-router-dom";
import sickPic from "/sick.png";
import masksPic from "/masks.png";
import exposedPic from "/exposed.png";
import testingPic from "/testing.png";
import infoPic from "/info.png";

function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="about">
            <h1>United Against COVID-19: Let's Flow Together!</h1>
            <img src={infoPic} alt="info" className="wiggle" />
            <p>
              COVID-19 is a respiratory disease that is caused by the virus
              SARS-CoV-2. Many people who are infected have mild symptoms or
              even no symptoms, but COVID-19 can also cause severe illness and
              death. Some people, including those who got no symptoms at first,
              get health problems that last for weeks or months.
            </p>
            <div className="button-wrapper">
              <Link to="Learn">
                <button>Learn about COVID-19</button>
              </Link>
            </div>
          </div>
          <div className="more">
            <Link to="Masks" style={{ textDecoration: "none" }}>
              <div className="icons">
                <img src={masksPic} alt="masks" />
                Masks
              </div>
            </Link>
            <Link to="Sick" style={{ textDecoration: "none" }}>
              <div className="icons">
                <img src={sickPic} alt="sick" />
                Sick?
              </div>
            </Link>
            <Link to="Exposed" style={{ textDecoration: "none" }}>
              <div className="icons">
                <img src={exposedPic} alt="exposed" />
                Exposed?
              </div>
            </Link>
            <Link to="Testing" style={{ textDecoration: "none" }}>
              <div className="icons">
                <img src={testingPic} alt="testing" />
                Testing?
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
