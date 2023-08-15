import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  //Make a state for which category the user selects.
  const [selectedCategory, setSelectedCategory] = useState("All")

  // Make a function that handles the change in fitler 
  function handleFilterChange(event){
    setSelectedCategory(event.target.value)
  }
    
  // Make a constant of the items to display
  const itemsToDisplay = items.filter((item) => {
    if(selectedCategory === "All") {
      return true;
    }
    else {
      return item.category === selectedCategory
    }
  // Could also do this as a ternery, like this:
  // selectedCategory === "All" ? True : item.category = selectedCategory

  })




  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {/* {items.map((item) => ( */}
        {/* Add filtered itemsToDisplay here */}
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
