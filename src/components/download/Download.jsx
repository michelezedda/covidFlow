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
              <h3>Download our app for free and stay safe!</h3>
              <p>Stay updated on COVID stats</p>
              <Link to="https://www.apple.com/app-store/">
                <img src={appStorePic} />
              </Link>
              <Link to="https://play.google.com/store/apps">
                <img src={playStorePic} />
              </Link>
            </div>
            <div className="right">
              <img src={phonePic} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Download;
