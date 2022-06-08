import React from "react";
import logo from "./logo.svg";
import styles from "./Header.module.css";

function Header() {
  return (
    <header>
      <nav className={styles.nav}>
        <img className={styles.logo} src={logo} alt="Logo" />
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