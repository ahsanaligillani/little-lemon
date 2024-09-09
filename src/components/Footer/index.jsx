import "./styles.css";
import Logo from "../assets/logo-white.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo-container">
        <img
          src={Logo}
          alt="Little Lemon Footer Logo"
          className="footer-logo"
        />
      </div>
      <div className="footer-content">
        <nav className="footer-nav">
          <h2 className="footer-heading">Navigation</h2>
          <ul className="footer-links">
            <li>
              <a href="/" className="footer-link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                About
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Menu
              </a>
            </li>
            <li>
              <a href="/booking" className="footer-link">
                Reservations
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Order Online
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Login
              </a>
            </li>
          </ul>
        </nav>
        <section className="footer-contact">
          <h2 className="footer-heading">Contact</h2>
          <ul className="footer-links">
            <li>
              <a href="#" className="footer-link">
                Address
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Phone Number
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Email
              </a>
            </li>
          </ul>
        </section>
        <section className="footer-social">
          <h2 className="footer-heading">Social Media</h2>
          <ul className="footer-links">
            <li>
              <a href="#" className="footer-link">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Twitter
              </a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
