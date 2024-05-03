import "./navbar.css";
import myLogo from "/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/">
            <img src={myLogo} alt="covidFlow logo" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
