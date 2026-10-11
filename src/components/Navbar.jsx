import { useState } from "react";

import {
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import "./Navbar.css";

function Navbar({ darkMode, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div className="navbar-logo">

        <div className="logo-box">
          GS
        </div>

        <div className="logo-text">
          <h3>Ganesh Seemusiri</h3>
          <p>Digital Marketing Executive</p>
        </div>

      </div>


      <nav className="navbar-menu">

        <a href="#home">Home</a>

        <a href="#about">About</a>

        <a href="#tools">Tools</a>

        <a href="#certifications">Certifications</a>

        <a href="#contact">Contact</a>

      </nav>

      <div className="navbar-right">

        <button
          className="theme-button desktop-theme"
          onClick={toggleTheme}
          aria-label="Toggle theme"
          type="button"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <div className="mobile-controls">

          <button
            className="theme-button mobile-theme"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            type="button"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            type="button"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>


      {menuOpen && (
        <nav className="mobile-menu">

          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#tools" onClick={closeMenu}>
            Tools
          </a>

          <a href="#certifications" onClick={closeMenu}>
            Certifications
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>

        </nav>
      )}

    </header>
  );
}

export default Navbar;