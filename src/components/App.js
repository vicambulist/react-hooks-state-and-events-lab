import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  // const appClass = false ? "App dark" : "App light"
 
  //Also Note: had to move up the line below so that isDark
  //exists when it gets referenced in the appClass
  
   const [isDark, setDark] = useState(false)
  
   const appClass = isDark ? "App dark" : "App light"
  
 

  function handleDark () {
    setDark(!isDark)}

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDark}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
