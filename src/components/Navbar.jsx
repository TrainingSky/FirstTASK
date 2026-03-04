import { Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './compoStyle/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container-fluid px-4">
        <Link className="navbar-brand" to="/">
          Skyfall Enterprises
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {['/', '/services', '/work',  '/about', '/ContactPage'].map((path, index) => {
              const name = path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2);
              return (
                <li className="nav-item" key={path}>
                  <Link
                    className={`nav-link ${location.pathname === path ? 'active' : ''}`}
                    to={path}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link className="btn btn-contact" to="/contact">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
