import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {


  const [toggle, setToggle] = useState(false)
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = toggle ? "App dark" : "App light"
  const modeName = toggle ? 'Dark Mode' : 'Light Mode'

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={() => setToggle(!toggle)}>{modeName}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
