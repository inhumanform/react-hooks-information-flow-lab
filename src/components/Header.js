// Deliv 1 - Import and create header from the Header component in App.js, pass through the darkmode callback function
import React from "react";

function Header({ isDarkMode, onDarkModeClick}) {

    return (

<header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
      );
    }

    export default Header;