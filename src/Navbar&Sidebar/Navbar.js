import React from 'react';

import { NavLink } from 'react-router-dom';
import styles from './Navbar&Sidebar.module.css';
import { useState } from "react";
import Sidebar from './Sidebar'

function Navbar(){
    const [isSidebarOpen, setSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
  
    return (
      <>
        <nav className={styles.nav}>
          <div className={styles.logo}>
           
            <NavLink to="/"><img src='' alt='Beeko' />Beeko</NavLink>
          </div>
          <ul className={`${styles.navLinks} ${styles.navLinksDesktop}`}>
            <li>
              <NavLink to="/" exact activeClassName={styles.active}>
              Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/pages" exact activeClassName={styles.active}>
              Pages
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" exact activeClassName={styles.active}>
              Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" exact activeClassName={styles.active}>
              Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" exact activeClassName={styles.active}>
              Contact
              </NavLink>
            </li>
          </ul>
          <button className={styles.menuToggle} onClick={toggleSidebar}>
            ☰
          </button>
        </nav>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </>
    );
  };
  
  export default Navbar;



  
  
