import { useState } from "react";
import { BsMenuButtonWide } from "react-icons/bs";
import { IoCloseCircle } from "react-icons/io5";

import styles from "./index.module.css";
import BtnTransparent from "../../utilities/BtnTransparent";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // State: Show Menu
  const [showMenu, setShowMenu] = useState(false);
  const toggleShowMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  // Function: Render Mobile Menu
  const renderMobileMenu = () => (
    <div className={styles.menuRow}>
      {/* Nav Links */}
      <ul onClick={toggleShowMenu}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/vaccination"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            Vaccination
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? styles.active : undefined)}
          >
            About
          </NavLink>
        </li>
      </ul>

      {/* Close Button */}
      <BtnTransparent onClick={toggleShowMenu}>
        <IoCloseCircle />
      </BtnTransparent>
    </div>
  );

  return (
    <header>
      <nav className={styles.navbar}>
        {/* Main Navbar row */}
        <div className={styles.mainRow}>
          <h3>
            <span className={styles.logo1}>COVID</span>
            <span className={styles.logo2}>INDIA</span>
          </h3>

          <BtnTransparent onClick={toggleShowMenu}>
            <BsMenuButtonWide />
          </BtnTransparent>
        </div>

        {/* Mobile Menu */}
        {showMenu && renderMobileMenu()}
      </nav>
    </header>
  );
};

export default Navbar;
