import "./navbar.css";

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
