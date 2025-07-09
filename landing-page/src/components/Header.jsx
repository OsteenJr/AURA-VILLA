import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  function showSidebar() {
    setIsSidebarOpen(true);
  }
  function hideSidebar() {
    setIsSidebarOpen(false);
  }
  return (
    <>
      <header>
        <nav className="navbar">
          <a href="#" className="nav-logo">
            AURA VILLA
          </a>
          <ul className="nav-links">
            <li className="nav-item">
              <a href="#" className="nav-link">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Villas
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
          <ul className={`sidebar ${isSidebarOpen ? "active" : ""}`}>
            <i className="ri-close-large-line" onClick={hideSidebar}></i>
            <li className="nav-item">
              <a href="#" className="nav-link">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Villas
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
          <a href="#" className="menu-btn" onClick={showSidebar}>
            <i className="ri-menu-fill"></i>
          </a>
          <button className="nav-btn">Reserve Now</button>
        </nav>
      </header>
    </>
  );
}

export default Header;
