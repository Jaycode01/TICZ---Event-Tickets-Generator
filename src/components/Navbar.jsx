import React from "react";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";
import TiczLogo from "../images/ticz logo.svg";
import { FaArrowRightLong } from "react-icons/fa6";

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <div className="logoContainer">
          <img src={TiczLogo} alt="Ticz Logo" />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/" className="link-item">
                Events
              </Link>
            </li>
            <li>
              <Link to="/tickets" className="link-item">
                About
              </Link>
            </li>
            <li>
              <Link to="/about" className="link-item">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <button>
            My Tickets <FaArrowRightLong />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
