import React from 'react';
import logo from './images/logo.svg'
import stlyes from "./Navbar.module.css";

function Navbar() {
    return (
        <nav className={stlyes.nav}>
            <img src={logo} alt='logo' className={stlyes.navIcon}/>
            <h3 className={stlyes.navLogoText}>ReactFacts</h3>                  
            <h4 className={stlyes.navTitle}>React Course - Project 1</h4>        
        </nav>
    );

}
export default Navbar;