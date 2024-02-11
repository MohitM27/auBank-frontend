import React from "react";

function Navbar({ userName, theme }) {
  return (
    <nav
      className={`main-header navbar navbar-expand  navbar-dark ${
        theme ? "lightTheme" : ""
      }`}
    >
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" data-widget="pushmenu" role="button">
            <i className="fas fa-bars"></i>
          </a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <a className="nav-link fw-bold">Sales Dashboard</a>
        </li>
      </ul>

      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        <li className="nav-item d-none d-sm-inline-block">
          <a className="nav-link fw-900">Hello {userName}</a>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <img
            src="./user-icon.png"
            alt="user-icon"
            width={40}
            className="rounded-circle"
          />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
