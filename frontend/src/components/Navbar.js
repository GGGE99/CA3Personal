import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import profile from "../images/profile.png";
import "./css/Navbar.css";

function Navbar({ loggedIn }) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  function LinkMaker({ text, path }) {
    return (
      <li className="nav-item">
        <Link to={`/${path}`} className="nav-links" onClick={closeMobileMenu}>
          {text}
        </Link>
      </li>
    );
  }

  return (
    <>
      <nav className="navbar">
        <div className="n-container">
          <Link to="/" className="n-logo" onClick={closeMobileMenu}>
            BANDEN
            <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <LinkMaker text="Home" path="" />
            <LinkMaker text="Services" path="services" />
            <LinkMaker text="Products" path="products" />
            <li>
              <Link
                to="/signin"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                SING IN
              </Link>
            </li>
          </ul>

          {loggedIn && (
          <Link to="/profile">
            <img src={profile} className="profile-pic" />
          </Link>
        )}
          {button && (
            <Link to="signin" className="b-mobile">
              <Button buttonStyle="b--outline" link="/signin">
                SING IN
              </Button>
            </Link>
          )}
        </div>


      </nav>
    </>
  );
}
export default Navbar;
