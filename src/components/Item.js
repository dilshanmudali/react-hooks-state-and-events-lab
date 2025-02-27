import React, {useState} from "react";


function Item({ name, category }) {

    const [cart, setCart] = useState(false)

    const cartStatus = cart ? 'in-cart' : ''
    const cartBtn = cart ? "remove" : "add"
    const cartText = cart ? "Remove From Cart": "Add to Cart" 
  

  return (
    <li className={cartStatus}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cartBtn} onClick={() => setCart(!cart)}>{cartText}</button>
    </li>
  );
}

export default Item;
