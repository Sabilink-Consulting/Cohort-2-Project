import React from "react";
import { NavLink } from 'react-router-dom';
import styles from "./Navbar&Sidebar.module.css";


function Sidebar({ isOpen, toggleSidebar }) {
    return (
      <aside
        className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""}`}
      >
        <button className={styles.closeBtn} onClick={toggleSidebar}>
          ×
        </button>
        <ul className={styles.sidebarLinks}>
        <li>
              <NavLink to="/" onClick={toggleSidebar}>
              Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/pages" onClick={toggleSidebar}>
              Pages
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" onClick={toggleSidebar}>
              Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" onClick={toggleSidebar}>
              Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={toggleSidebar}>
              Contact
              </NavLink>
            </li>
          </ul>
      </aside>
    );
  };
  
  export default Sidebar;