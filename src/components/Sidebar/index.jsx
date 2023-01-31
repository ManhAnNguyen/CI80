import React from "react";
import "./styles.css";
import { AiFillHome } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <ul>
        <li>
          <AiFillHome />
          <span>Home</span>
        </li>
        <li>
          <AiFillHome />
          <span>Home</span>
        </li>
        <li>
          <AiFillHome />
          <span>Home</span>
        </li>
        <li>
          <AiFillHome />
          <span>Home</span>
        </li>
        <li>
          <AiFillHome />
          <span>Home</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
