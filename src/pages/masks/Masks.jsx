import "./masks.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import maskingPic from "/masking.png";
import familymask2Pic from "/family-mask-2.png";
import wearamaskPic from "/wear-a-mask.png";
import Helmet from "react-helmet";
import { useEffect } from "react";

function Masks() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wearing a mask</title>
        <link rel="canonical" href="https://covidflow.netlify.app/" />
      </Helmet>
      <Navbar />
      <div className="masks">
        <div className="container">
          <h2>WEARING A MASK</h2>
          <div className="main-pic">
            <img src={familymask2Pic} alt="family wearing masks" />
          </div>
          <div className="split">
            <div className="left">
              <h3>HOW TO IMPROVE THE FIT AND FILTRATION OF YOUR MASK</h3>
              <p>
                <ul>
                  <li>
                    Wear a double mask-this is wearing a well-fitting cloth mask
                    over a medical mask. It makes the medical mask fit better
                    and improves filtration by adding extra layer(s).
                  </li>
                  <li>
                    Use a mask fitter or brace—these devices are worn over a
                    medical or cloth mask to reduce the leakage around the
                    edges.
                  </li>
                  <li>
                    Knot the ear loops close to the edge of the mask and tuck
                    the excess material so there is no gap. See Knot and Tuck
                    video.
                  </li>
                  <li>
                    Choose a mask with straps that go round your head for a
                    tighter fit.
                  </li>
                  <li>Wear a mask with nose wires.</li>
                  <li>
                    Certain types of facial hair, like beards, can make mask
                    fitting difficult. People with beards can trim them, use a
                    mask fitter/brace, or double mask.
                  </li>
                </ul>
                Important notes:
                <ul>
                  <li>
                    Double masking does not work with two medical masks because
                    they are too loose.
                  </li>
                  <li>
                    Respirators should not be worn with a second mask or a
                    brace/fitter as this interferes with the fit.
                  </li>
                </ul>
                Tips to check that your mask fits:
                <ul>
                  <li>
                    Check for gaps by cupping your hands around the outside
                    edges of the mask and feel for any air leakages. Make sure
                    no air is flowing from the area near your eyes or from the
                    sides of the mask.
                  </li>
                  <li>
                    If the mask has a good fit, you will feel warm air come
                    through the front of the mask and may be able to see the
                    mask material move in and out with each breath.
                  </li>
                  <li>
                    If you have to continually adjust your mask, it might not
                    fit properly. Consider trying different types or sizes of
                    masks.
                  </li>
                </ul>
              </p>
              <img src={wearamaskPic} alt="wear a mask" />
            </div>
            <div className="right">
              <h3>WHO SHOULD NOT WEAR A MASK</h3>
              <p>
                The following people should not wear a mask:
                <ul>
                  <li>Children under age 2.</li>
                  <li>
                    People who cannot safely wear a mask, such as someone who is
                    unconscious, incapacitated, or who is unable to remove a
                    mask without help.
                  </li>
                  <li>
                    Workers in situations where wearing a mask would create a
                    risk, as determined by local, state, or federal regulators
                    or workplace safety guidelines.
                  </li>
                </ul>
              </p>
              <h3>KNOW WHICH MASKS PROVIDE THE BEST PROTECTION</h3>
              <img src={maskingPic} alt="mask infos" />
              <p>
                For a mask to work well, it needs to have both a good fit and
                good filtration:
                <ul>
                  <li>
                    Good fit means that the mask covers your mouth and nose and
                    fits snugly against the sides of your face and your nose.
                  </li>
                  <li>
                    Good filtration means the material that the mask is made of
                    blocks airborne particles well. You can get good filtration
                    by wearing a mask that has several layers made of certain
                    specialized materials.
                  </li>
                </ul>
                The best mask has a high-quality filter, fits well against your
                face, and is comfortable enough for you to wear consistently.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Masks;
