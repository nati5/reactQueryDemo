import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../style/navBar.scss'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          My Site
        </Link>

        <div className="navbar__toggle" onClick={toggleNavbar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`navbar__menu ${isOpen ? 'active' : ''}`}>
          <li className="navbar__item">
            <Link
              to="/"
              className="navbar__link"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to="/root"
              className="navbar__link"
              onClick={() => setIsOpen(false)}
            >
              Root
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to="/about"
              className="navbar__link"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to="/contact"
              className="navbar__link"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar
