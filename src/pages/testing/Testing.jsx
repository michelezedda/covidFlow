import "./testing.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import testPic from "/test.png";
import protectedPic from "/protected.png";
import antigenPic from "/antigen.png";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

function Testing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Testing</title>
        <link rel="canonical" href="https://covid-flow.vercel.app/" />
      </Helmet>
      <Navbar />
      <div className="testing">
        <div className="container">
          <h2>TESTING</h2>
          <div className="main-pic">
            <img src={antigenPic} alt="antigen" />
          </div>
          <div className="split">
            <div className="left">
              <h3>HOW TO GET A TEST</h3>
              <p>
                <ul>
                  <li>
                    Visit a testing site
                    <ul>
                      <li>Health center</li>
                      <li>Pharmacy</li>
                    </ul>
                  </li>
                  <li>
                    Get free test kits
                    <ul>
                      <li>
                        By mail from Public Health - for people who are age 65+
                        or unable to leave home.
                      </li>
                      <li>
                        At a Public Health Multi-Service Vaccination Site.
                      </li>
                      <li>At a local Library.</li>
                      <li>In your community.</li>
                      <li>At a pharmacy with your Medi-Cal card.</li>
                      <li>Using other health insurance.</li>
                    </ul>
                  </li>
                  <li>
                    Contact your doctor or health plan
                    <br />
                    If you have insurance, your health insurer is required to
                    cover the entire cost of testing if a doctor orders the
                    test. You do not need to have symptoms to request a test.
                    Insurance companies may not cover COVID-19 testing if done
                    as part of an employee return-to-work program. If your
                    employer requires a test, go through your job.
                  </li>
                </ul>
              </p>
              <img src={protectedPic} alt="protected" />
            </div>
            <div className="right">
              <h3>TYPES OF TESTS</h3>
              <img src={testPic} alt="test" />
              <p>
                There are different types of COVID-19 tests.
                <br />
                Viral tests are swab or saliva tests that look for current
                infection. The main types are antigen tests and polymerase chain
                reaction (PCR) tests.
                <ul>
                  <li>
                    Antigen tests are rapid tests that give results in 10-30
                    minutes. Most self-tests are antigen tests. Antigen tests
                    are not as good at detecting the COVID-19 virus as PCR
                    tests, meaning you might get a false negative result. For
                    this reason, the FDA recommends repeating negative antigen
                    tests.
                  </li>
                  <li>
                    PCR tests, also called nucleic acid amplification tests
                    (NAATs), are more likely to detect the COVID-19 virus than
                    antigen tests. They are often collected by a healthcare
                    provider and sent to a laboratory for testing. It may take
                    1-3 days to get results.
                  </li>
                </ul>
                Antibody tests are blood tests that look for past infection.
                They are not used to diagnose a current COVID-19 infection. See
                CDC antibody tests.
              </p>
              <h3>SELF TESTS</h3>
              <p>
                How to use a self-test:
                <ul>
                  <li>
                    Check the expiration date. If an antigen self-test is past
                    its expiration date, it may still be good to use. Follow the
                    FDA expiration date extension information below to see if
                    you can still use the test.
                  </li>
                  <li>
                    Follow the manufacturer’s step by step instructions exactly.
                    The instructions are in the test kit box. They include how
                    to interpret the test results.
                  </li>
                  <li>
                    Keep all parts of the test kit out of reach of children and
                    pets before and after use. Supervise children when testing.
                    The chemicals and small parts can cause harm if they are
                    used incorrectly.
                  </li>
                  <li>
                    Make sure that you understand your test results - read the
                    results section on the instructions that come with the test.
                    If you get a negative result follow the recommendations for
                    repeat testing.
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

export default Testing;
