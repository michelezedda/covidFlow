import "./exposed.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import virusPic from "/virus.png";
import socialdistancingPic from "/social-distancing.png";
import wearingmaskgirlPic from "/wearing-a-mask-girl.png";
import { Helmet } from "react-helmet";

function Exposed() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>What if you are exposed?</title>
        <link rel="canonical" href="https://covidflow.netlify.app/" />
      </Helmet>
      <Navbar />
      <div className="exposed">
        <div className="container">
          <h2>WHAT IF YOU ARE EXPOSED?</h2>
          <div className="main-pic">
            <img src={virusPic} />
          </div>
          <div className="split">
            <div className="left">
              <h3>OVERVIEW</h3>
              <p>
                <b>If you feel sick with cold, flu, or COVID-19 symptoms:</b>
                <ol>
                  <li>
                    <b>Isolate: Stay home away from others</b> until you have
                    not had a fever for 24 hours (without using fever-reducing
                    medication) and other symptoms are improving. LACDPH
                    recommends that you test negative before leaving isolation.
                  </li>
                  <li>
                    <b>Wear a well-fitting mask</b> around others for 10 days
                    after you started feeling sick, even if your symptoms are
                    improving. Take action to protect others from getting sick.
                  </li>
                  <li>
                    <b>Get tested for COVID-19 right away.</b> If you test
                    negative but continue to feel sick, test again 48 hours
                    later. If you continue testing negative, talk to your doctor
                    about testing for other respiratory pathogens, especially if
                    you are high-risk for severe illness.
                  </li>
                  <li>
                    <b>
                      Avoid contact with high-risk individuals for 10 days after
                      you started feeling sick.
                    </b>
                    This includes the elderly, people who reside temporarily or
                    live in a congregate facilityi or people who are
                    immunocompromised.
                  </li>
                  <li>
                    <b>Get treatment</b> for COVID-19 or influenza. Talk to your
                    provider about options.
                  </li>
                </ol>
                <b>
                  If you test positive for or a healthcare provider diagnoses
                  you with COVID-19:
                </b>
                <ol>
                  <li>
                    If you have symptoms:
                    <ul>
                      <li>
                        <b>Follow the steps above</b> for people who feel sick
                        with symptoms of a cold, flu, or COVID-19.
                      </li>
                    </ul>
                  </li>
                  <li>
                    If you do not have symptoms, you do not need to stay home as
                    long as you:
                  </li>
                  <ul>
                    <li>
                      <b>Wear a well-fitting mask</b> around others for 10 days
                      after you tested positive.
                    </li>
                    <li>
                      <b>Monitor yourself for symptoms.</b> If you start feeling
                      sick, immediately follow instructions above for people who
                      feel sick with symptoms of a cold, flu, or COVID-19.
                    </li>
                    <li>
                      <b>
                        Avoid contact with high-risk individuals for 10 days
                        after you started feeling sick.
                      </b>
                      Higher risk individuals include the elderly, people who
                      reside temporarily or live in a congregate facilityi or
                      people who are immunocompromised.
                    </li>
                  </ul>
                  In addition, tell anyone you’ve been around while you were
                  potentially infectious (that is, two days before and while you
                  felt sick) that they have been exposed and need to follow the
                  instructions for people exposed to COVID-19 below.
                </ol>
                <b>If you are a close contact to someone with COVID-19:</b>
                <ol>
                  <li>
                    <b>Wear a well-fitting mask</b> around others for 10 days
                    after your last exposure, especially if you have contact
                    with high-risk individuals like people who reside
                    temporarily or live in a congregate facility or people who
                    are immunocompromised.
                  </li>
                  <li>
                    <b>Monitor your health</b> for 10 days after your last
                    exposure. If you start to feel sick, immediately follow
                    instructions above for people who feel sick with symptoms of
                    COVID-19.
                  </li>
                  <li>
                    <b>Get tested</b> 3-5 days after you were last exposed. If
                    you recently recovered from COVID-19 in the last 90 days,
                    review testing recommendations.
                  </li>
                </ol>
              </p>
              <img src={wearingmaskgirlPic} />
            </div>
            <div className="right">
              <h3>
                PROTECT OTHERS: STAY HOME AND AWAY FROM OTHERS IF YOU FEEL SICK
              </h3>
              <img src={socialdistancingPic} />
              <p>
                If you have symptoms of COVID-19 or another respiratory illness,
                stay home away from others until you have not had a fever for 24
                hours (without using fever-reducing medication) and other
                symptoms are mild and improving. Take the following actions
                while you isolate:
                <ul>
                  <li>
                    <b>Stay home except to get medical care.</b>
                    <ul>
                      <li>
                        If you need to leave home to get medical care, wear a
                        well-fitting mask.
                      </li>
                      <li>
                        If you need help finding social services, or essential
                        items like food and medicines, call 2-1-1.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>Separate yourself from others in your home.</b>
                    <ul>
                      <li>
                        Wear a mask if you need to be in the same room as other
                        household members. This is especially important when you
                        are around people at higher risk for getting very sick
                        from COVID-19.
                      </li>
                      <li>Do not have non-essential visitors.</li>
                      <li>
                        If you are immunocompromised or if you were severely ill
                        with COVID-19, talk to your doctor about when you can be
                        around other people.
                      </li>
                      <li>
                        Bring as much fresh air into your home as possible. Open
                        windows (if it is safe to do so) and use fans to blow
                        air out or use air purifiers. See the CDC Improving
                        Ventilation in Your Home webpage for more information.
                      </li>
                      <li>
                        Avoid contact with high-risk individuals like people who
                        reside temporarily or live in a congregate facilityi or
                        people with immunocompromising conditions for 10 days.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>
                      Use a separate bathroom or, if sharing a bathroom, clean
                      and disinfect touched surfaces after each use.
                    </b>
                  </li>
                  <li>
                    <b>
                      Wash your hands often with soap and water for at least 20
                      seconds.
                    </b>
                    <ul>
                      <li>
                        See when and how to wash your hands. If you can’t wash
                        your hands, use an alcohol-based hand sanitizer with at
                        least 60% alcohol.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <b>
                      Clean and disinfect all “high-touch” surfaces routinely
                      (at least once daily).
                    </b>
                    <ul>
                      <li>
                        Use household cleaning and disinfectant sprays or wipes.
                        Be sure to follow the product label instructions.
                      </li>
                    </ul>
                  </li>
                </ul>
                If your COVID-19 symptoms return or get worse after you have
                recovered, you may have COVID-19 rebound. Stay home until your
                symptoms improve. Talk to your doctor about your symptoms or
                concerns.
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

export default Exposed;
