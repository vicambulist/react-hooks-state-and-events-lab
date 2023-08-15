import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(false)

  function handleAdd(){
    setInCart(!inCart)
    console.log(inCart)
  }

  return (
    <li className = {inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAdd} 
        className = "button">
          {inCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
