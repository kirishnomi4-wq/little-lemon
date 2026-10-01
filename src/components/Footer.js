import logo from "../assets/logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <img src={logo} alt="Little Lemon logo" className="footer-logo" />
        <nav aria-label="Footer navigation">
          <h2>Navigation</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#menu">Menu</a></li>
            <li><a href="/booking">Reservations</a></li>
          </ul>
        </nav>
        <address>
          <h2>Contact</h2>
          <p>678 Lemon Street, Chicago, IL</p>
          <p>
            <a href="tel:+13125550199">(312) 555-0199</a>
          </p>
          <p>
            <a href="mailto:hello@littlelemon.com">hello@littlelemon.com</a>
          </p>
        </address>
        <section aria-label="Social media">
          <h2>Social Media</h2>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
          </ul>
        </section>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Little Lemon</p>
    </footer>
  );
}

export default Footer;
