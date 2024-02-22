import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
// Deliv. 1 - Import the Header, must create a file called Header.js
import Header from "./Header"



function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [items, setItems] = useState(itemData)

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  // Pass through the Darkmode function, original moved from here to Header.js
  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkmode={isDarkMode} onDarkModeClick={onDarkModeClick} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
