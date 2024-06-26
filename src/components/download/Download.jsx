import "./download.css";
import appStorePic from "/app-store.png";
import playStorePic from "/play-store.png";
import phonePic from "/phone.png";
import { Link } from "react-router-dom";

function Download() {
  return (
    <>
      <div className="download">
        <div className="container">
          <div className="split">
            <div className="left">
              <h3>Download our app for free and ensure your safety!</h3>
              <p>
                Stay informed with real-time updates on COVID-19 statistics and
                protect yourself and your loved ones.
              </p>
              <Link to="https://www.apple.com/app-store/">
                <img src={appStorePic} alt="app store" />
              </Link>
              <Link to="https://play.google.com/store/apps">
                <img src={playStorePic} alt="play store" />
              </Link>
            </div>
            <div className="right">
              <img src={phonePic} alt="smartphone" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Download;
