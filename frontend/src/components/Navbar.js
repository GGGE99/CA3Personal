import React from "react";
import { Link } from "react-router-dom";
import profile from "../images/profile.png";
import { Navbar, Nav } from "react-bootstrap";
import "./css/Navbar.css";

function NavbarBootstrap({ loggedIn, userRole }) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Link to="/" className="navbar-brand">
        BANDEN <i className="fab fa-typo3" />
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {userRole.includes("user") ? (
            <Link to="/services" className="nav-link">
              Features
            </Link>
          ) : userRole.includes("admin") ? (
            <Link to="/services" className="nav-link">
              Services
            </Link>
          ) : (
            <></>
          )}
        </Nav>
        <Nav>
          {loggedIn ? (
            <>
              <Link to="/profile" className="mr-4">
                <img src={profile} className="profile-pic" />
              </Link>
              <Link to="/signin">
                <button className="signin-button">Sign Out</button>
              </Link>
            </>
          ) : (
            <Link to="/signin">
              <button className="signin-button">Sign In</button>
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavbarBootstrap;
