import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import Nav from "./Nav";

// Site header: logo + main navigation (with a mobile menu toggle)
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" aria-label="Little Lemon home page">
          <img src={logo} alt="Little Lemon logo" className="logo" />
        </Link>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <Nav open={menuOpen} onNavigate={() => setMenuOpen(false)} />
      </div>
    </header>
  );
}

export default Header;
