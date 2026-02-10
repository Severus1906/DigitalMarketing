import { useState } from "react";
import { Link } from "react-router-dom";
import SeverusLogo from "../assets/severuslogo.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="brand">
          <img className="severus-logo" src={SeverusLogo} alt="Severus Agency" />
          <div className="logo">Severus Agency</div>
        </div>

        <nav className={`nav ${open ? "open" : ""}`}>
          <Link className="linking" to="/" onClick={closeMenu}>Home</Link>
          <Link className="linking" to="/about" onClick={closeMenu}>About</Link>
          <Link className="linking" to="/services" onClick={closeMenu}>Services</Link>
          <Link className="linking" to="/contact" onClick={closeMenu}>Contact</Link>
        </nav>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;
