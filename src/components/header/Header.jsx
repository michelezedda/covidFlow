import "./header.css";
import myLogo from "/logo.png";

function Header() {
  return (
    <>
      <div className="header">
        <h1>covidFlow</h1>
        <img src={myLogo} alt="covidFlow logo" />
      </div>
    </>
  );
}

export default Header;
