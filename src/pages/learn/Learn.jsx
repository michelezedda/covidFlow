import "./learn.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import sickPic from "/sick.png";
import masksPic from "/masks.png";
import exposedPic from "/exposed.png";
import testingPic from "/testing.png";

function Learn() {
  return (
    <>
      <Navbar />
      <div className="learn">
        <div className="container">
          <h1>ABOUT COVID-19</h1>
          <div className="split">
            <div className="left">
              <h2>WHAT IS COVID-19?</h2>
              <p>
                COVID-19 is a respiratory disease that is caused by the virus
                SARS-CoV-2. Many people who are infected have mild symptoms or
                even no symptoms, but COVID-19 can also cause severe illness and
                death. Some people, including those who got no symptoms at
                first, get health problems that last for weeks or months.
              </p>
              <Link to="Masks" style={{ textDecoration: "none" }}>
                <div className="icons">
                  <img src={masksPic} />
                  Masks
                </div>
              </Link>
              <Link to="Sick" style={{ textDecoration: "none" }}>
                <div className="icons">
                  <img src={sickPic} />
                  Sick?
                </div>
              </Link>
              <Link to="Exposed" style={{ textDecoration: "none" }}>
                <div className="icons">
                  <img src={exposedPic} />
                  Exposed?
                </div>
              </Link>
              <Link to="Testing" style={{ textDecoration: "none" }}>
                <div className="icons">
                  <img src={testingPic} />
                  Testing?
                </div>
              </Link>
            </div>
            <div className="right">
              <h2>SYMPTOMS</h2>
              <p>
                Symptoms of COVID-19 may include one or more of the following:
                fever, chills, cough, shortness of breath or trouble breathing,
                feeling tired, muscle or body aches, headache, sore throat,
                nausea or vomiting, diarrhea, stuffy or runny nose, or new loss
                of taste or smell. This list of symptoms is not all inclusive.
                Some people with COVID-19 infection never get symptoms.
              </p>
              <h2>HOW IT SPREADS</h2>
              <p>
                The virus spreads when a person with COVID-19 releases
                respiratory droplets into the air for example, when speaking,
                singing, coughing, shouting, or exercising. These droplets are
                then breathed in by other people or land on their nose, mouth,
                or eyes. The virus also spreads by touching a surface with
                droplets on it and then touching your eyes, nose, or mouth but
                this is less common. There are certain places where COVID-19
                spreads more easily:
                <ul>
                  <li>Closed spaces with poor airflow;</li>
                  <li>Crowded places with many people nearby;</li>
                  <li>
                    Close contact settings especially where people are talking
                    (or breathing heavily) close together;
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Learn;
