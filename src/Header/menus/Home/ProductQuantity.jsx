import { Product } from "./ProductsArray";
import React, { useState } from "react";

const Quantity = (Props) => {
  const [quantity, setquantiy] = useState(1);
  const [Cart, setCart] = useState("Add To Cart");

  const AddCart = () => {
    setCart(
      <img
        className="addCart_img"
        src="https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif"
      />
    );
    setTimeout(() => {
      setCart("Added");
    }, 1500);
  };

  const Decrease = () => {
    if (quantity > 1) {
      setquantiy(quantity - 1);
    } else {
      alert("Minimum value reached");
    }
  };
  const Increase = () => {
    if (quantity < 10) {
      setquantiy(quantity + 1);
    } else {
      alert("Maximum value reached");
    }
  };
  return (
    <>
      <div className="item_box_price">
        <div className="box_price">
          <h1>${Props.price * quantity}</h1>
          <h3>$50</h3>
        </div>
        <div className="Qty">
          <button className="increment-button" onClick={Increase}>
            +
          </button>
          &nbsp;&nbsp; {quantity} &nbsp;&nbsp;
          <button className="decrement-button" onClick={Decrease}>
            -
          </button>
        </div>
        <div className="addtocart_btn">
          <button className="addcart-btn" onClick={AddCart}>
            {Cart}
          </button>
        </div>
      </div>
    </>
  );
};

export { Quantity };
