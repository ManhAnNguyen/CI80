import React from "react";
import "./styles.css";
const Header = () => {
  return (
    <div id="header">
      <div className="logo">LOGO</div>
      <div className="options-link">
        <ul>
          <li>
            <a href="/">About </a>
          </li>
          <li>
            <a href="/">Sign in </a>
          </li>
          <li>
            <a href="/">Sign up </a>
          </li>
          <li>
            <a href="/">Contact </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
