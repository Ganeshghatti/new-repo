import React, { useState } from "react";
import profile from "../Assets/Images/image-avatar.png";
import "./Navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [menuBgColor, setMenuBgColor] = useState("inherit");
  const [chevronRotation, setChevronRotation] = useState(0);
  const [showBorder, setShowBorder] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
    setMenuBgColor(isMenuVisible ? "inherit" : "#191e25");
    setChevronRotation(isMenuVisible ? 0 : 180);
    setShowBorder(true);
    setTimeout(() => {
      setShowBorder(false);
    }, 3000);
  };

  return (
    <>
      <div
        className="nav-full-menu-div"
        style={{ display: isMenuVisible ? "block" : "none" }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="div-for-menu-options">
            <i className="fa-solid fa-house" />
            <p>Home</p>
          </div>
        </Link>

        <div className="div-for-menu-options">
          <i className="fa-solid fa-tv"></i>
          <p>Category</p>
        </div>
        <div className="div-for-menu-options">
          <i className="fa-solid fa-bookmark"></i>
          <p>Bookmarks</p>
        </div>
        <div className="div-for-menu-options">
          <i className="fa-solid fa-bell"></i>
          <p>Notification</p>
        </div>
      </div>
      <div className="main-navbar">
        <div className="navbar-menu">
          {window.innerWidth > 850 ? (
            <div className="navbar-menu-options-div">
              <Link to="/" style={{ textDecoration: "none" }}>
                <i className="fa-solid fa-house">
                  <p>Home</p>
                </i>
              </Link>
              <i className="fa-solid fa-tv">
                <p>Category</p>
              </i>
              <i className="fa-solid fa-bookmark">
                <p>Bookmarks</p>
              </i>
              <i className="fa-solid fa-bell">
                <p>Notification</p>
              </i>
            </div>
          ) : (
            <div
              className="navbar-hamburgur-menu-div"
              onClick={toggleMenu}
              style={{
                backgroundColor: menuBgColor,
                border: showBorder ? "3px solid #90DFFE" : "none",
                zIndex:10,
              }}
            >
              <p id="menu-text">Menu</p>
              <label
                htmlFor="menu-text"
                style={{ transform: `rotate(${chevronRotation}deg)` }}
              >
                <i class="fa-solid fa-chevron-down"></i>
              </label>
            </div>
          )}
        </div>
        <i className="fa-solid fa-magnifying-glass" />
        <img src={profile} alt="profile" className="navbar-profile" />
      </div>
    </>
  );
}
