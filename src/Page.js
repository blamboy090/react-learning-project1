import React from "react";
import logo from "./logo.svg";

function CustomPage() {
  return (
    <div>
      <header>
        <nav>
          <img src={logo} alt="Logo" width="40px" />
        </nav>
      </header>
      <h1>Reasons I'm excited to learn React</h1>
      <ol>
        <li>React is needed for my job</li>
        <li>React is pretty nifty</li>
        <li>I would like to use this to mkae Jazz's site</li>
      </ol>
      <footer>
        <small>&copy; 2022 Lamboy Development. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default CustomPage;
