import React from "react";
import logo from "./logo.svg";
import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="Logo" width="40px" />
        <ul className={styles.navitems}>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;