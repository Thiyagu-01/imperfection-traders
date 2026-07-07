import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./Navbar.css";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "Product", path: "/product" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
  return (
    <nav className="navbar" ref={menuRef}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Imperfection Traders" />
        </Link>

        <ul className="navbar-links">
          {NAV_ITEMS.map((item) => (
            <li key={item.name} className="navbar-item">
              <Link
                to={item.path}
                className={
                  location.pathname === item.path
                    ? "navbar-link navbar-link--active"
                    : "navbar-link"
                }
              >
                {item.name}
                <span className="navbar-underline"></span>
              </Link>
            </li>
          ))}
        </ul>

        <button className="navbar-cta">
          Order Fresh →
        </button>

        <button
          className={`navbar-hamburger ${
            menuOpen ? "navbar-hamburger--open" : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>

      <div
        className={`navbar-mobile-menu ${
          menuOpen ? "navbar-mobile-menu--open" : ""
        }`}
      >
        <ul className="mobile-nav-list">
          {NAV_ITEMS.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="mobile-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}