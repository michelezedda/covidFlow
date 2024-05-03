import "./footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className="container">
          <p>
            Copyright © {currentYear} covidFlow - All rights reserved &nbsp; |
            &nbsp;
            <span>About us</span>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
